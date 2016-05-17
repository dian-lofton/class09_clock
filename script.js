// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    var evenodd = evenOdd(m);
    var fontArray = ['Arial', 'Verdana', 'Helvetica', 'Courier', 'Georgia', 'Times', 'Comic Sans'];
    var rand = Math.floor(Math.random() * fontArray.length);
    var concat = fontArray[rand];

    h = convertHours(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    $("#txt").html(h + ":" + m + ":" + s + ampm)
    setTimeout(startTime, 500);

    }

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }
  }

  function evenOdd(i) {
    if (i % 2 === 0){
      $("#txt").css({ color: "blue", fontSize: "25px" });
      } else {$("#txt").css({ color: "red", fontSize: "25px" });
    }
  }


  toggle_color("#61beb3", "#90a2c6", 4000, 300000);

  function toggle_color(color1, color2, cycle_time, wait_time) {

    setInterval(function first_color() {
        document.body.style.backgroundColor = color1;
        setTimeout(change_color, wait_time);
    }, cycle_time);

    function change_color() {
        document.body.style.backgroundColor = color2;
    }
  }
  
  function random() {
   document.getElementById("demo").innerHTML = (concat);
   setTimeout(function(){startTime()},4000);

   function change_font(font1, font2, font3, font4, font5, font6, font7, cycle_time, wait_time) {
        document.body.style.fontFamily = fontArray;

    setInterval(function first_font() {
        document.body.style.fontFamily = font1;
        setTimeout(change_font, wait_time);
    }, cycle_time);

    setInterval(function second_font() {
        document.body.style.fontFamily = font2;
        setTimeout(change_font, wait_time);
    }, cycle_time);

    setInterval(function third_font() {
        document.body.style.fontFamily = font3;
        setTimeout(change_font, wait_time);
    }, cycle_time);

    setInterval(function fourth_font() {
        document.body.style.fontFamily = font4;
        setTimeout(change_font, wait_time);
    }, cycle_time);

    setInterval(function fifth_font() {
        document.body.style.fontFamily = font5;
        setTimeout(change_font, wait_time);
    }, cycle_time);

    setInterval(function sixth_font() {
        document.body.style.fontFamily = font6;
        setTimeout(change_font, wait_time);
    }, cycle_time);

    setInterval(function seventh_font() {
        document.body.style.fontFamily = font7;
        setTimeout(cchange_font, wait_time);
    }, cycle_time);
}
    // function change_font(h, m, s)

    // document.getElementById('clock').innerHTML = h+":"+m+":"+s;
    // setTimeout(function(){startTime()},500);

  startTime();
});


  // function random(i) {
  //   if (i)
  //     return "#"+r+g+b;
  // }


    // var fontSize = ["20px", "40px", "60px", "80px", "100px"];

//     var safeColors = ['00','33','66','99','cc','ff'];
//     var rand = function() {
//     return Math.floor(Math.random()*6);
// };
//     var randomColor = function() {
//     var r = safeColors[rand()];
//     var g = safeColors[rand()];
//     var b = safeColors[rand()];
//     return "#"+r+g+b;
// };
    // var colors = ["#CCCCCC","#333333","#990099"];  
    // var rand = Math.floor(Math.random()*colors.length);
    
    // $("#txt").each(function() {
    //         $(this).css('background',randomColor());
    //     };

    // $("#txt").css("background-color", toString[randomColor]);
    // setTimeout(startTime, 2000);
  

  // var sizeFont;
  
  // sizeFont=new Array("35px", "45px", "55px", "65px", "75px");

  // function change_fontSize(size1, size2, size3, size4, size5, cycle_time, wait_time){

  //  setInterval(function change_fontSize() {
  //       document.body.style.fontSize = size1;
  //       setTimeout(change_fontSize, wait_time);
  //   }, cycle_time);

  //  function change_fontSize() {
  //   document.body.style.fontSize = size2;
  //  }

  //  function change_fontSize() {
  //   document.body.style.fontSize = size3;
  //  }

  //  function change_fontSize() {
  //   document.body.style.fontSize = size4;
  //  }

  //  function change_fontSize() {
  //   document.body.style.fontSize = size5;
  //  }


  // setInterval(function change_fontSize() {

  //     $('#menu').append(size[fnt]);
  //     $('#menu').css({'fontSize': size[fnt]});
  //     fnt += 1;

  // }, 1000);

//   toggle_fontSize("20px","40px","60px", 4000, 2000);

//   function change_fontSize(size1, size2, size3, cycle_time, wait_time) {
      
//   setInterval(function first_fontSize() {
//       document.body.style.fontSize = size1;
//       setTimeout(change_fontSize, wait_time);
//   }, cycle_time);
// }

//   // function changeBg(i){
//   //   if (setTimeout(startTime, 2000)) {
//   //    $("#txt").css({ backgroundColor: "blue"}); 
//   //   }
//   // }


// // $("#controls-wrapper").each(function(){ var colors = ["#CCCCCC","#333333","#990099"]; 
// // 
// // var rand = Math.floor(Math.random()*colors.length); 
// // $(this).css("background-color", colors[rand]);}); 


//   // function isEven(i) {
//   //   i = Number(i);
//   //   return i === 0
//   // }

//   // function isOdd(i) {
//   //   return isEven(Number(i) + 1);
//   // }
