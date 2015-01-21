jQuery(document).ready(function () {
    startDrawAll();
});

function startDrawAll() {
    var tileJsonUtilities = new TileJsonUtilities();
    var inJson = {
        noOfGamer: 0,
        isPlayer: true,
        values: [
            {
                arr: [{n: '1c'}, {n: 'tile'}, {n: '1c'},// {n: '5d'},
                    {n: '1b'}, {n: '1b'}, {n: '3b'}, {n: '3b'}, {n: '4b'}]
            },
            //{arr: [{n: 'tile'}, {n: 'tile'}, {n: 'tile'}, {n: 'tile'}, {n: 'tile'}, {n: 'tile'}]},
            {arr: [{n: '5b', isChi: true}, {n: '6d'}, {n: '7b'}]},
            //{arr: [{n: '5c'}, {n: '5c', isChi: true, isRed: true}, {n: '5c', isChi: true}]},
            {arr: [{n: '8b'}, {n: '8b', isChi: true}, {n: '8b'}]}]
    };

    var discardJson3 = {
        noOfGamer: 3,
        isPlayer: false,
        values: [
            {arr: [{n: '9d'}, {n: '1c'}, {n: '1c'}, {n: '5d'}, {n: '1b'}, {n: '1b'}]},
            {arr: [{n: 'tile'}, {n: '1c'}, {n: '1c'}, {n: '5d'}, {n: '1b'}, {n: '1b'}]},
            {arr: [{n: 'tile'}, {n: '1c'}, {n: '1c'}, {n: '5d'}, {n: '1b'}, {n: '1b'}]},
            {arr: [{n: '8b'}, {n: '8b', isChi: true}, {n: '8b'}, {n: '3c'}, {n: '4b'}]}]
    };

    var discardJson1 = {
        noOfGamer: 1,
        isPlayer: false,
        values: [
            {arr: [{n: '9d'}, {n: '3c'}, {n: '4c'}, {n: '5d'}, {n: '6c'}, {n: '1b'}]},
            {arr: [{n: 'tile'}, {n: '1c'}, {n: '2c'}, {n: '5d'}, {n: '1b'}, {n: '1b'}]},
            {arr: [{n: 'tile'}, {n: '1c'}, {n: '1c'}, {n: '5d'}, {n: '1b'}, {n: '1b'}]},
            {arr: [{n: '8b'}, {n: '8b', isChi: true}, {n: '8b'}, {n: '3c'}, {n: '3b'}]}]
    };
    var discardJson02 = {
        noOfGamer: 0,
        isPlayer: false,
        values: [
            {
                arr: [{n: '8d'}, {n: '1c'}, {n: '1c'}, {
                    n: '5d',
                    isChi: true
                }, {n: '1b'}, {n: '1b'}, {n: '1b'}, {n: '1b'}]
            },
            {arr: [{n: 'tile'}, {n: '1c'}, {n: '1c'}, {n: '5d'}, {n: '1b'}, {n: '1b'}, {n: '1b'}, {n: '1b'}]},
            {arr: [{n: 'tile'}, {n: '1c'}, {n: '1c'}, {n: '5d'}, {n: '1b'}, {n: '1b'}, {n: '1b'}, {n: '1b'}]}]
    };

    var body = $('body');
    $("#divMainPlayer").append(tileJsonUtilities.getTileViewCollectionFromJson(inJson).el);
    //body.append(tileJsonUtilities.getTileViewCollectionFromJson(inJson).el);
    inJson.noOfGamer = 2;
    $("#divTopPlayer").append(tileJsonUtilities.getTileViewCollectionFromJson(inJson).el);
    //body.append("<br>");
    inJson.noOfGamer = 3;
    $("#divLeftPlayer").append(tileJsonUtilities.getTileViewCollectionFromJson(inJson).el);
    inJson.noOfGamer = 1;
    $("#divRightPlayer").append(tileJsonUtilities.getTileViewCollectionFromJson(inJson).el);

    discardJson02.noOfGamer = 2;
    $("#topDiscard").append(tileJsonUtilities.getTileViewCollectionFromJson(discardJson02).el);
    discardJson02.noOfGamer = 0;
    $("#bottomDiscard").append(tileJsonUtilities.getTileViewCollectionFromJson(discardJson02).el);
    discardJson3.noOfGamer = 3;
    $("#leftDiscard").append(tileJsonUtilities.getTileViewCollectionFromJson(discardJson3).el);
    discardJson1.noOfGamer = 1;
    $("#rightDiscard").append(tileJsonUtilities.getTileViewCollectionFromJson(discardJson1).el);

}
;



