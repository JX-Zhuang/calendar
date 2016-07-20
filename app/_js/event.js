'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var changeEvent = function () {
	function changeEvent(ele, data, render) {
		_classCallCheck(this, changeEvent);

		var _ref = [].concat(Array.prototype.slice.call(arguments));

		this.ele = _ref[0];
		this.data = _ref[1];
		this.render = _ref[2];
	}

	_createClass(changeEvent, [{
		key: 'change',
		value: function change() {
			var me = this;
			this.ele.on('change', function () {
				var _ref2 = [$('.select-year').val(), $('.select-month').val()];
				me.data.year = _ref2[0];
				me.data.month = _ref2[1];

				me.render();
			});
		}
	}]);

	return changeEvent;
}();

var changeCalendar = function (_changeEvent) {
	_inherits(changeCalendar, _changeEvent);

	function changeCalendar(ele, data, render) {
		_classCallCheck(this, changeCalendar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(changeCalendar).call(this, ele, data, render));
	}

	return changeCalendar;
}(changeEvent);

exports.default = changeCalendar;