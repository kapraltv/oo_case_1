var canvas = null;

var form = null,
  dot = {},
  circle = {};

function setParametrs() {
  
  circle.r = +form.value1.value;
  circle.x = +form.value2.value;
  circle.y = +form.value3.value;

  dot.x0 = +form.value4.value;
  dot.y0 = +form.value5.value;

  // Первая точка
  dot.x1 = +form.value6.value;
  dot.y1 = +form.value7.value;

  var n1 = locationCircleAndDots(
    circle.x,
    circle.y,
    circle.r,
    dot.x0,
    dot.y0,
    dot.x1,
    dot.y1
  );
  if (dot.x1 !== undefined && NaN && '' && dot.y1 !== undefined && NaN && '') {
    checkPosition(n1, dot.x1, dot.y1);
  }

  

  // Вторая точка
  dot.x2 = +form.value9.value;
  dot.y2 = +form.value10.value;

  var n2 = locationCircleAndDots(
    circle.x,
    circle.y,
    circle.r,
    dot.x0,
    dot.y0,
    dot.x2,
    dot.y2
  );
  if (dot.x2 !== undefined && NaN && '' && dot.y2 !== undefined && NaN && '') {
    checkPosition(n2, dot.x2 , dot.y2);
  }

  // Третья точка
  dot.x3 = +form.value12.value;
  dot.y3 = +form.value13.value;

  var n3 = locationCircleAndDots(
    circle.x,
    circle.y,
    circle.r,
    dot.x0,
    dot.y0,
    dot.x3,
    dot.y3
  );
  if (dot.x3 !== undefined && NaN && '' && dot.y3 !== undefined && NaN && '') {
    checkPosition(n3, dot.x3, dot.y3);
  }

  // Четвертая точка
  dot.x4 = +form.value15.value;
  dot.y4 = +form.value16.value;

  var n4 = locationCircleAndDots(
    circle.x,
    circle.y,
    circle.r,
    dot.x0,
    dot.y0,
    dot.x4,
    dot.y4
  );
  if (dot.x4 !== undefined && NaN && '' && dot.y4 !== undefined && NaN && '') {
    checkPosition(n4, dot.x4, dot.y4);
  }

  // Пятая точка
  dot.x5 = +form.value18.value;
  dot.y5 = +form.value19.value;

  var n5 = locationCircleAndDots(
    circle.x,
    circle.y,
    circle.r,
    dot.x0,
    dot.y0,
    dot.x5,
    dot.y5
  );
  if (dot.x5 !== undefined && NaN && '' && dot.y5 !== undefined && NaN && '') {
    checkPosition(n5, dot.x5, dot.y5);
  }

   // Шестая точка
   dot.x6 = +form.value21.value;
   dot.y6 = +form.value22.value;
   
   var n6 = locationCircleAndDots(
     circle.x,
     circle.y,
     circle.r,
     dot.x0,
     dot.y0,
     dot.x6,
     dot.y6
   );
   if (dot.x6 !== undefined && NaN && '' && dot.y6 !== undefined && NaN && '') {
    checkPosition(n6, dot.x6, dot.y6);
  }

  //  Седьмая точка
   dot.x7 = +form.value24.value;
   dot.y7 = +form.value25.value;
   
   var n7 = locationCircleAndDots(
     circle.x,
     circle.y,
     circle.r,
     dot.x0,
     dot.y0,
     dot.x7,
     dot.y7
   );
   if (dot.x7 !== undefined && NaN && '' && dot.y7 !== undefined && NaN && '') {
    checkPosition(n7, dot.x7, dot.y7);
  }

  //  Восьмая точка
   dot.x8 = +form.value27.value;
   dot.y8 = +form.value28.value;
   
   var n8 = locationCircleAndDots(
     circle.x,
     circle.y,
     circle.r,
     dot.x0,
     dot.y0,
     dot.x8,
     dot.y8
   );
   if (dot.x8 !== undefined && NaN && '' && dot.y8 !== undefined && NaN && '') {
    checkPosition(n8, dot.x8, dot.y8);
  }

  //  Девитая точка
   dot.x9 = +form.value30.value;
   dot.y9 = +form.value31.value;
   
   var n9 = locationCircleAndDots(
     circle.x,
     circle.y,
     circle.r,
     dot.x0,
     dot.y0,
     dot.x9,
     dot.y9
   );
   if (dot.x9 !== undefined && NaN && '' && dot.y9 !== undefined && NaN && '') {
    checkPosition(n9, dot.x9, dot.y9);
  }

   //  Десятая точка
   dot.x10 = +form.value33.value;
   dot.y10 = +form.value34.value;
   
   var n10 = locationCircleAndDots(
     circle.x,
     circle.y,
     circle.r,
     dot.x0,
     dot.y0,
     dot.x10,
     dot.y10
   );
   if (dot.x10 !== undefined && NaN && '' && dot.y10 !== undefined && NaN && '') {
    checkPosition(n10, dot.x10, dot.y10);
  }

  draw();
}

function locationCircleAndDots(x, y, r, x1, y1, x2, y2) {
  var v1 = x1 - x2;
  var v2 = y1 - y2;
  var s = x1 * y2 - x2 * y1;
  var k1 = -2 * x;
  var k2 = -2 * y;
  var f = x * x + y * y - r * r;

  var a = v1 * v1 + v2 * v2;
  var b = v1 * v1 * k1 + 2 * s * v2 + v1 * k2 * v2;
  var c = f * v1 * v1 + s * s + v1 * k2 * s;
  var D = b * b - 4 * a * c;

  if (D < 0) {
    return 0;
  } else if (D < 0.001) {
    return 1;
  }

  return 2;
}

function checkPosition(locationCircleAndDots, checkDotX = null, checkDotY = null) {

  switch (locationCircleAndDots) {

    case 0:

      if (checkDotX === dot.x1 && checkDotY === dot.y1) {
        form.value8.value = "Окружность и прямая не пересекаются!";
      }

      if (form.value9.id == 2 && form.value10.id == 2) {
        form.value11.value = "Окружность и прямая не пересекаются!";
      }

      if (form.value12.id == 3 && form.value13.id == 3) {
        form.value14.value = "Окружность и прямая не пересекаются!";
      }

      if (form.value15.id == 4 && form.value16.id == 4) {
        form.value17.value = "Окружность и прямая не пересекаются!";
      }

      if (form.value18.id == 5 && form.value19.id == 5) {
        form.value20.value = "Окружность и прямая не пересекаются!";
      }

      if (form.value21.id == 6 && form.value22.id == 6) {
        form.value23.value = "Окружность и прямая не пересекаются!";
      }

      if (form.value24.id == 7 && form.value25.id == 7) {
        form.value26.value = "Окружность и прямая не пересекаются!";
      }

      if (form.value27.id == 8 && form.value28.id == 8) {
        form.value29.value = "Окружность и прямая не пересекаются!";
      }

      if (form.value30.id == 9 && form.value31.id == 9) {
        form.value32.value = "Окружность и прямая не пересекаются!";
      }

      if (form.value33.id == 10 && form.value34.id == 10) {
        form.value35.value = "Окружность и прямая не пересекаются!";
      }

      break;

    case 1:

      if (checkDotX === dot.x1 && checkDotY === dot.y1) {
        form.value8.value = "Окружность и прямая касаются!";
      }

      if (form.value9.id == 2 && form.value10.id == 2) {
        form.value11.value = "Окружность и прямая касаются!";
      }

      if (form.value12.id == 3 && form.value13.id == 3) {
        form.value14.value = "Окружность и прямая касаются!";
      }

      if (form.value15.id == 4 && form.value16.id == 4) {
        form.value17.value = "Окружность и прямая касаются!";
      }

      if (form.value18.id == 5 && form.value19.id == 5) {
        form.value20.value = "Окружность и прямая касаются!";
      }

      if (form.value21.id == 6 && form.value22.id == 6) {
        form.value23.value = "Окружность и прямая касаются!";
      }

      if (form.value24.id == 7 && form.value25.id == 7) {
        form.value26.value = "Окружность и прямая касаются!";
      }

      if (form.value27.id == 8 && form.value28.id == 8) {
        form.value29.value = "Окружность и прямая касаются!";
      }

      if (form.value30.id == 9 && form.value31.id == 9) {
        form.value32.value = "Окружность и прямая касаются!";
      }

      if (form.value33.id == 10 && form.value34.id == 10) {
        form.value35.value = "Окружность и прямая касаются!";
      }

      break;

    case 2:

      if (checkDotX === dot.x1 && checkDotY === dot.y1) {
        form.value8.value = "Окружность и прямая пересекаются!";
      }

      if (form.value9.id == 2 && form.value10.id == 2) {
        form.value11.value = "Окружность и прямая пересекаются!";
      }

      if (form.value12.id == 3 && form.value13.id == 3) {
        form.value14.value = "Окружность и прямая пересекаются!";
      }

      if (form.value15.id == 4 && form.value16.id == 4) {
        form.value17.value = "Окружность и прямая пересекаются!";
      }

      if (form.value18.id == 5 && form.value19.id == 5) {
        form.value20.value = "Окружность и прямая пересекаются!";
      }

      if (form.value21.id == 6 && form.value22.id == 6) {
        form.value23.value = "Окружность и прямая пересекаются!";
      }

      if (form.value24.id == 7 && form.value25.id == 7) {
        form.value26.value = "Окружность и прямая пересекаются!";
      }

      if (form.value27.id == 8 && form.value28.id == 8) {
        form.value29.value = "Окружность и прямая пересекаются!";
      }

      if (form.value30.id == 9 && form.value31.id == 9) {
        form.value32.value = "Окружность и прямая пересекаются!";
      }

      if (form.value33.id == 10 && form.value34.id == 10) {
        form.value35.value = "Окружность и прямая пересекаются!";
      }
      
      break;

  }

}

function draw() {
  canvas.clearRect(0, 0, 500, 500);
  canvas.fillStyle = "red";
  canvas.fill();
  canvas.beginPath();
  canvas.strokeStyle = "#444";
  canvas.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);

  canvas.moveTo(dot.x0 + 0.5, dot.y0 + 0.5);
  canvas.lineTo(dot.x1 + 0.5, dot.y1 + 0.5);

  canvas.moveTo(dot.x0 + 0.5, dot.y0 + 0.5);
  canvas.lineTo(dot.x2 + 0.5, dot.y2 + 0.5);

  canvas.moveTo(dot.x0 + 0.5, dot.y0 + 0.5);
  canvas.lineTo(dot.x3 + 0.5, dot.y3 + 0.5);

  canvas.moveTo(dot.x0 + 0.5, dot.y0 + 0.5);
  canvas.lineTo(dot.x4 + 0.5, dot.y4 + 0.5);

  canvas.moveTo(dot.x0 + 0.5, dot.y0 + 0.5);
  canvas.lineTo(dot.x5 + 0.5, dot.y5 + 0.5);

  canvas.moveTo(dot.x0 + 0.5, dot.y0 + 0.5);
  canvas.lineTo(dot.x6 + 0.5, dot.y6 + 0.5);

  canvas.moveTo(dot.x0 + 0.5, dot.y0 + 0.5);
  canvas.lineTo(dot.x7 + 0.5, dot.y7 + 0.5);

  canvas.moveTo(dot.x0 + 0.5, dot.y0 + 0.5);
  canvas.lineTo(dot.x8 + 0.5, dot.y8 + 0.5);

  canvas.moveTo(dot.x0 + 0.5, dot.y0 + 0.5);
  canvas.lineTo(dot.x9 + 0.5, dot.y9 + 0.5);

  canvas.moveTo(dot.x0 + 0.5, dot.y0 + 0.5);
  canvas.lineTo(dot.x10 + 0.5, dot.y10 + 0.5);

  canvas.stroke();
}

window.onload = function () {
  canvas = document.getElementById("canvas").getContext("2d");
  form = document.forms[0];
  draw();
};
