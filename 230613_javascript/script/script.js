// [배열 공부]
//           키 몸무게 성별  결혼여부 주택소유여부
// var jiho = [175, 78, "남자", false, null];
// [객체형변수 공부]
// var jiho = {
//   height:175, 
//   weight:78, 
//   gender:"남자", 
//   marriage:false, 
//   house:null,
//   friends: ["김태훈", "염경선", "차영규", "황단비"]
// };
// alert( "지호의 친구1 : "+jiho.friends[1] );

// [이중배열 공부]
// 우리건물은 총 5층짜리 건물인데
// 1층 부터 4층까지는 세개의 원룸이 있고
// 5층에는 주인세대 1세대만 있다.
// var lenthouse = [
//   ["전지현", "김태희", "정지훈"], 
//   ["송혜교", "RM", "슈가"], 
//   ["옥택연", "송강호", "태진아"], 
//   ["홍금보", "성룡", "신성록"], 
//   ["한지호"]
// ];

// var floor;
// var ho;

// for(i=0; i<5; i++){
//   for(j=0; j<lenthouse[i].length; j++){
//     if(lenthouse[i][j] == "한지호"){
//       floor = i+1;
//       ho = j+1;
//       break;
//     }
//   }
// }

// alert("한지호는 "+floor+"0"+ho+"호에서 발견되었습니다.");

// [지역변수/전역변수 공부]
// alert(jiho);
// function seoul(){
//   var jiho = "한지호";
//   alert(jiho);
// }
// seoul();

// alert(jiho);

// [prompt, confirm 공부]
// var birth = prompt("생년을 입력하세요. 예) 1980");
// birth = parseInt(birth);
// var age = 2023 - birth;
// alert("당신의 나이는 "+age+"세 입니다.");

// var lunch = confirm("당신은 점심을 드셨습니까?");
// if(lunch){
//   alert("오 배부르시겠네요.");
// }else{
//   alert("밥먹을 시간도 없는 당신 화이팅.");
// }

// function rand(min,max){
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// setInterval(function(){
//   var r = rand(0,255);
//   var g = rand(0,255);
//   var b = rand(0,255);
//   document.getElementsByTagName("body")[0].style.backgroundColor
//   = "rgb("+r+","+g+","+b+")";
// }, 50);


// [나머지 연산자 공부]
// alert(7 % 2);

// [증감 연산자 공부]
// 지금까지 버튼을 누른 횟수 = 0
// #btn이 눌릴때마다 이런일을 할것이다.
  // 지금까지버튼을누른횟수 를 1 증가시킴
  // #num인 박스에 그 숫자를 입력
// [바닐라 자바스크립트 문법]
// var count = 0;
// document.getElementById("btn").onclick = function(){
//   count++;
//   document.getElementById("num").innerHTML = count;
// }
// [제이쿼리 문법]
// var count = 0;
// $("#btn").click(function(){
//   count++;
//   $("#num").text(count);
// });

// var a = 3;
// a = a + 3;
// a += 3;






