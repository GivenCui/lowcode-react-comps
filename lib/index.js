"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.bizCssPrefix = exports.MyRenderSchema = exports.ColorfulInput = exports.ColorfulButton = void 0;

var _colorfulButton = _interopRequireDefault(require("./components/colorful-button"));

exports.ColorfulButton = _colorfulButton["default"];

var _colorfulInput = _interopRequireDefault(require("./components/colorful-input"));

exports.ColorfulInput = _colorfulInput["default"];

var _myRenderSchema = _interopRequireDefault(require("./components/my-render-schema"));

exports.MyRenderSchema = _myRenderSchema["default"];
var bizCssPrefix = 'bizpack';
exports.bizCssPrefix = bizCssPrefix;