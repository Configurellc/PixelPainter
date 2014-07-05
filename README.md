PixelPainter
============

Coloring pixels in a grid


Create a function called PixelPainter  
that will accept 2 arguments, **width** and **height**

The PixelPainter function binds 'artboard' and 'controls' as it's properties.  
The grid will be *width* cells wide, and *height* cells tall.  
Each cell can be any width or height you choose, it should be a square. 
The PixelPainter function will return itself.  

The *controls* will be 

  - a swatch of colors (any amount of colors you choose is fine)
  - an *erase* button, to turn on erase mode
  - a *clear* button, to reset the grid


This is a sketch of how the PixelPainter should look.
![sketch](http://i.imgur.com/yuku6aj.png)
\**this is just a sample! bonus cookies for being creative!

At the end of your script in PixelPainter, invoke the function similar to this:

    var pixelPainter = PixelPainter(20,20);
    $("#controls").append(pixelPainter.controls);
    $("#artboard").append(pixelPainter.artboard);

\**Bonus: write the function to allow user configurable options such as _pixelSize_.*

###Files
  - index.html
  - js/PixelPainter.js - define the function here
  - css/PixelPainter.css - PixelPainter specific css here