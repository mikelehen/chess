var goatcode = goatcode || {};
goatcode.chess = goatcode.chess || {};
goatcode.chess.UI = goatcode.chess.UI || {};

goatcode.chess.UI.Board = function (boardRef) {
  var svg = goatcode.chess.UI.svg;

  this.svg = svg('g', null, [
    svg('rect', { fill: '#33F', x: 0, y: 0, width: 8, height: 8 }),
    svg('path', { fill: '#FFF', d: 'M0,0H8v1H0zm0,2H8v1H0zm0,2H8v1H0zm0,2H8v1H0zM1,0V8h1V0zm2,0V8h1V0zm2,0V8h1V0zm2,0V8h1V0z' })
  ]);

  this.loadPieces();

  var self = this;
  boardRef.on('value', function(snap) { self.onBoardChange(snap); })
};

goatcode.chess.UI.Board.prototype.onBoardChange = function(snapshot) {

};

goatcode.chess.UI.Board.prototype.drawBoard = function() {

};

goatcode.chess.UI.Board.prototype.loadPieces = function () {
  var piece_order = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
  for (var i = 0; i < 8; i++) {
    var piece = new goatcode.chess.UI.Piece('dark_' + piece_order[i]);
    piece.y(0);
    piece.x(i);
    this.svg.appendChild(piece.svg);

    piece = new goatcode.chess.UI.Piece('dark_pawn');
    piece.y(1);
    piece.x(i);
    this.svg.appendChild(piece.svg);

    piece = new goatcode.chess.UI.Piece('light_pawn');
    piece.y(6);
    piece.x(i);
    this.svg.appendChild(piece.svg);

    piece = new goatcode.chess.UI.Piece('light_' + piece_order[i]);
    piece.y(7);
    piece.x(i);
    this.svg.appendChild(piece.svg);
  }
};