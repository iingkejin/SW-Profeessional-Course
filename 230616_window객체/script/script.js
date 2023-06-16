// alert( window.innerWidth );
// window.moveBy(10,200);

// setTimeout(function(){
//   // alert("인사가 3초 늦었습니다. 안녕하세요.");
//   // location.href="http://naver.com";
// }, 3000);

// function addA(){
//   document.body.innerHTML = document.body.innerHTML + "A";
// }

// setInterval(addA, 500);

function chktime(){
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var msec = now.getMilliseconds();
  document.getElementById("si").innerHTML = addzero(hour);
  document.getElementById("bun").innerHTML = addzero(min);
  document.getElementById("cho").innerHTML = addzero(sec);
  document.getElementById("mcho").innerHTML = addzero2(msec);
}

function addzero(num){
  if(num < 10){
    return "0"+num;
  }else{
    return num;
  }
}

function addzero2(num){
  if(num < 10){
    return "00"+num;
  }else if(num < 100){
    return "0"+num;
  }else{
    return num;
  }
}

window.setInterval(chktime, 1);

// alert( document.getElementsByTagName("span").length );
// var arr = [1, 5, 5, 6, 9, "a", true];
// alert( arr.length );
// var text = "Hello world!";
// alert( text.length );
// alert( text.split(" ").length );

// document.getElementById("si").style.fontWeight = "bold";

// alert( location.href );
// location.href = "http://naver.com"; // redirect 비추

// document.getElementById("saero").onclick = function(){
//   location.reload();
// }

// var a = window.prompt("더하기 할 첫번째 값을 입력하시오.");
// var b = window.prompt("더하기 할 두번째 값을 입력하시오.");
// a = Number(a);
// b = Number(b);
// window.alert(a+b);

// 7나누기3 의 몫
// alert( parseInt(7/2) );
// alert( 7%2 );

// 최소, 최대값을 지정하고 그 사이의 임의의 정수를 추출하는 함수
function rand(min, max){
  return Math.floor(Math.random()*(max-min+1) + min);
}
// alert(   rand(1,6)   );

document.body.style.backgroundColor = "rgb("+rand(0,255)+", "+rand(0,255)+", "+rand(0,255)+")";

// 최소값이 3, 최대값이 6
// alert(    Math.floor(Math.random()*(6-3+1) + 3)    );

var now = new Date();
var year = now.getFullYear();
var month = addzero(now.getMonth()+1);
var date = addzero(now.getDate());
var day = now.getDay();
var daytext = ["일","월","화","수","목","금","토"];
alert(year+"-"+month+"-"+date+" "+daytext[day]+"요일");