// // [if 조건에 따라 코드를 실행할지 말지]
// // 맑으면 true, 비오면 false
// var weather = false;
// if(!weather){
//   alert("우산챙기기!");
// }

// // [기온이 4도 이하인 경우 외투 챙기기]
// var temp = 23;
// if(temp <= 4){
//   alert("외투챙기기!");
// }

// // [훈련생의 점수기준 판별 프로그램 (기준 : 60점)]
// var score = 54;
// if(score >= 60){
//   alert("합격");
// }else{
//   alert("불합격");
// }

// // [100분위 점수를 학점으로 변환하는 프로그램]
// var jumsu = 81;
// var hakjum;
// if(jumsu >= 90){
//   hakjum = "A";
// }else if(jumsu >= 80){
//   hakjum = "B";
// }else if(jumsu >= 70){
//   hakjum = "C";
// }else if(jumsu >= 60){
//   hakjum = "D";
// }else{
//   hakjum = "F";
// }
// alert(hakjum);




// // [and 조건을 위한 연습 : 졸업 가능?]
// // 외국인의 경우 어학점수는 반영하지 않음.
// // 외국인의 경우 어학은 영어, 국어 중 하나의 점수가 60점이상
// var fore = true; // 내국인:false, 외국인:true
// var english = 90; // 어학점수 60점 이상
// var korean = 58;  // 국어점수 60점 이상
// var credit = 120; // 120학점 이상
// var engineer = true; // 취득:true, 미취득:false
// if(fore){
//   // 외국인 졸업사정
//   if((korean >= 60 || english >= 60) && credit >= 120 && engineer){
//     alert("졸업 가능");
//   }else{
//     alert("졸업 불가능");
//   }
// }else{
//   // 내국인 졸업사정
//   if(english >= 60 && credit >= 120 && engineer){
//     alert("졸업 가능");
//   }else{
//     alert("졸업 불가능");
//   }
// }



// // [부동산 알아보기]
// // 새 직장을 얻어서 직장 근처에 집을 얻고 싶다.

// // 직장으로부터 반경 10키로 이내에 있는 집을 가지고 싶다. (필수)
// // 주말마다 여가생활을 해야하니 주차가 가능한 집이었으면 좋겠다. (필수)
// // 엘리베이터가 반드시 있었으면 좋겠다. (필수)

// // 전용면적이 20평 이상 이거나
// // 주변에 상가가 반경 1키로 이내에 있었으면 좋겠다.
// var house = [
//   {
//     company: 14,
//     parking: true,
//     elev: false,
//     area: 21,
//     shop: 0.8
//   },
//   {
//     company: 9,
//     parking: true,
//     elev: true,
//     area: 24,
//     shop: 1.5
//   },
//   {
//     company: 2,
//     parking: true,
//     elev: false,
//     area: 22,
//     shop: 0.2
//   },
//   {
//     company: 8,
//     parking: true,
//     elev: true,
//     area: 21,
//     shop: 0.5
//   },
//   {
//     company: 12,
//     parking: true,
//     elev: true,
//     area: 22,
//     shop: 0.3
//   }
// ];

// if(house[0].company <= 10 && house[0].parking && house[0].elev 
//      && (house[0].area >= 20 || house[0].shop <= 1)){
//   alert("계약가능");
// }else{
//   alert("계약불가능");
// }

// // i는 0으로 시작해서 반복할때마다 1씩 증가하는데
// // 그 i가 5보다 작은동안은 계속 반복한다.
// var x = "";
// for(i=0 ; i<5 ; i++){
//   x = x + "*";
// }
// alert(x);

// // 10번 반복하는 for문 공식
// for(i=0 ; i<10 ; i++){
//   // 반복할 내용
// }

// // 1부터 100까지의 자연수를 모두 더한값을 구하는 프로그램
// // 1+2+3+4+5+...+98+99+100 = ?
// var sum = 0;
// for(i=1; i<=100; i++){
//   sum = sum + i;
// }
// alert(sum);
// // 0+1
// //   1+2
// //     3+3
// //       6+4
// //        10+5
// //          15+6

// // 5부터 10까지의 자연수의 총 합계를 구하는 프로그램
// // 5+6+7+8+9+10 = ?
// var s = 0;
// for( i=5 ; i<=10 ; i++ ){
//   s = s + i;
// }
// alert(s);

// // "10/9/8/7/6/5"
// var t = "";
// for( i=10 ; i>=5 ; i-- ){
//   if(i != 5){
//     t = t + i + "/";
//   }else{
//     t = t + i;
//   }
// }
// alert(t);

// //  0    1     2     3     4     5
// // 10-0  10-1  10-2  10-3  10-4  10-5
// // 10    9     8     7     6     5


// // ㅁ
// // ㅁㅁ
// // ㅁㅁㅁ
// // ㅁㅁㅁㅁ
// // ㅁㅁㅁㅁㅁ
// var pyramid = "";
// for(i=1; i<=5; i++){
//   var chng = "";
//   for(j=1; j<=i; j++){
//     chng = chng + "ㅁ";
//   }
//   pyramid = pyramid + chng + "\n";
// }
// alert(pyramid);


// 101 102 103 104 ... 109 110 식으로 호실번호를 만들어야 한다.
// 전체 층은 9층이며
// 각 층에는 10개의 가구가 존재한다.
// var res = [];
// for(i=1; i<=9; i++){
//   for(j=1; j<=10; j++){
//     if(j<10){
//       res.push(i+"0"+j);
//     }else{
//       res.push(""+i+j);
//     }
//   }
// }
// alert(res);


// "1 2 3 4 5 / 6 7 8 9 10"
// var result = "";
// for(i=1; i<=10; i++){
//   if(i >= 6){
//     break;
//   }else{
//     result = result + i + " ";
//   }
// }
// alert(result);
  
// 1 2   4 5   7 8   10 11   13 14 ...98   100   
// var result = "";
// for(i=1; i<=100; i++){
//   if(i%3 == 0){
//     continue;
//   }else{
//     result = result + i + " ";
//   }
// }
// alert(result);


var filename = [
  ["ceo.html","map.html","prize.html"], 
  ["app.html","mobile.html","memory.html"]
];
var menuname1 = ["회사소개","제품소개"];
var menuname2 = [
  ["CEO인사말","오시는길","수상실적"], 
  ["일반가전","모바일","메모리"]
];
var currentname = location.href;      // http://aa.com/bb/index.html
currentname = currentname.split("/"); // ["http:","","aa.com","bb","index.html"]
var len = currentname.length;         // 5
currentname = currentname[len-1];     // curruntname[5-1]// curruntname[4] // "index.html"
var depth1;
var depth2;
for(i=0; i<filename.length; i++){
  for(j=0; j<filename[i].length; j++){
    if(currentname == filename[i][j]){
      depth1 = i;
      depth2 = j;
      break;
    }
  }
}

if(depth1 != undefined && depth2 != undefined){
  var bc_1 = "&gt; <a>"+ menuname1[depth1] +"</a>";
  var bc_2 = "&gt; <a href='"+currentname+"'>"+ menuname2[depth1][depth2] +"</a>";
  document.getElementById("bc_1").innerHTML = bc_1;
  document.getElementById("bc_2").innerHTML = bc_2;
}