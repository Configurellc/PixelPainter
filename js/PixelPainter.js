var paletteArray = ["red","orange","yellow","green","blue","indigo","violet","grey","black","white"];

var painter = (function Painter(){
  console.log('sanity check - mother fucker');

var setColor = "";


var paletteArray = ["red","orange","yellow","green","blue","indigo","violet","grey","black"];

var grid = document.createElement("table");
    grid.className = "grid";
    pixelPainter.appendChild(grid);
    grid.style.backgroundColor = null;

var paletteTable = document.createElement("table");
    paletteTable.className = "pixel";
    grid.appendChild(paletteTable);

var canvas = document.createElement("div");
    canvas.className = "canvas";
    grid.appendChild(canvas);

function createPalette(){
  for (var i = 0; i < paletteArray.length; i++) {
    var row = document.createElement('div');
    row.id = "color" + [i];
    row.style.width = 20;
    row.style.height = 20;
    row.style.backgroundColor = paletteArray[i];
    row.addEventListener("click", function(){
    setColor = this.style.backgroundColor;
    });
    paletteTable.appendChild(row);
  }
}

createPalette();


   function createGrid(rows,columns){

    for (var i = 0; i < 20; i++) {
      var gridRow = document.createElement("tr");
      gridRow.id = "grid-Row";
      canvas.appendChild(gridRow);

       for (var j = 0; j < 20; j++) {
          var cells = document.createElement("td");
          cells.className = 'cells-class';
          gridRow.appendChild(cells);
          cells.style.backgroundColor = "blue";
          cells.className = "pixels";
          cells.style.width = 20;
          cells.style.height = 20;
          cells.addEventListener("click", function(){
              this.style.backgroundColor = setColor;
              console.log(setColor);
          });

          }
        }
    }

  createGrid();

return{
  createGrid: createGrid,
  createPalette: createPalette
};


})();
