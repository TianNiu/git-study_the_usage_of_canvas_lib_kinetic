/* script here*/
var _FACE = {};
var sw = 578;
var sh = 400;
var stage = new Kinetic.Stage({
    container: 'soo',
    width: 578,
    height: 400
});
var layer = new Kinetic.Layer({
    y: -30
});
/**
 * return eye default data
 * @param  {[type]} obj [description]
 * @return {[type]}     数据字面量
 */
_FACE.eye = function(obj) {
    var _default = {
        points: [0, 200, 100, 200],
        //tension: 0.5,
        closed: false,
        stroke: 'black',
        strokeWidth: 10
    };
    //console.log($.extend({}, _default, obj));
    return $.extend({}, _default, obj);
};
/**
 * return eyeball default data
 * @param  {[type]} obj [description]
 * @return {[type]}     数据字面量
 */
_FACE.eyeball = function(obj) {
    var _default = {
        radius: 10,
        fill: 'black'
    };
    //console.log($.extend({}, _default, obj));
    return $.extend({}, _default, obj);
};

/* */
var left_eye = new Kinetic.Line(_FACE.eye({
    x: 100,
    y: 100
}));

// create circle
var left_eyeball = new Kinetic.Circle(_FACE.eyeball({
    x: 170,
    y: 315,
}));
layer.add(left_eye)
    .add(left_eyeball);

stage.add(layer);
