// 서버 : 요청한 정보를 보내주는 프로그램
// HTTP 요청 방식 네가지
// 1. GET(읽기)
// 2. POST(쓰기)
// 3. PUT(수정)
// 4. DELETE(삭제)

// Node.js : Javascript runtime
// Javascript는 프로그래밍적 연산을 하기 위한 언어가 아니고, 
// HTML을 조작하기 위해 만들어진 언어다.
// Javascript는 브라우저가 해석한다. (크롬, 사파리, 엣지, 파이어폭스 등)
// 크롬 브라우저V8 엔진에서 브라우저 환경 외에 다른 환경에서도 
// 사용할 수 있도록 Node.js를 만들었다.

// Node.js 장단점
// 장점 : 가벼운 요청부터 먼저 처리
// 단점 : 이미지, 동영상, 연산처리가 필요한 서비스를 개발해야 될 경우,
// 속도가 떨어지고, 라이브러리도 부족하다. (-> python 사용)

// Express 라이브러리로 서버 구축
// 폴더 생성 -> cd로 해당 폴더로 경로 이동
// cd 폴더명
// cd(Change Directory), cd .., ls

// npm init => package.json 파일 생성된다.
// npm init 후 쭉 엔터 entry point 부분에 작성된 파일명과 
// package.json 파일에 작성된 "main": "index.js", 파일명이 동일해야한다.
// 다른 이름으로 파일 생성 했을 경우, package.josn 파일에서 파일명 수정!

// npm install express  => node_modules 생성된다.
// npm : 라이브러리를 설치하기 위한 도구
// node_modules : 라이브러리 사용할 때 필요한 것들이 담긴 폴더

// express로 서버 만드는 문법
const express = require('express');
const app = express();

// port : 컴퓨터에는 외부 네트워크랑 통신을 할 수 있는 여러개의 구멍이 있는데,
//  그 중에 몇 번째 port로 접속할건지 지정 해줘야 한다.

// listen이라는 함수로 서버를 열어준다.
// listen(para1, para2)
// para1 : 서버를 띄울 포트 번호
// para2 : 실행 할 코드

// 내 컴퓨터에서 7000번 포트로 진입 했을 때,
// 콜백함수 안에 있는 코드 실행
// localhost:7000(port number)
app.listen(7000, function(){
  console.log('7000번 포트')
})


// 서버에 GET 요청하기
// localhost:7000으로 접속하면 send, sendFile() 안 내용을 보여준다.
// app.get('경로', function(){})
// requests(요청), response(응답)
// slash / 는 메인 경로 (localhost:7000)
app.get('/', function(requests, response){
  response.sendFile(__dirname + '/index.html');
})

// 'localhost:7000/test' 로 접속시 실행 할 코드
app.get('/test', function(requests, response){
  response.send('Test 페이지 입니다.')
})


// 서버 종료 => ctrl + c
// 서버 재실행 자동화(nodemon)
// -g(global)로 컴퓨터 전역에서 이용 가능하도록 설치
// npm install -g nodemon
// node index.js => nodemon index.js


// powershell 보안 에러
// 에러 원인 : Restricted일 때 허가된 script외에 막아버리기 때문에 에러가 발생한다.

// 검색 -> powershell(관리자 권한으로 실행)
// executionpolicy 
// set-executionpolicy unrestricted => enter
// y => enter


// localhost:7000/login 으로 접속시 보여줄 화면 => login.html
app.get('/login', function(requests, response){
  response.sendFile(__dirname + '/login.html')
})

// localhost:7000/map 으로 접속시 보여줄 화면 => map.html
// map.html : 카카오 지도 OPEN API
app.get('/map', function(requests, response){
  response.sendFile(__dirname + '/map.html')
})
