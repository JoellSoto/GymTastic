"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Agenda;

var _Carousel = _interopRequireDefault(require("react-bootstrap/Carousel"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Agenda() {
  var dias = [];
  (0, _react.useEffect)(function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(axios.get('http://gestao-aluguer.herokuapp.com/viaturas/').then(function (res) {
              return console.log(res);
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }, []);
}