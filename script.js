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
    var totalMins = (h)

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

    function random() {
   document.getElementById("txt").innerHTML = (concat);
   setTimeout(function(){startTime()},4000);

    function change_color() {
        document.body.style.backgroundColor = color2;
    }
  }
  
  


//    function change_font(font1, font2, font3, font4, font5, font6, font7, cycle_time, wait_time) {
//         document.body.style.fontFamily = fontArray;

//     setInterval(function first_font() {
//         document.body.style.fontFamily = font1;
//         setTimeout(change_font, wait_time);
//     }, cycle_time);

//     setInterval(function second_font() {
//         document.body.style.fontFamily = font2;
//         setTimeout(change_font, wait_time);
//     }, cycle_time);

//     setInterval(function third_font() {
//         document.body.style.fontFamily = font3;
//         setTimeout(change_font, wait_time);
//     }, cycle_time);

//     setInterval(function fourth_font() {
//         document.body.style.fontFamily = font4;
//         setTimeout(change_font, wait_time);
//     }, cycle_time);

//     setInterval(function fifth_font() {
//         document.body.style.fontFamily = font5;
//         setTimeout(change_font, wait_time);
//     }, cycle_time);

//     setInterval(function sixth_font() {
//         document.body.style.fontFamily = font6;
//         setTimeout(change_font, wait_time);
//     }, cycle_time);

//     setInterval(function seventh_font() {
//         document.body.style.fontFamily = font7;
//         setTimeout(cchange_font, wait_time);
//     }, cycle_time);
// }
 
  startTime();
});

   