// Cookie
// 1. 클라이언트 - cookie
// 2. 서버 - cookie, section
// 둘 다 텍스트 형태 문자로 저장

// 쿠키를 저장하도록 허용하냐 => 정보가 서버에 저장
// 사용자가 해당 사이트에서 어떤 행동을 했는지 
// Cookie : 일정 기간동안 데이터 값을 브라우저가 내부에 값을 저장한 것
// 쿠키가 저장되는 방식 name(이름) = value(값) 방식

// 개발자 도구 -> Application -> Cookies(쿠키)

// 만료기간을 넣어서 쿠키가 자동 만료 되도록 코드 작성(UTC)
// setCookie, getCookie 두가지 함수 생성
// 1. setCookie : 쿠키값을 설정하는 함수
// 2. getCookie : 쿠키값을 가져오는 함수
// setCookie와 getCookie를 구현하고, 문서가 로드 됐을 때
// 필요한 함수가 실행되게 한다.

// localstorage라는 이용해서 구현 할 수도 있다.

function setCookie(name, value, hours){
  // 빈 문자열로 변수 초기화 => 쿠키 만료 시간 담을 변수
  let expires = '';

  // 만약에 hours라는 값이 있다면(true)
  if(hours) {
    // date라는 변수 안에 현재 시간을 가지는 Date 객체를 생성
    let date = new Date();

    // date 값을 현재 시간 + hours(ms) 더한 값으로 set 한다.
    // 쿠키 만료 시간이 hours 더한 시간만큼 뒤로 설정

    // 시간을 밀리초(ms)로 변환
    // hour(시간) * 60(분) * 60(초) * 1000(밀리초)
    // Javascript에서 시간을 다룰 때 일반적으로 밀리초(ms)로 계산한다.
    // Date 객체가 밀리초(ms) 단위로 시간을 나타내기 때문
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000))

    // ; (세미콜론)
    // 쿠키 설정은 문자열 네임과 벨류로 구성되는데,
    // 각각 네임과 값을 세미콜론으로 구분한다.
    // toUTCString() : Date 객체의 시간 => UTC 형태의 문자열로 변환
    // 쿠키 만료시간을 표준화된 방식으로 변환
    expires = '; expires' + date.toUTCString();
  }

  // '; path=/경로' : 쿠키가 어떤 경로에서 유효하게 할건지 경로 설정
  // 경로를 설정할 때 /(slash)만 사용하면 현재 도메인의 모든 경로에서 쿠키가 유효하다
  // /shopping 으로 작성 할 경우 해당 경로에서만 쿠키 유효
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

// 특정 이름의 쿠기 값을 가져오는 함수
function getCookie(name){
  // name Equal
  // 쿠키의 이름 = 값 사이에 Equal(=) 들어간다.
  // name = value
  // 쿠키이름 = 쿠키의 이름과 일치하는 문자열인지 확인
  let nameEqu = name + '=';

  // 쿠키의 네임과 벨류값은 세미콜론 구분된다.
  // 현재 페이지의 쿠키 문자열을 ;(세미콜론)을 기준으로 
  // 값을 쪼개서 배열로 만들어준다.
  let cookies = document.cookie.split(';');

  // cookies 라는 배열을 순회하면서 쿠키값을 찾는다.
  for(let i = 0; i < cookies.length; i++) {
    // 현재 순회중인 쿠키 문자열을 cookie 변수 담는다.
    let cookie = cookies[i];

    // 쿠키 문자열에서 특정 이름과 일치하는 쿠키 값이 있는지 확인
    // indexOf : 문자열 내에서 특정 문자열을 찾는 method
    // nameEqu 변수가 쿠키 문자열의 0번째 위치에서 시작되는지를 확인 => True
    // substring() : 문자열의 시작 index와 마지막 index를 지정해서 
    // 해당 범위 내의 문자들을 추출
    if(cookie.indexOf(nameEqu) == 0) {
      return cookie.substring(nameEqu.length , cookie.length);
    }
  }
  // 일치하는 쿠키를 찾지 못했을 때, null 값을 반환해서
  // 쿠키가 존재하지 않다는 것을 나타낸다.
  return null;
}


// 문서가 로드될 때 실행될 함수 설정
document.addEventListener('DOMContentLoaded', function(){
  let popup = document.querySelector('.popup');
  let nonePopup = document.getElementById('none-popup');
  let closeBtn = document.getElementById('close-btn');
  
  // getCookie에서 hidePopup이라는 값을 가져왔을 때 null이 아니라면
  if(getCookie("hidePopup")) {
    popup.style.display = 'none';
  }

  closeBtn.addEventListener('click', function(){
    popup.style.display = 'none';

    // 체크박스에 checked 속성이 있다면
    // setCookie 함수에 name, value, hours
    // 매개변수 값을 전달해서 hours 시간 동안 팝업이 보이지 않게 한다.
    
    // closeBtn 클릭 했을 때 nonePopup에 checked 속성이 있다면 setCookie라는 함수에 name, value, hours 라는
    // 매개변수 값 세 개를 넘겨준다.
    if(nonePopup.checked) {
      setCookie("hidePopup", "true", 24); // 쿠키를 24시간 동안 유지
    }
  })
})