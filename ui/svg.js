var goatcode = goatcode || {};
goatcode.chess = goatcode.chess || {};
goatcode.chess.UI = goatcode.chess.UI || {};

goatcode.chess.UI.SVG_NS = "http://www.w3.org/2000/svg";

goatcode.chess.UI.svg = function (elementType, attributes, children) {
  var element = document.createElementNS(goatcode.chess.UI.SVG_NS, elementType);

  if (attributes) {
    for (var att in attributes) {
      element.setAttribute(att, attributes[att]);
    }
  }

  if (children) {
    for (var i = 0; i < children.length; i++) {
      element.appendChild(children[i]);
    }
  }

  return element;
};