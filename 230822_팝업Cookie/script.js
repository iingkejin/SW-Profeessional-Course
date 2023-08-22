// Cookie
// 1. 클라이언트 - cookie
// 2. 서버 - cookie, section
// 둘 다 텍스트 형태 문자로 저장

// 쿠키를 저장하도록 허용 하냐 / 마냐 => 정보가 서버에 저장
// 사용자가 해당 사이트에서 어떤 행동을 했는지 
// Cookie : 일정 기간동안 데이터 값을 브라우저가 내부에 값을 저장한 것
// 쿠키가 저장되는 방식 name(이름) = value(값) 방식으로 저장

// 개발자 도구 -> Application -> Cookies(쿠키)

// 만료기간을 넣어서 
// 쿠키가 자동 만료 되도록 코드를 작성(UTC)
// setCookie, getCookie 두가지 함수 생성
// 1. setCookie : 쿠키값을 설정하는 함수
// 2. getCookie : 쿠키값을 가져오는 함수

// localstorage라는 이용해서 구현 할 수도 있다.