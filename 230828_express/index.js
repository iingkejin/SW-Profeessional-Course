// * 외부 라이브러리 설치 관련 코드는 최상단에 작성! *

// 설치한 라이브러리 
// 1. express(설치방법 => 244번 코드 확인)
// 2. nodemon => npm install -g nodemon
// 3. body-perser => npm install body-parser
// 4. MongoDB => npm install mongodb@3.6.4
// 5. ejs => npm install ejs
// 6. method-override => npm install method-override

// express로 서버 만드는 문법
const express = require('express');
const app = express();

// body-parser : 요청 데이터 해석을 도와주는 라이브러리
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

// MongoDB
const MongoClient = require('mongodb').MongoClient;

// ejs (html에서 바로 데이터 바인딩 가능) <%= 데이터 %>
// ejs 파일은 반드시 views라는 폴더 안에 위치해야 한다.
app.set('view engine', 'ejs');

// HTML <form> 태그에서는 GET, POST요청만 가능!
// PUT, DELETE 요청을 하고 싶다면 외부 라이브러리 설치 
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// 폴더 내 모든 정적 파일 제공(js, css, image, fonts)
app.use(express.static(__dirname))

// port : 컴퓨터에는 외부 네트워크랑 통신 할 수 있는 여러개의 구멍이 있는데,
//  그 중에 몇 번째 port로 접속할건지 지정 해줘야 한다.

// listen이라는 함수로 서버를 열어준다.
// listen(para1, para2)
// para1 : 서버를 띄울 포트 번호
// para2 : 실행 할 코드(콜백함수)
// app.listen(7000. function(){})

// 내 컴퓨터에서 7000번 포트로 진입 했을 때,
// 콜백함수 안에 있는 코드 실행
// localhost:7000(port number)로 접속
app.listen(7000, function(){
  console.log('7000번 포트')
})


// 서버에 GET 요청하기
// localhost:7000으로 접속하면 send, sendFile() 안 내용을 보여준다.
// app.get('경로', function(){})
// requests(요청), response(응답)
// slash / 는 메인 경로 == (localhost:7000)
app.get('/', function(requests, response){
  // localhost:7000로 접속시 index.html 파일 보여주기
  response.sendFile(__dirname + '/index.html');
})

// 'localhost:7000/test'로 접속시 send()안 내용을 보여준다.
app.get('/test', function(requests, response){
  response.send('Test 페이지 입니다.')
})

// localhost:7000/login 으로 접속시 보여줄 화면 => login.html
app.get('/login', function(requests, response){
  response.sendFile(__dirname + '/login.html')
})

// localhost:7000/map 으로 접속시 보여줄 화면 => map.html
// map.html : 카카오 지도 OPEN API
app.get('/map', function(requests, response){
  response.sendFile(__dirname + '/map.html')
})


// POST
// input 값을 서버에 전송하려면 input 태그에 name="" 속성 추가
// name="id", name="pw"

// app.post('경로', fucntion(){})
// input에 작성된 내용은 requests 파라미터가 가지고 있다.
// '/add'경로 => form 태그 action="/add" (add 경로로 post 요청)
// app.post('/add', function(requests, response){
//   response.send('전송완료!')
//   console.log(requests.body)
// })


// MongoDB
// 데이터 저장할 변수 하나 선언
let db;

// Database access에서 만든 아이디:비밀번호
MongoClient.connect('mongodb+srv://admin:wmfdlekt12@data.pvgodwt.mongodb.net/?retryWrites=true&w=majority', function(error, client){
  // 커넥션 에러의 99.9%가 url 오타
  if(error) {
    return console.log(error)
  }

  db = client.db('data');
  app.listen('7070', function(){
    console.log('7070번 port!')
  })
})


// form에서 /add 경로로 post 요청을 하면, 
// DB total collection에 있는 총 데이터 수(dataLength)를 찾아서 totalDataLength 라는 변수에 그 값을 저장한다.
// post collection에 새로운 데이터가 들어올 경우 _id 값을 totalDataLength에 + 1 한 값
// total collection의  totalData + 1
app.post('/add', function(requests, response){
  console.log(requests.body)
  response.send('전송 완료!')

  // DB에서 total collection 총 데이터 수 꺼내오기.
  // 데이터를 전부 찾고 싶다면 find(), 하나만 찾고 싶으면 findOne()
  // name이 totalData인 데이터를 찾아달라는 쿼리문
  db.collection('total').findOne({name : 'dataLength'}, function(error, result){
    console.log(result.totalData) // total collection있는 총 데이터 수
    let totalDataLength = result.totalData;

    db.collection('post').insertOne({_id : totalDataLength + 1 ,아이디 : requests.body.id, 비밀번호 : requests.body.pw}, function(error, result){
      console.log('db에 저장완료!')
    })
  
    // 새로운 데이터가 저장 됐을 때 total collection에 있는 totalData + 1
    // .updateOne({변경 할 데이터}, {$inc : {수정값}})
    // update operator(연산자) $set, $inc(증가) 등 여러가지 
    // {$set : {totalData : 변경 할 값}}
    // {$inc : {totalData : 기존값에 더해줄 값}}
    db.collection('total').updateOne({name : 'dataLength'}, { $inc : { totalData : 1}},function(error, result){
      if(error) {
        return console.log(error)
      }
    })
  })
})


// /add로 접속하면 GET 요청으로 DB에 저장된 데이터를 보여준다.
app.get('/add', function(requests, response){
  // post라는 collection에 저장된 데이터를 꺼낸다.
  db.collection('post').find().toArray(function(error, result){
    // result : post라는 collection에서 꺼낸 데이터가 담겨있다.
    console.log(result)
    // data.ejs파일에서 그 데이터를 log라는 이름으로 사용 하겠다.
    response.render('data.ejs', {log : result})
  })
})


app.delete('/delete', function(requests, response){
  console.log(requests.body._id)
  requests.body._id = parseInt(requests.body._id)
  
  db.collection('post').deleteOne({_id : requests.body._id}, function(error, reulst){
    if(error) {
      console.log(error)
    }
    console.log('삭제완료!!')
  })

  // 서버에서 응답코드로 요청 상태를 표시할 수 있다.
  // 2xx => 요청 성공
  // 4xx => 고객 문제로 요청 실패
  // 5xx => 서버 문제로 요청 실패

  // 서버 요청 완료시 같이 보낼 메세지 작성
  // send({message : '보낼 메세지'})
  response.status(200).send({message : '성공적'})
})


// url에 데이터가 가지고 있는 _id 값을 파라미터로 받는다.
// 각 페이지에 보여줄 내용이 다르기 때문에 내용에 따라서 경로 변경 (_id 값 사용)
// /info/1  /info/2
// url 파라미터 == 함수 파라미터
// '/info/:id' : 콜론 뒤에 아무 문자나 입력 했을 때
app.get('/info/:id', function(requests, response){
  // params.id : url 파라미터 중 id값
  // 'post' collection에서 params.id 값에 해당하는 데이터 찾아오기 (_id)
  // 데이터 찾을 때 requests.params.id String -> Int로 형변환 (parseInt)
  // 'post' collection에 _id 값이 int로 저장되어 있기 때문!
  // console.log(typeof(requests.params.id))
  db.collection('post').findOne({_id : parseInt(requests.params.id)}, function(error, result){
    console.log(result)
    response.render('info.ejs', {data : result})
  })
})


// /edit 경로로 접속시 edit.ejs 내용 보여주기
// /edit/:id
// DB post' collection에서 params.id로 받은 값이랑 동일한 _id 데이터를 찾는다. 
// edit.ejs input(id,pw) value 값으로 바인딩한다.
app.get('/edit/:id', function(requests, response){
  db.collection('post').findOne({_id : parseInt(requests.params.id)}, function(error, result){
    // DB에서 찾아온 params.id에 해당하는 데이터 값은 result에
    console.log(result)
    // edit.ejs파일에서 data라는 이름으로 그 결과값을 사용할 수 있도록 한다.
    response.render('edit.ejs', {data : result})
  })
})


app.put('/edit', function(requests, response){
  // $set과 $inc 차이

  // edit.ejs 파일에서 사용자에게 보이지 않게 input 하나 생성
  // 데이터 _id 값을 value 값으로 받는다. *edit.ejs 65번 참고
  // edit.ejs 파일 input(id, pw)에 변경된 값으로 db post collection 값 변경
  db.collection('post').updateOne({_id : parseInt(requests.body._id)}, {$set : {아이디 : requests.body.id, 비밀번호 : requests.body.pw}}, function(error, result){
    console.log('수정 완료!')
    // 해당 요청이 완료되면 /add라는 경로로 리디렉션 =>  /add. 라는 url 경로로 다시 이동 
    response.redirect('/add')
  })
})


// 0. 서버란?
// 서버 : 요청한 정보를 보내주는 프로그램

// HTTP 요청 방식 네가지
// 1. GET(읽기)
// 2. POST(쓰기)
// 3. PUT(수정)
// 4. DELETE(삭제)

// Node.js : Javascript runtime
// Javascript는 프로그래밍적 연산을 하기 위한 언어가 아니고, HTML을 조작하기 위해 만들어진 언어다.
// Javascript는 브라우저가 해석한다. (크롬, 사파리, 엣지, 파이어폭스 등) => 그래서 별도의 설치없이 이용 가능!
// 크롬 브라우저 V8 엔진에서 브라우저 환경 외에 다른 환경에서도 Javascript를 사용할 수 있도록 Node.js를 만들었다.

// Node.js 장단점
// 장점 : 가벼운 요청부터 먼저 처리
// 단점 : 이미지, 동영상, 연산 처리가 필요한 서비스를 개발해야 될 경우 속도가 떨어지고, 라이브러리도 부족하다. 
// 이에 최적화된 언어 = python(빅데이터 분석, 데이터 시각화 등)


// 1. Node.js express 서버 구축하는 방법
// Express 라이브러리로 서버 구축
// 폴더 생성 -> cd로 해당 폴더로 경로 이동
// cd 폴더명
// cd(Change Directory), cd .., ls

// npm init => package.json 파일 생성된다.
// npm init 후 쭉 엔터 entry point 부분에 작성된 파일명과 
// package.json 파일에 작성된 "main": "index.js", 파일명이 동일해야 한다.
// 다른 이름으로 파일 생성 했을 경우, package.josn 에서 파일명 수정!

// npm install express  => node_modules 생성된다.
// npm : 라이브러리를 설치하기 위한 도구
// npm은 Node.js를 설치하면 자동으로 같이 설치되기 때문에 별도의 설치 필요 X
// node_modules : 라이브러리 사용할 때 필요한 것들이 담긴 폴더


// 서버 종료 => ctrl + c

// 서버 재실행 자동화 (nodemon)
// -g(global)로 컴퓨터 전역에서 이용 가능하도록 설치
// npm install -g nodemon

// 서버 실행
// nodemon index.js

// *** powershell 보안 에러
// 에러 원인 : Restricted일 때 허가된 script외에 막아버리기 때문에 에러가 발생한다.

// 검색 -> powershell(관리자 권한으로 실행)
// executionpolicy 
// set-executionpolicy unrestricted => enter
// y => enter

// 서버한테 정보를 보내주는 코드
// 서버에 보낸 정보를 영구 저장 하려면 DB(Data Base)에 저장


// url 이름짓기
// 1. URL 명사로 작성 추천 '/명사'
// 2. 하위 문서를 나타낼 때 / slash (하위폴더 나누듯이 사용)
// 3. 파일 확장자 사용 X (.html, .css 등)
// 4. 띄어쓰기 대신 (-) 사용
// 5. 자료 하나당 하나의 URL 사용
// 6. URL을 봤을 때 어떤 페이지인지 알 수 있어야 한다.


// 서버에 GET, POST, PUT, DELETE 요청하는 방법
// CRUD (Create(생성), Read(읽기), Update(수정), Delete(삭제))
// insert, find, update, delete 
// insertOne, findOne, updateOne, deleteOne


// Login 기능 구현
// 1. views 폴더 안 join.ejs 파일 생성 
// 2. 회원가입 폼 작성 
// 3. db.collection('login')에 join.ejs 파일에 있는 input value값 저장 
app.get('/join', function(requests, response){
  response.render('join.ejs')
})