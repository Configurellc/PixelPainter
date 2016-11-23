var paletteArray = ["red","orange","yellow","green","blue","indigo","violet","grey","black","white"];

var painter = (function Painter(){
console.log('sanity check - mother fucker');

var setColor = "";
// function document.createElement(name){
//   return document.document.createElementement(name);
// }



// var swatchTable = document.createElement('div');
// swatchTable.className = "swatch";
// pixelPainter.appendChild(swatchTable);

// var grid = document.createElement('div');
// grid.className = "grid";
// pixelPainter.appendChild(grid);

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
    row.id = i;
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

    //   for (var i = 1; i < 20; i++) {
    //     var pixelTR = document.document.createElementement('tr');
    //     pixelTR.className = "Rows";
    //     pixelTR. = "";
    //     grid.appendChild(pixelTR);

    //     pixelTR.addEventListener('click', function(){
    //      alert('done');
    //     });

    //      for (var j = 1; j < 20; j++){
    //       var pixelTD = document.document.createElementement('td');
    //       pixelTD.className = "Columns";
    //       pixelTD.innerHTML = "#";
    //       pixelTR.appendChild(pixelTD);
    //       }
    //   }
    // }

    

    for (var i = 0; i < rows; i++) {
      var tr = canvas.appendChild(document.createElement("tr"));
       for (var j = 0; j < columns; j++) {
          var cells = tr.appendChild(document.createElement("td"));
          cells.style.backgroundColor = "blue";
          cells.className = "pixels";
          cells.innerHTML= "yep";
          cells.addEventListener("click", function(){
              this.style.backgroundColor = setColor;
              console.log(setColor);
          });

          }
        }
    }



// function colorPicker(){

//       var setColor = this.style.backgroundColor;
//     }
    
// //for row
  // for (var i = 0; i < 15; i++) {
  //   var palletteTR = document.createElement('tr');
  //   palletteTR.className = "palletteRows";
  //   palletteTR.innerHTML = "#";
  //   swatchTable.appendChild(palletteTR);

  //    palletteTR.addEventListener('click', function () {
  //      alert('done');
  //    });
  //   }

  //   for (var j = 0; j < 5; j++){
  //     var palletteTD = document.createElement('td');
  //     palletteTD.className = "palletteColumns";
  //     palletteTD.innerHTML = "#";
  //    palletteTR.appendChild(palletteTD);
  //  }
return{
  // colorPicker: colorPicker,
  createGrid: createGrid,
  createPalette: createPalette
};
      
    
})();
