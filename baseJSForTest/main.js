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

        var t = new App.models.Tile({name: "3d", angle: 0});
        main.t = t;
        var t1 = new App.models.Tile({name: "7b", angle: 270});
        var t2 = new App.models.Tile({name: "2b", angle: 180});
        var t3 = new App.models.Tile({name: "1b", angle: 90});
        var t4 = new App.models.Tile({name: "5b", angle: 90});
        var ts = new App.collections.Tiles([t, t1, t2, t3, t4]);
        ts.isVertical = true;
        var tsView = new App.views.TilesView({collection: ts});
        $('body').append(tsView.el);
    }
);



