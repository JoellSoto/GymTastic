"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background: #2E332E;\n  padding: 14.5px 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  > section {\n    display: flex;\n    gap: 2rem;\n    &:last-child {\n      gap: 1rem;\n    }\n    > img {\n      width: 230px;\n      @media(max-width: 500px) {\n        width: 120px;\n      }\n    }\n    > nav {\n      display: flex;\n      gap: 1rem;\n      a {\n        font-size: 20px;\n        position: relative;\n        &:before {\n          content: '';\n          border-radius: 50px;\n          bottom: 0px;\n          position: absolute;\n          width: 0%;\n          height: 2px;\n          background: #3CA63A;\n          transition: .3s;\n        }\n        &:hover {\n          &:before {\n            width: 100%;\n          }\n        }\n      }\n    }\n    .mobile {\n      display: none;\n    }\n    @media(max-width: 900px) {\n      .mobile {\n        display: initial;\n      }\n      > nav {\n        display: none;\n      }\n    }\n  }\n  @media(max-width: 700px) {\n    padding: 14.5px 16px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].header(_templateObject());

exports.Container = Container;