/**
 * Created by Michael on 09.01.2015.
 */
QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});
QUnit.test("contain correct data", function(assert) {
    var t = new TileJsonUtilities();
    var inJson = {
        noOfGamer: 0,
        values: [
            {arr: [{n: '5b', isChi: true}, {n: '6d'}, {n: '7b'}]}
            ]};
    var outJson = t.convertJsonFromServerToJsonView(inJson);
    assert.ok(outJson.isVertical == false, "passed");
    assert.ok(outJson.values[0].arr.length == 3, "passed");
    assert.ok(outJson.values[0].arr[0].name == "5b", "passed");
    assert.ok(outJson.values[0].arr[0].angle == 90, "passed");
    assert.ok(outJson.values[0].arr[1].name == "6d", "passed");
    assert.ok(outJson.values[0].arr[1].angle == 0, "passed");

});