(function () {
    window.App = {
        models: {},
        views: {},
        collections: {}
    };
    $(window).resize(function () {
        initSizes();
    });


    var h;
    var w;
    initSizes();
    var coefHeightToWidth = 60 / 42;
    var discardCoef = 0.75;
    var mainPlayerCoef = 1.2;

    function initSizes() {
        w = Math.min(window.innerHeight / 20, window.innerWidth / 22);
        h = w * coefHeightToWidth;
    }
    App.models.Tile = Backbone.Model.extend({
        initialize: function () {

        },
        defaults: {
            name: "",
            angle: 0,
            isOpened: false,
            isVertical: false
        },
        toString: function () {
            return "Tile name: [" + this.get('name') + '] ' + this.get('angle') + ",  opened: " + this.get('isOpened');
        }
    });


    App.views.TileView = Backbone.View.extend({
        initialize: function () {
            this.model.on('change', this.render, this);
            $(window).on("resize.app", _.bind(this.resizeEvent, this));
        },

        resizeEvent: function () {
            this.render();
        },
        remove: function () {
            $(window).off("resize.app");
            Backbone.View.prototype.remove.call(this);
        },

        tagName: "img",
        //<img id="imageTopId_6" src="images/tile.jpg" class="tileTop tile"/>
//    template: _.template("<img src=\"images/<%=name%>.jpg\"/>"),
        template0: _.template("images/<%=name%>.gif"),
        template90: _.template("images/<%=name%>_90.gif"),
        render: function () {
            var angle = this.model.get('angle');
            /* //todo: it needs some enhancements and bug fixing
            //it uses only rotating images
            this.$el.attr("src", this.template0(this.model.toJSON()));
            this.$el.height(h);
            this.$el.width(w);
            this.$el.rotate(angle);
            if (this.model.get('isVertical')) {
                //todo problem with vertical, negative padding doesn't work
                //if (angle == 90) {
                //    this.$el.css('padding-left', w-h);
                //}
                //else if (angle == 270) {
                //    this.$el.css('padding-bottom',  w -h);
                //}
                this.$el.height(w);
            }
            else
            {
                if (angle == 90) {
                    //            this.$el.css('margin-top', -10);
                    this.$el.css('padding-right', h - w);
                    //this.$el.css('padding-right', w-h);
                }
                else if (angle == 270) {
                    this.$el.css('padding-left', h - w);
                    //this.$el.css('padding-left',  w -h);
                    //            this.$el.css('margin-right', 1);
                }
                if (angle == 90 || angle == 270) {
                    //            this.$el.css('padding-top', (h-w)/2);
                }
            }*/
            //it uses rotated images
            //todo remove jqueryRotate.2.1.js
            var isPlayer = this.model.get('isPlayer') === true;
            var height = isPlayer ? h : h * discardCoef;
            var width = isPlayer ? w : w * discardCoef;
            if (this.model.get('isMainPlayer')) {
                height *= mainPlayerCoef;
                width *= mainPlayerCoef;
            }
            this.$el.removeClass();
            if (angle == 0 || angle == 180) {
                this.$el.attr("src", this.template0(this.model.toJSON()));
                if (angle == 180) {
                    this.$el.addClass('rotated180');

                }

                this.$el.height(height);
                this.$el.width(width);
            }
            if (angle == 90 || angle == 270) {
                this.$el.attr("src", this.template90(this.model.toJSON()));
                if (angle == 270) {
                    this.$el.addClass('rotated180');
                }
                this.$el.height(width);
                this.$el.width(height);
            }
            if (this.model.get('isVertical')) {
                this.$el.css({display: 'block'});
            }
            return this;
        }
    });

    App.models.TilesGroup = Backbone.Model.extend({
        defaults: function () {
            this.tilesGroup = null;
            this.isVertical = false;
            this.isPlayer = false;

        }
    });
    App.views.TilesGroupView = Backbone.View.extend({
        initialize: function () {
            this.render();
        },
        render: function () {
            var tilesGroup = this.model.get('tilesGroup');
            for (var i = 0; i < tilesGroup.length; i++) {
                var div = $("<div>");
                var isVertical = this.model.get("isVertical");
                if (this.model.get("isPlayer")) {
                    if (!isVertical) {
                        div.css({display: 'inline-block', marginLeft: '2px', marginRight: '2px'});
                    }
                    else {
                        div.css({marginTop: '2px', marginBottom: '2px'});
                    }
                } else {
                    if (!isVertical) {
                        div.css({marginLeft: '2px', marginRight: '2px'});
                    }
                    else {
                        div.css({display: 'inline-block', marginTop: '2px', marginBottom: '2px'});
                    }
                }
                for (var j = 0; j < tilesGroup[i].length; j++) {
                    var tile = tilesGroup[i][j];
                    var tileView = new App.views.TileView({model: tile});
                    if (isVertical) {
                        tile.set('isVertical', true);
                    }
                    div.append(tileView.render().el);
                }
                div.css({border: '1px black solid', background: '#efe'});
                this.$el.append(div);
            }
            this.$el.css({border: '1px yellow solid', background: '#cfc'});
            this.$el.css({display: 'inline-block'});
        }
    });
}());
