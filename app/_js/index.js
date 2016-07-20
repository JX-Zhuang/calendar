'use strict';

var _getDate = require('./getDate.js');

var _getDate2 = _interopRequireDefault(_getDate);

var _renderData = require('./renderData.js');

var _renderData2 = _interopRequireDefault(_renderData);

var _event = require('./event.js');

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var d = new Date();
var y = d.getFullYear();
var m = d.getMonth() + 1;

var calendar = new _getDate2.default(y, m);
var data = calendar.showDate();
var ele = $('.calendar');
var render = new _renderData2.default(data, ele);
render.renderSelect();
render.render();

var monthEvent = new _event2.default($('.select-month'), calendar, function () {
  render.data = calendar.showDate();render.render();
});
monthEvent.change();

var yearEvent = new _event2.default($('.select-year'), calendar, function () {
  render.data = calendar.showDate();render.render();
});
yearEvent.change();