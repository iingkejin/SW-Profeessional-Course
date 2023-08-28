// 서버 : 요청한 정보를 보내주는 프로그램
// HTTP 요청 방식 네가지
// 1. GET(읽기)
// 2. POST(쓰기)
// 3. PUT(수정)
// 4. DELETE(삭제)


// Node.js
// Javascript runtime
// Javascript는 프로그래밍적 연산을 하기 위한 언어가 아니고, HTML을 조작하기 위해 만들어진 언어
// Javascript 언어는 브라우저가 해석한다. (크롬, 사파리, 엣지, 파이어폭스 등)
// 크롬 브라우저에 V8 엔진에서 브라우저 환경 외에 다른 환경에서도 사용할 수 있도록 Node.js를 만들었다.

// Node.js 장단점
// 장점 : 가벼운 요청부터 먼저 처리
// 단점 : 이미지, 동영상, 연산처리가 필요한 서비스를 개발해야 될 경우, 속도도 떨어지고, 라이브러리도 부족하다.

// Express 라이브러리 사용해서 서버 구축
// 폴더 생성 -> cd로 해당 폴더로 경로 이동
// cd, cd .., ls

// npm init
// npm install express 

// express로 서버 만드는 문법
const express = require('express');
const app = express();

// port : 컴퓨터에는 외부 네트워크랑 통신을 할 수 있는
// 여러개의 구멍이 있는데, 그 중에 내가 몇번째 port로 접속할건지 
// listen이라는 함수를 서버를 열어준다.
// listen(para1, para2)
// para1 : 서버를 띄울 포트 번호
// para2 : 실행 할 코드

// 내 컴퓨터에서 7000 포트로 진입
// 콜백함수 안에 있는 코드 실행
// localhost:7000(port number)

app.listen(7000, function(){
  console.log('7000번 포트')
})


// 서버에 GET 요청으로 정보 받아오기
// 유저가 localhost:7000으로 접속하면 send, sendFile() 안 내용을 보여준다.
// app.get('경로', function(){})
// requests(요청), response(응답)
// slash / 는 메인 경로 (localhost:7000)
app.get('/', function(requests, response){
  response.sendFile(__dirname + '/index.html');
})

app.get('/test', function(requests, response){
  response.send('Test 페이지 입니다.')
})


// 서버 종료 => ctrl + c
// 서버 재실행 자동화
// -g(global)로 컴퓨터 전역에서 이용 가능하게 설치
// npm install -g nodemon
// node index.js => nodemon index.js

// powershell 보안 오류
// powershell(관리자 권한으로 실행)
// executionpolicy
// set-executionpolicy unrestricted => enter
// y => enter

// /login 경로로 접속 했을 때 login.html 파일이 보이게 작성
app.get('/login', function(requests, response){
  response.sendFile(__dirname + '/login.html')
})