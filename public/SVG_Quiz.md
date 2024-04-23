# Q1 A

You need to draw onto an HTML 5 canvas element named 'theCanvas' by using Javascript.

What code should you use?

- A: 
`var context = document.getElementById("theCanvas").getContext("2d");`

- B:
`var canvas = document.createElement("canvas");`

- C: 
`var context = document.getElementById("theCanvas").getContext();`

- D:
`var canvas = document.getElementById("theCanvas");`

## Q1 A Explanation

You should use 
`var context = document.getElementById("theCanvas").getContext("2d");`

The HTML Canvas element solely focuses on height and width. You get the two dimensional context of the canvas to have a flat surface to animate on using `getContext("2d")`

If you try to use `getContext()` without passing an argument the method will return `null` which can cause errors in your program.

You wouldn't use `var canvas = document.createElement("canvas");` because the scenario assumes the canvas element already exists and has been given an id.

# Q2 B

You need to draw an image thumbnail into a canvas at one-eighth the original dimensions of 400px height by 600 px width.

What code should you use?

- A: 
`context.drawImage(imageElement, 0, 0, 75, 50)`

- B:
`context.drawImage(imageElement, 75, 50, 0, 0, 600, 400, 0, 0);`

- C:
`context.drawImage(imageElement, 0, 0, 75, 50, 0, 0, 600, 400);`

- D:
`context.drawImage(imageElement, 75, 50);`

## Q2 B Explanation

You should use `context.drawImage(imageElement, 0, 0, 75, 50);`

The drawImage method defines 9 arguments that can be arranged in three possible alternatives.

`drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)`

- image: references the element your using
- sx: the x-position offset of the source image starting point, 0 is left
- sy: the y-position offset of the source image starting point, 0 is top
- sw: the width in pixels of the source element to copy to the canvas
- sh: the height in pixels of the source element to copy to the canvas
- dx: the x-position offset of the destination canvas to begin the drawing
- dy: the y-position offset of the destination canvas to begin the drawing
- dw: the width (in pixels) of the destination canvas where you will draw the source
- dh: the height (in pixels) of the destination canvas where you will draw the source

If your intention is just to draw the image at 1/8th the size and you aren't concerned about placing the image at some position around a larger defined canvas area then you only need the source image, the starting x and y of the image and the width and height of the intended drawn image. The canvas will then be drawn to shrink fit around the image.
- Important Note: x always comes before y, and w always comes before h

# Q3 C

You need to draw a solid blue rectangle onto a canvas. What code should you use?

- A:
`context.fillStyle = "blue"; context.fillRect(0, 0, 50, 50);`

- B: 
`context.strokeStyle = "blue"; context.strokeRect(0, 0, 50, 50);`

- C:
`context.strokeStyle = "blue"; context.fillRect(0, 0, 50, 50);`

- D:
`context.fillStyle = "blue"; context.strokeRect(0, 0, 50, 50);`

## Q3 C Explanation

You should use 
`context.fillStyle = "blue"; context.fillRect(0, 0, 50, 50);`

The question asks for a `solid blue rectangle` That means the entire face of the rectangle would be blue with no other colors for stroke (border). The only things you need to worry about are the `fillStyle` and the `fillRect()` method.


# Q4 D

Review the code snippet below:

```html
<canvas id="mySampleCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
your browser does not support JS canvas
</canvas>
```
```js
   var c = document.getElementById("mySampleCanvas"); 
   var ctx = c.getContext("2d");
   ctx.beginPath();
   ctx.arc(70, 50, 15, 0, Math.PI, true);
   ctx.closePath();
   ctx.fill();
```

What is drawn by the code on lines 5 through 8 of the snippet?

- A: 
A filled semi-circle

- B: 
A filled segment of a circle less than half (semi-circle)

- C: 
A curved arc across the canvas

- D:
An unfilled circle

## Q4 D Explanation

The arc() method takes 6 possible arguments.

`arc(cx, cy, r, sAng, eAng, rotationBool)`

- cx: The x-position of the circle's center point
- cy: The y-position of the circle's center point
- r: The radius of the circle
- sAng: the Starting point of the circles starting outer point
- eAng: the amount of rotation or circumference covered by the arc drawing
- rotation bool: the default is false which makes the arc get drawn clockwise.

In the example the first two arguments are the starting x and y of the circle's center point. The next argument is the radius, then '0' indicates that the circle's arc will start on the right-most point. Then an arc af Math.PI indicates half of a circle. Because there is no rotation boolean declared we can assume it is false and the arc will be drawn clockwise so the shape should be a semi-circle similar to a smile. Because we call ctx.fill() at the end of the code the semi-circle will be filled in with a fill color of black by default.


# Q5 E

Review the code snippet below:

```js
function rotateRect() {
  var canvas = document.getElementById('MyCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // rotate 5 degrees
    draw();
  }
}
```
What is the correct code sample to include at line 6 to rotate the canvas by 5 degrees?

- A:
ctx.rotate(5 * Math.PI / 180);
- B: 
ctx.rotate(5 * Math.PI);
- C: 
ctx.rotate(360/5);
- D: 
ctx.rotate(5 * Math.PI / 360);


## Q5 E Explanation 

Rotations in the canvas must be passed in as RADIANS.
There are 2 * MATH.PI radians in a circle. 
- Therefore 2 * MATH.PI = 360 degrees, therefore 5 degrees is equal to either 5 * ((2 * MATH.PI) / 360) or 5 * (MATH.PI / 180).
- Rotating by 360/5 would rotate by 72 radians.
- Rotating by 5 * Math.PI would be 5 * 3.14 Radians ~ 15.5 RAD.

# Q6 F

You need to create a vector circle that has a yellow interior and a green border. Which code snippet should you use below:

- A: 
```js
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```
- B: 
```js
<svg width="100" height="100">
  <circle cx="50" cy="50" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```
- C: 
```css   
   div {
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background-color: yellow;
   border: 5px solid green;
   }
```
- D:
```js
var c = document.getElementById('MyCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke();
```

## Q6 F Explanation
You should use the following code:
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```
In this code a circle is created with a radius of 40. and CX & cy define the coordinates The stroke defines the border color, which is green, and stroke-width is set to 4, which defines the width of the border. The fill color is set to yellow, which completes the output as shown in the image.
You should not use the following code:
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```
This is incorrect because the radius parameter r is missing. The circle will not be displayed
You should not use the following code:
```css
div {
width: 200px;
height: 200px;
border-radius: 50%:
background-color:yellow;
border:5px solid green;
}
```
This is incorrect because the code attempts to create the circle using the div element instead of the SVG element SVGs perform better at rendering, while divs perform poorly when rendering graphics.
You should not use the following code:
```js
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
```
This is incorrect because you need to create a circle using the SVG element, not the Canvas element.
In the question the user is asked to create a vector circle and not a raster circle. SVG elements are vector-based elements, while Canvas elements are raster-based Canvas is pixel-based, while SVG is vector-based
Canvas has poor scalability, and SVG has great scalability because images are composed of shapes and vectors

# Q7 G

You are creating an HTML5 Web App and you want to apply a blur effect to the circle shown:
// image of circle
```html
<html>
  <body>
    <svg viewBox="0 0 875 3 337" version="1.1"     xmlns="http://www.w3.org/2000/svg" xmlns:link="http://www.w3.org/1999/xlink">
      <filter id="blurry">
        <feGaussianBlur stdDeviation="7 5" />
        <feDropShadow dx="0" dy="25" flood-color="var(--code)" flood-opacity="0.25" stdDeviation="5"/>
      </filter>
      <circle fill="var(--code)" cx="265" cy="169" r="88"></circle>
      <circle filter=" _________ "fill="var(--code)" cx="611" cy="169" r="88"></circle>
    </svg>
  </body>
</html>
```
Complete the code to make the circle blur.

- A:
url(#blurry)
- B:
url(blurry)
- C:
url(.blurry)
- D:
#blurry

## Q7 G Explanation
You should use url (#blurry) to apply the blur effect to the circle. This is because #blurry refers to the ID of the filter, and this is the correct way to reference that ID to use this filter.
The other options use invalid syntax and do not reference the filter ID correctly.

# Q8 H
You are asked to port an existing HTML5 web application from Canvas to SVG. For each of the following statements, select YES if true or NO if false.
```html
<div class="question">
   <p>SVG performs better when there are fewer objects on a larger surface compared to Canvas.</p>
   <input type="radio" id="question1-yes" name="question1" value="yes">
   <label for="question1-yes">Yes</label>
   <input type="radio" id="question1-no" name="question1" value="no">
   <label for="question1-no">No</label>
</div>
        
<div class="question">
   <p>Canvas defines graphics in XML and renders faster.</p>
   <input type="radio" id="question2-yes" name="question2" value="yes">
   <label for="question2-yes">Yes</label>
   <input type="radio" id="question2-no" name="question2" value="no">
   <label for="question2-no">No</label>
</div>

<div class="question">
   <p>SVG is vector-based and is composed of shapes, and Canvas is raster-based and is composed of pixels.</p>
   <input type="radio" id="question3-yes" name="question3" value="yes">
   <label for="question3-yes">Yes</label>
   <input type="radio" id="question3-no" name="question3" value="no">
   <label for="question3-no">No</label>
</div>

<div class="question">
   <p>Canvas images can be rendered in high resolutions on smaller screens.</p>
   <input type="radio" id="question4-yes" name="question4" value="yes">
   <label for="question4-yes">Yes</label>
   <input type="radio" id="question4-no" name="question4" value="no">
   <label for="question4-no">No</label>
</div>

<div class="question">
   <p>SVG can be modified via script and CSS, while Canvas can only be modified via script.</p>
   <input type="radio" id="question5-yes" name="question5" value="yes">
   <label for="question5-yes">Yes</label>
   <input type="radio" id="question5-no" name="question5" value="no">
   <label for="question5-no">No</label>
</div>

<div class="question">
   <p>SVG has better scalability and can be printed at high quality resolution, while Canvas has poor scalability and is not suitable for higher resolutions.</p>
   <input type="radio" id="question6-yes" name="question6" value="yes">
   <label for="question6-yes">Yes</label>
   <input type="radio" id="question6-no" name="question6" value="no">
   <label for="question6-no">No</label>
</div>
```

## Q8 H Explanation
- SVG performs better when there are fewer objects on a larger surface compared to Canvas. 
- SVG has better scalability and can be printed at a high-quality resolution, while Canvas has poor scalability and is not suitable for higher resolutions On smaller screens, SVG graphics render crisp, sharp, and readable.
- Canvas does not define the graphics in the XML format SVG renders graphics in XML-based markup language. SVG is an XML-based markup language for describing two-dimensional-based vector graphics.
- SVG is vector-based and is composed of shapes, and Canvas is raster-based and is composed of pixels.
- Vector graphics are rendered by a mathematical formula, and raster images are made of tiny pixels. Vector graphics scale poorly on larger resolutions, and raster graphics scale according to resolution, so the graphics are of high quality.
- SVG can be modified via script and CSS, while Canvas can only be modified via script. SVG has an advantage over canvas because, for complex graphics, you can use CSS to modify the graphics.
- Canvas does not render images in high resolution on smaller screens. Only SVG can render graphics on smaller screens because it uses vector shapes, and vectors can be resized on smaller screens with good output.

# Q9 I

Why are SVGs preferred for rendering images in modern web applications?

- A:
SVG elements can be resized without impacting image quality.
- B:
SVGs are created with a fixed number of colored pixels.
- C:
SVG files are written using standard, well-documented HTML tags.
- D:
SVGs are raster-based images supported by all browsers.

## Q9 I Explanation
Scalable Vector Graphics (SVG) elements can be resized without impacting image quality. An SVG image is a vector graphic, meaning that the image is made up of mathematical equations rather than pixels. This makes SVG images resolution-independent and much smaller in file size than traditional pixel-based images, such as Joint Photographic Experts Group (JPEG) or Portable Network Graphics (PNG). As an SVG element is resized or zoomed, the math used to create the element is reapplied, which eliminates pixelation.
SVG files are not written using standard, well-documented Hypertext Markup Language (HTML) tags. SVG is written using Extensible Markup Language (XML), which can be stored and referenced from HTML, or embedded directly in HTML documents.
SVGs are not created with a fixed number of colored pixels. This describes raster image types such as JPEG or PNG. SVGs are created using vectors.
SVGs are not raster-based images supported by all browsers. Raster-based images use a predefined number of colored pixels to construct the image. SVGs use mathematical equations to define shapes.

# Q10 J

You plan to use SVG elements in your HTML app. You need to ensure that the correct attributes are utilized based on the app's requirements.

A: Create Custom SVG effects

B: Draw an SVG rectangle

C: Set an SVG element's blur level.

Option 1: <filter>
Option 2: <rect>
Option 3: <stdDeviation>
Option 4: (rect)
Option 5: <svg>

- A:
A:1, B:2, C3
- B:
A:5, B:3, C:4
- C:
A:2, B:4, C:1
- D:
A:1, B:5, C:3

## Q10 J Explanation

- The <filter> element allows you to group graphical filter primitives in order to apply custom visual effects to a Scalable Vector Graphics (SVG) image. Effects that can be applied using the <filter> element include blurring, sharpening, color correction, and warping. The <filter> element is used in conjunction with filter primitives, such as <feBlend> to create complex visual effects.

- The <rect> element is a basic building block of SVG, used to define a rectangle. It has the below attributes:
- x: The x-coordinate of the upper-left corner of the rectangle.
- y: The y-coordinate of the upper-left corner of the rectangle.
- width: The width of the rectangle.
- height: The height of the rectangle

- The stdDeviation attribute allows you to control the level of blur for an SVG element. Standard deviation is a measure of how spread out the values in a set of data are. It is calculated by taking the average of the differences between each value and the mean of all the values in the set. When used with SVG elements, this calculation determines how different each value is from the average. The higher this number, the more spread out the data is, resulting in a more blurred effect.

- The rect() method of the HTML canvas element creates a rectangle on the canvas. Parameters include the x and y coordinates of the top-left corner of the rectangle and the width and height of the rectangle. The resulting rectangle is not an SVG element.

- The <svg> tag is used to define an SVG image. An SVG image is a vector graphic, meaning that the image is made up of mathematical equations rather than pixels. This makes SVG images resolution-independent and much smaller in file size than traditional pixel-based images, such as Joint Photographic Experts Group (JPEG) or Portable Network Graphics (PNG).

# Q11 K
You want to gradually and smoothly change the position of a div element over a period of 1500 milliseconds.
What method should you use?

- A: 
window.requestAnimationFrame
- B: 
window.cancelAnimationFrame
- C: 
window.moveBy
- D: 
window.moveTo

## Q11 K Explanation

- Changing object properties gradually over time is known as animation. In prior versions of Hypertext Markup Language (HTML), animations were implemented by using the window.setInterval method. This prevents the browser from adapting to changing circumstances (such as when the browser is in the background, a device's battery is low, or a low-powered system is not able to keep up with a small interval).

- To solve this problem, HTML5 has dedicated animation facilities.

- You should use the window.requestAnimationFrame method. This method passes the time of the animation to your JavaScript callback function. Your callback function then determines how much the object properties need to change to reflect the passed time. If your animation is not complete, your callback function must again call window.requestAnimationFrame to schedule another update.

- Note that, at the time of writing, Microsoft Edge versions below 17 and Internet Explorer do not reliably fire requestAnimationFrame before the paint cycle.

- You should not use window.cancelAnimationFrame This method is used to cancel a pending animation callback that was scheduled by using window.requestAnimationFrame.

- You should not use window.moveBy. This method is used to move the window itself, not objects in the window.

- You should not use window.moveTo. This method is used to move the window itself, not objects in the window.

# Q12 L

Which of the following 3 options can be used to create transparent HTML elements? Select any three that apply:

A: Hexadecimal color definition
B: The opacity CSS property
C: The hsla color function
D: The transparency CSS property
E: The rgba color function

- A: 
B, C, E
- B:
A, D, C
- C:
E, C, B
- D:
B, D, E

## Q12 L Explanation

- You should use the opacity CSS property. This property accepts a number between 0.0 and 1.0, where 0.0 is fully transparent, and 1.0 is fully opaque. The opacity CSS property defines the maximum opacity for the element and all of its child elements. When the opacity property is specified on a parent element and a child element, they combine using multiplication. For example, if you have a div element with an opacity set to 0.5 and a child h1 element with an opacity set to 0.5, the effective opacity of the h1 element would be 0.25 (0.5 times 0.5).
- You should use the RGB color function. This property accepts three integer arguments, each between O and 255, for the red, green, and blue channels. A fourth argument is a number between 0.0 and 1.0 or the alpha channel.
- You should use the hsla color function. This property accepts four arguments. The first is hue, defined as an angle in degrees. The second argument is saturation, defined as a percentage. The third argument is lightness (sometimes called luminance), defined as a percentage. The final argument is alpha, defined as a number between 0.0 and 1.0, where 0.0 is fully transparent and 1.0 is fully opaque.
- You should not use hexadecimal to define a color with transparency. Because this is not supported in the CSS recommendation, it will be unrecognized by the browser and ignored.
- You should not use the transparency CSS property. This property is not defined in the CSS recommendation and is not recognized by browsers.

# Q13 M

Which font format is supported by most browsers?

- A:
Web Open Font Format (WOFF)

- B:
OpenType Font (OTF)

- C:
Embedded OpenType (EOT)

- D:
TrueType Font (TTF)

- E:
Scalable Vector Graphics (SVG)

## Q13 M Explanation

- Web Open Font Format (WOFF) is the font format supported by most browsers. This format is designed to address some of the perceived shortcomings of publishing other font formats on the World Wide Web, especially copy protection and cross-origin font loading.
- TrueType Font (TTF) is the font format supported by WebKit, Firefox, and Opera. Under limited circumstances, TTF fonts might be available to Internet Explorer 9 and later versions. TTF is not supported by most browsers.
- OpenType Font (OTF) is also supported by WebKit, Firefox, and Opera. OpenType Font and TrueType Font formats are usually supported by the same browsers. OTF is not supported by most browsers.
- Embedded OpenType (EOT) format was introduced by Microsoft in Internet Explorer 4. This is the only font version supported by Internet Explorer until Microsoft introduced support for WOFF in version 9. EOT is not supported by most browsers.
- Scalable Vector Graphics (SVG) fonts are supported by WebKit and Opera. Importantly, this is the only font format supported by iOS devices (iPad, iPod, iPhone, etc.) running Safari Mobile versions before 4.2. SVG is not supported by most browsers.

## Q14 N

You need to create a gradient background to a Hypertext Markup Language (HTML) element for the Mozilla Firefox browser. The gradient should contain three colors: bright red at the top left, bright green 60% toward the bottom right, and bright blue at the bottom right. The gradient should be along a precise 45 degree angle.
Which of the following Cascading Style Sheet (CSS) property declarations will generate the desired appearance?
Choose the correct answer:

- A: 
background-image: -moz-linear-gradient(135deg, rgb(255,0, 0), rgb(0, 255, 0) 60%, rgb(0, 0,255));

- B:
background-color: -moz-linear-gradient(-45deg, red, green 60%, blue);

- C:
background-image: -moz-linear-gradient(to bottom right, rgb (255,0,0), rgb(0,255,0) 60%, rgb(0,0,255));

- D:
background-image: -moz-linear-gradient(45deg, red, green 60%, blue);

## Q14 N Explanation
- You should use the following CSS property declaration: `background-image: -moz-linear-gradient (135deg, rgb (255,0,0), rgb (0,255, 0) 60%, rgb (0, 0,255))` ;
- This declaration correctly specifies the angle as 135 degrees. The colors will go from the bottom to the top by default and follow a clockwise rotation with the angle starting point at farthest right of imaginary circle.
- You should not use the following CSS property declaration:
`background-color: -moz-linear-gradient (135deg, red, green 60%, blue);`
- This declaration correctly specifies the -moz-linear-gradient function, but assigns the gradient to the background-color property. According to the CSS 3 Gradient recommendation, the gradient is not a color but an image, and can only be used where images would otherwise be used.

# Q15 O
You write the following code:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    img {
      filter: saturate(200%);
      filter: saturate(.4);
      filter: saturate(100%);
    }
    .photo{
       filter:drop-shadow (8px 8px 10px gray);
    }
  </style>
</head>
<body>
  <div class="photo">
    <img src="eiffeltower.jpg" alt="Eiffel tower" width="300" height="300">
  </div>
</body>
```
Which filter or set of filters will be applide to the eiffeltower.jpg image?
## Q15 O Explanation 

The image will only have a shadow because first of all these styles will apply to your image:
img{
filter: saturate(200%);
filter: saturate(.4);
filter: saturate(100%);
}
First, your image will be saturated 200% and then it will be saturated .4, and then saturated 100%
Later on, because your image is inside a div with class = "photo", this style will be applied:
photo {
filter: drop-shadow(8px 8px 10px gray);
}
This applies the shadow to the image.
The image will not be completely unsaturated because the image is inside a div element with a class = "photo"
The image will not be unsaturated 40% because three filters are applied to the image, and only the last one will be reflected, which is 100%
The image will not be unsaturated with a shadow in the background because there are three filters applied to the image, and the image saturation will be reverted to 100% Also, the image is inside a div element with class = "photo", and this class filter will also be applied to the image.