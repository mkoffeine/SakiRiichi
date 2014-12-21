(function () {
    window.App = {
        models: {},
        views: {},
        collections: {}
    };


    var h = 100;
    var w = 60;
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
        },

        tagName: "img",
        //<img id="imageTopId_6" src="images/tile.jpg" class="tileTop tile"/>
//    template: _.template("<img src=\"images/<%=name%>.jpg\"/>"),
        template0: _.template("images/<%=name%>.jpg"),
        template90: _.template("images/<%=name%>_90.jpg"),
        render: function () {
            var angle = this.model.get('angle');
            //todo: it needs some enhancements and bug fixing
            //it uses rotated image
            /*this.$el.attr("src", this.template0(this.model.toJSON()));
             this.$el.height(h);
             this.$el.width(w);
             this.$el.rotate(angle);
             if (angle == 90) {
             //            this.$el.css('margin-top', -10);
             this.$el.css('padding-right', h-w);
             }
             else if (angle == 270) {
             this.$el.css('padding-left', h-w);
             //            this.$el.css('margin-right', 1);
             }
             if (angle == 90 || angle == 270) {
             //            this.$el.css('padding-top', (h-w)/2);
             }*/
            //it uses rotating
            if (angle == 0 || angle == 180) {
                this.$el.attr("src", this.template0(this.model.toJSON()));
                if (angle == 180) {
                    this.$el.rotate(180);
                }
                this.$el.height(h);
                this.$el.width(w);
            }
            if (angle == 90 || angle == 270) {
                this.$el.attr("src", this.template90(this.model.toJSON()));
                if (angle == 270) {
                    this.$el.rotate(180);
                }
                this.$el.height(w);
                this.$el.width(h);
            }
            if (this.model.get('isVertical')) {
                this.$el.css({display: 'block'});
            }
            return this;
        }
    });

    App.collections.Tiles = Backbone.Collection.extend({
        initialize: function () {
            this.isVertical = false;
        },
        model: App.views.TileView

    });
    App.views.TilesView = Backbone.View.extend({

        initialize: function () {
            this.render();
        },
        tagName: "div",
        render: function () {

            console.log("isVertical--: " + this.collection.isVertical);
            this.collection.each(function (tile) {

                var tileView = new App.views.TileView({model: tile});
                //console.log('tile' + tile);
                console.log("isVertical: " + this.collection.isVertical);
                if (this.collection.isVertical) {
                    tile.set('isVertical', true);
                }
                this.$el.append(tileView.render().el);

            }, this);
            return this;
        }
    })
}());
