var painter = (function Painter(){
  console.log('sanity check - mother fucker');

var setColor = "";

var paletteArray = ["red","orange","yellow","green","blue","indigo","violet","grey","black"];

var titleArray = ["P","I","X","E","L", "Painter"];

//Adding Title & Spans to HTML
function createTitle(){

var header = document.querySelector("h1");
  header.id = "title";
  header.innerHTML = "";

for(var z = 0; z<titleArray.length; z++){
  var spanElement = "span" + titleArray[z];
  spanElement = document.createElement("span");
    spanElement.id = titleArray[z].toString();
    spanElement.innerHTML = titleArray[z].toString();
    header.appendChild(spanElement);
}
}createTitle();


var grid = document.createElement("div");
    grid.className = "grid";
    pixelPainter.appendChild(grid);
    grid.style.backgroundColor = null;

var paletteTable = document.createElement("table");
    paletteTable.className = "pixel";
    grid.appendChild(paletteTable);

var canvas = document.createElement("div");
    canvas.className = "canvas";
    grid.appendChild(canvas);

var clearButton = document.createElement("button");
    clearButton.id = "clrBtn";
    clearButton.innerHTML = "Flush Em Fuckers";
    pixelPainter.appendChild(clearButton);
    clearButton.addEventListener("click", function(){
      clearCanvas();
    });
var titleFont = document.createElement("link");

    function createPalette(){
      for (var i = 0; i < paletteArray.length; i++) {
        var row = document.createElement('div');
        row.id = "color" + [i];
        // row.style.width = 20;
        // row.style.height = 20;
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
          // cells.className = 'cells-class';
          gridRow.appendChild(cells);
          cells.style.backgroundColor = "white";
          cells.className = "pixels";
          cells.style.width = 20;
          cells.style.height = 20;
          cells.addEventListener("click", function(){
              this.style.backgroundColor = setColor;
              console.log(setColor);
          });
          cells.addEventListener("mouseover", function(){
             if(event.buttons === 1){
              this.style.backgroundColor = setColor;
            }
            });



          }
        }
    }

  createGrid();

  function clearCanvas(){
    for (var i = 0; i < document.querySelectorAll(".pixels").length; i++) {
        document.querySelectorAll(".pixels")[i].style.backgroundColor = "white";
    }
  }

  function erase() {
    var remove = document.createElement('button');
      remove.id = 'erase-pixels';
      remove.innerHTML = "button";
      pixelPainter.appendChild(remove);

    remove.addEventListener('click', function() {
      setColor = this.style.backgroundColor = 'white';
    });

    remove.addEventListener('mouseover', function() {
      if(event.buttons ===1) {
        this.style.backgroundColor = 'white';
      }
    });

  }
    erase();

return{
  createTitle: createTitle,
  createGrid: createGrid,
  createPalette: createPalette,
  clearCanvas: clearCanvas,
  erase: erase
};


})();
