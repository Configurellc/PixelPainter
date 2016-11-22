var painter = (function Painter(){
console.log('sanity check - mother fucker');

// function document.createElement(name){
//   return document.document.createElementement(name);
// }

function colorPicker(){

      var setColor = this.style.backgroundColor;
    }

// var swatchTable = document.createElement('div');
// swatchTable.className = "swatch";
// pixelPainter.appendChild(swatchTable);

// var grid = document.createElement('div');
// grid.className = "grid";
// pixelPainter.appendChild(grid);

var paletteArray = ["red","orange","yellow","green","blue","indigo","violet","grey","black","white"];



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

    var grid = document.createElement("table");
    grid.className = "grid";
    pixelPainter.appendChild(grid);
    grid.style.backgroundColor = null;


    for (var i = 0; i < rows; i++) {
      var tr = grid.appendChild(document.createElement("tr"));
      tr.innerHTML = "yep";
        for (var j = 0; j < columns; j++) {
          var cells = tr.appendChild(document.createElement("td"));
          cells.style.backgroundColor = "blue";
          cells.className = "pixels";
          cells.innerHTML= "yep";
          cells.addEventListener("click", function(){
              this.style.backgroundColor = setColor;
          });

          }
        }
    }

function createPalette(){
  for (var i = 0; i < paletteArray.length; i++) {
    var paletteChoices = pixelPainter.appendChild(document.createElement("table"));
    paletteChoices.className = "palette";
    paletteChoices.style.backgroundColor = paletteArray[i];
    paletteChoices.addEventListener("click", colorPicker());
  }
}
    
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
  colorPicker: colorPicker,
  createGrid: createGrid,
  createPalette: createPalette
};
      
    
})();
