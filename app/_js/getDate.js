'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetDate = function () {
	function GetDate(year, month) {
		_classCallCheck(this, GetDate);

		var _ref = [].concat(Array.prototype.slice.call(arguments));

		this.year = _ref[0];
		this.month = _ref[1];
	}

	_createClass(GetDate, [{
		key: 'getYear',
		value: function getYear() {
			return this.year % 400 == 0 || this.year % 4 == 0 && this.year % 100 != 0;
		}
	}, {
		key: 'getMonth',
		value: function getMonth() {
			var _this = this;

			if (this.month == 2) {
				this.getYear() ? this.day = 29 : this.day = 28;
			} else {
				[1, 3, 5, 7, 8, 10, 12].some(function (index) {
					return index == _this.month;
				}) ? this.day = 31 : this.day = 30;
			}
		}
	}, {
		key: 'getDay',
		value: function getDay() {
			var year = this.year;
			var month = this.month;

			var day = this.day;
			this.day = {};
			for (var i = 1; i <= day; i++) {
				var d = new Date(year + ',' + month + ',' + i);
				this.day[i] = d.getDay();
			}
		}
	}, {
		key: 'showDate',
		value: function showDate() {
			this.getYear();
			this.getMonth();
			this.getDay();
			return this;
		}
	}]);

	return GetDate;
}();

var GetCalendar = function (_GetDate) {
	_inherits(GetCalendar, _GetDate);

	function GetCalendar(year, month) {
		_classCallCheck(this, GetCalendar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(GetCalendar).call(this, year, month));
	}

	return GetCalendar;
}(GetDate);

exports.default = GetCalendar;