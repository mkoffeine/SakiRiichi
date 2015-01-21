(function () {
    window.TileJsonUtilities = function () {
    };
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
        var outJson = {values: [], 'isVertical': isVertical, isPlayer: inJson.isPlayer};
        var i;
        for (i = 0; i < inJson.values.length; i++) {
            outJson.values[i] = [];
            outJson.values[i].arr = [];
        }
        for (i = 0; i < inJson.values.length; i++) {
            var valueIn = inJson.values[i];
            var iWhenIsReversed = ((no == 0 || no == 3) /*reverse*/ ? i : inJson.values.length - i - 1);
            var arrOut = outJson.values[iWhenIsReversed].arr = [];
            for (var j = 0; j < valueIn.arr.length; j++) {
                var v = valueIn.arr[j];
                var name = v.n;
                var isChi = v.isChi;
                var angle;
                if (no == 0) {
                    angle = (isChi ? 90 : 0);
                    arrOut[j] = {'name': name, 'angle': angle};
                }
                else if (no == 1) {
                    angle = (isChi ? 0 : 270);
                    arrOut[valueIn.arr.length - j - 1] = {'name': name, 'angle': angle};
                }
                else if (no == 2) {
                    angle = (isChi ? 270 : 180);
                    arrOut[valueIn.arr.length - j - 1] = {'name': name, 'angle': angle};
                }
                else if (no == 3) {
                    angle = (isChi ? 180 : 90);
                    arrOut[j] = {'name': name, 'angle': angle};
                }
            }
        }
        return outJson;
    };

    TileJsonUtilities.prototype.getTileViewCollectionFromJson = function (inJson) {
        var json = new TileJsonUtilities().convertJsonFromServerToJsonView(inJson);
        var tileArray = [];
        for (var i = 0; i < json.values.length; i++) {
            var arr = json.values[i].arr;
            tileArray[i] = [];
            for (var j = 0; j < arr.length; j++) {
                tileArray[i][j] = new App.models.Tile(
                    {
                        name: arr[j].name,
                        angle: arr[j].angle,
                        isPlayer: json.isPlayer,
                        isMainPlayer: inJson.noOfGamer == 0 && json.isPlayer
                    });
            }
        }
        //swap array for 1, 3 number of player
        if (json.isVertical) {
            for (var i = 0; i < tileArray.length / 2; i++) {
                var swap = tileArray[i];
                tileArray[i] = tileArray[tileArray.length - i - 1];
                tileArray[tileArray.length - i - 1] = swap;
            }
        }

        window.tile = tileArray[0][0];
        var tileGroup = new App.models.TilesGroup({tilesGroup: tileArray, isPlayer: json.isPlayer});
        tileGroup.set("isVertical", json.isVertical);
        return new App.views.TilesGroupView({model: tileGroup});
    }
}());