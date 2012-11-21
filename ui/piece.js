var goatcode = goatcode || {};
goatcode.chess = goatcode.chess || {};
goatcode.chess.UI = goatcode.chess.UI || {};

goatcode.chess.UI.Piece = function (piece) {
  this.svg = goatcode.chess.UI.PIECE_SVG[piece]();
  // All of the SVG pieces are 45x45 units.  Scale down to 1x1.
  this.scale_ = 0.022222222;
  this.x_ = 0;
  this.y_ = 0;
  this.updateTransform_();
};

goatcode.chess.UI.Piece.prototype.updateTransform_ = function () {
  this.svg.setAttribute('transform', 'translate(' + this.x_ + ',' + this.y_ + ') scale(' + this.scale_ + ')');
};

goatcode.chess.UI.Piece.prototype.x = function (newX) {
  if (typeof newX !== 'undefined') {
    this.x_ = newX;
    this.updateTransform_();
  }

  return this.x_;
};

goatcode.chess.UI.Piece.prototype.y = function (newY) {
  if (typeof newY !== 'undefined') {
    this.y_ = newY;
    this.updateTransform_();
  }

  return this.y_;
};