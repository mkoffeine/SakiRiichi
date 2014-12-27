jQuery(document).ready(function () {

        window.main = {};
        var tile = new App.models.Tile({name: "tile", angle: 90});
        var tile1 = new App.models.Tile({name: "1d", angle: 270});
        var tile2 = new App.models.Tile({name: "2c", angle: 180});
        var tile3 = new App.models.Tile({name: "3b", angle: 90});
        var tile4 = new App.models.Tile({name: "5d", angle: 270});
        main.tile = tile;

        console.log(tile3);

        var tiles = new App.collections.Tiles([tile, tile1, tile2, tile3, tile4]);
        var tilesView = new App.views.TilesView({collection: tiles});
        $('body').append(tilesView.el);

            t = new TileJsonUtilities();
            //var inJson = {values:[{n:'i1'},{n:'o1'},{n:'i3'},{n:'i3'},{n:'i3'},{n:'i4'},{n:'i5', isChi: true}]};
            var inJson = {
                    noOfGamer:0,
                    values:
                        [{n:'1b'},{n:'1c'},{n:'1c'},{n:'5d'},
                               // {n:'1b'},{n:'1b'},{n:'3b'},{n:'3b'},{n:'3b'},{n:'4b'},{n:'5b', isChi: true},
                                {n:'5c'},{n:'5c', isChi: true, isRed: true},{n:'5c', isChi: true},{n:'5c'}]};

            $('body').append(t.getTileViewCollectionFromJson(inJson).el);
            inJson.noOfGamer = 2;
            $('body').append(t.getTileViewCollectionFromJson(inJson).el);
            inJson.noOfGamer = 1;
            $('body').append(t.getTileViewCollectionFromJson(inJson).el);
            inJson.noOfGamer = 3;
            $('body').append(t.getTileViewCollectionFromJson(inJson).el);
    }
);



