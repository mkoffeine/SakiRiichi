(function () {
    window.TileJsonUtilities = function(){};

    TileJsonUtilities.prototype.convertJsonFromServerToJsonView = function (inJson) {
        var no = inJson.noOfGamer;
        /*--------No.2----------
        * -                    -
        * -No.3            No.1-
        * -                    -
        * --------No.0----------
        *
        * */
        var isVertical = no == 1 || no == 3;
        var outJson = {values:[], 'isVertical':isVertical};
        console.log("factory11111 " + inJson.toSource());
        for (var i = 0;i<inJson.values.length;i++) {
            var v = inJson.values[i];
            var name = v.n;
            var isChi = v.isChi;
            var angle;
            if (no == 0) {
                angle = (isChi?90:0);
                outJson.values[i] = {'name':name,'angle': angle};
            }
            else if (no ==1) {
                angle = (isChi?0:270);
                outJson.values[inJson.values.length - i - 1] = {'name':name,'angle': angle};

            }
            else if (no ==2) {
                angle = (isChi?270:180);
                outJson.values[inJson.values.length - i - 1] = {'name':name,'angle': angle};
            }
            else if (no ==3) {
                angle = (isChi?180:90);
                outJson.values[i] = {'name':name,'angle': angle};
            }
        }
        console.log("factory222 " + outJson.toSource());
        return outJson;
    };

    TileJsonUtilities.prototype.getTileViewCollectionFromJson = function(inJson) {
        var json = t.convertJsonFromServerToJsonView(inJson);
        var arr = [];
        for (var i = 0; i < json.values.length; i++) {
            var elem = json.values[i];
            arr[i] = new App.models.Tile({name: elem.name, angle: elem.angle});
        }
        var tileCol = new App.collections.Tiles(arr);
        tileCol.isVertical = json.isVertical;
        return new App.views.TilesView({collection: tileCol});
    }

}());