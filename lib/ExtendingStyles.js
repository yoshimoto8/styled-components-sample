"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExtendingStyles = function (_Component) {
  _inherits(ExtendingStyles, _Component);

  function ExtendingStyles() {
    _classCallCheck(this, ExtendingStyles);

    return _possibleConstructorReturn(this, (ExtendingStyles.__proto__ || Object.getPrototypeOf(ExtendingStyles)).apply(this, arguments));
  }

  _createClass(ExtendingStyles, [{
    key: "render",
    value: function render() {
      var Input = _styledComponents2.default.input.withConfig({
        displayName: "ExtendingStyles__Input",
        componentId: "zv2i93-0"
      })(["padding:0.5em;margin:0.5em;color:", ";background:papayawhip;border:none;border-radius:3px;"], function (props) {
        return props.inputColor || "palevioletred";
      });

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(Input, { placeholder: "@mxstbr", value: "@probablyup", type: "text" }),
        _react2.default.createElement(Input, { value: "@geelen", type: "text", inputColor: "rebeccapurple" })
      );
    }
  }]);

  return ExtendingStyles;
}(_react.Component);

exports.default = ExtendingStyles;