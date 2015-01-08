jQuery(document).ready(function () {

        var tileJsonUtilities = new TileJsonUtilities();
        var inJson = {
            noOfGamer: 0,
            values: [
                {arr: [{n: 'tile'}, {n: '1c'}, {n: '1c'}, {n: '5d'},
                    {n: '1b'}, {n: '1b'}, {n: '3b'}, {n: '3b'}, {n: '3b'}, {n: '4b'}]},
                //{arr: [{n: 'tile'}, {n: 'tile'}, {n: 'tile'}, {n: 'tile'}, {n: 'tile'}, {n: 'tile'}]},
                {arr: [{n: '5b', isChi: true}, {n: '6d'}, {n: '7b'}]},
                {arr: [{n: '5c'}, {n: '5c', isChi: true, isRed: true}, {n: '5c', isChi: true}]},
                {arr: [{n: '8b'}, {n: '8b', isChi: true}, {n: '8b'}]}]
        };

        var body = $('body');
        body.append(tileJsonUtilities.getTileViewCollectionFromJson(inJson).el);
        inJson.noOfGamer = 2;
        body.append(tileJsonUtilities.getTileViewCollectionFromJson(inJson).el);
        body.append("<br>");
        inJson.noOfGamer = 3;
        body.append(tileJsonUtilities.getTileViewCollectionFromJson(inJson).el);
        inJson.noOfGamer = 1;
        body.append(tileJsonUtilities.getTileViewCollectionFromJson(inJson).el);
    }
);



