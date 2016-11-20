window.onload = function(){
console.log('sanity check - mother fucker');


var swatchTable = document.createElement('div');
swatchTable.className = "swatch";
pixelPainter.appendChild(swatchTable);

//   function createPallette(){

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


    };
  }



};
