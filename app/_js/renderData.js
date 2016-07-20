'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderData = function () {
    function RenderData(data, element) {
        _classCallCheck(this, RenderData);

        var _ref = [].concat(Array.prototype.slice.call(arguments));

        this.data = _ref[0];
        this.element = _ref[1];
    }

    _createClass(RenderData, [{
        key: 'renderSelect',
        value: function renderSelect() {
            var ele = this.element.append('<div class="select-date">');
            var year = $('<select class="select-year">');
            var month = $('<select class="select-month">');
            var d = new Date();
            var y = d.getFullYear();
            var m = d.getMonth() + 1;

            $('.select-date').append(year).append('<span>年</span>');
            $('.select-date').append(month).append('<span>月</span>');

            for (var i = 1990; i <= 2020; i++) {
                if (i == y) {
                    year.append('<option value=' + i + ' selected=\'selected\'>' + i + '</option>');
                } else {
                    year.append('<option>' + i + '</option>');
                }
            }

            for (var _i = 1; _i <= 12; _i++) {
                if (_i == m) {
                    month.append('<option value=' + _i + ' selected=\'selected\'>' + _i + '</option>');
                } else {
                    month.append('<option>' + _i + '</option>');
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var data = this.data;
            var ele = this.element;

            var index = 1;
            $('.calendar-tab') ? $('.calendar-tab').remove() : '';
            var table = $('<table class="calendar-tab">').append('<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></table>');
            ele.append(table);
            var day = new Date();
            var y = day.getFullYear();
            var m = day.getMonth() + 1;
            var d = day.getDate();

            for (var i = 0; i < 6; i++) {
                var tr = $('<tr>');
                table.append(tr);
                for (var j = 0; j < 7; j++) {
                    var td = $('.select-year').val() == y && $('.select-month').val() == m && index == d ? $('<td class=\'today\'>') : $('<td>');
                    tr.append(td);
                    if (data.day[index] == j) {
                        td.text(index);
                        index++;
                    } else {
                        td.text(' ');
                    }
                }
            }
        }
    }]);

    return RenderData;
}();

var RenderCalendar = function (_RenderData) {
    _inherits(RenderCalendar, _RenderData);

    function RenderCalendar(data, element) {
        _classCallCheck(this, RenderCalendar);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderCalendar).call(this, data, element));
    }

    return RenderCalendar;
}(RenderData);

exports.default = RenderCalendar;