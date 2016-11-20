window.onload = function(){
console.log('sanity check - mother fucker');


var swatchTable = document.createElement('div');
swatchTable.className = "swatch";
pixelPainter.appendChild(swatchTable);

var grid = document.createElement('div');
grid.className = "grid";
pixelPainter.appendChild(grid);


   function createPallette(){

      for (var i = 1; i < 20; i++) {
        var pixelTR = document.createElement('tr');
        pixelTR.className = "Rows";
        pixelTR.innerHTML = "";
        grid.appendChild(pixelTR);

         pixelTR.addEventListener('click', function () {
           alert('done');
          });

         for (var j = 1; j < 20; j++){
          var pixelTD = document.createElement('td');
          pixelTD.className = "Columns";
          pixelTD.innerHTML = "#";
          pixelTR.appendChild(pixelTD);
          }
      }
    }
    createPallette();
// //for row
  for (var i = 0; i < 15; i++) {
    var palletteTR = document.createElement('tr');
    palletteTR.className = "palletteRows";
    palletteTR.innerHTML = "#";
    swatchTable.appendChild(palletteTR);

     palletteTR.addEventListener('click', function () {
       alert('done');
     });

    for (var j = 0; j < 5; j++){
      var palletteTD = document.createElement('td');
      palletteTD.className = "palletteColumns";
      palletteTD.innerHTML = "#";
     palletteTR.appendChild(palletteTD);

      // palletteTD.addEventListener('click', function () {
     //   alert('SHIT!!!!');
     // });


    }
  }



};
