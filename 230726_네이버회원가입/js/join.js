document.querySelectorAll('input').forEach(function(input){
  input.addEventListener('focus', function(){
    this.parentNode.classList.add('border-act');
  })
})

document.querySelectorAll('input').forEach(function(input){
  input.addEventListener('focusout', function(){
    this.parentNode.classList.remove('border-act');
  })
})


let idveri = pwveri = pwchkveri = nameveri = bitrhveri = genderveri = phoneveri = addressveri = false;
let mailveri = true;
// Essential Infomation
let essenInfo = '<span class="text-red">필수 정보입니다.</span>'; 


// 아이디
document.querySelector('.userid input').addEventListener('focusout', function(){
  let userId = this.value;
  let idExp= /^[a-z0-9]{5,8}$/;
  let idWarn = document.querySelector('.userid .warn');

  if(userId.length == 0) {
    idWarn.innerHTML = essenInfo;
  } else if(!idExp.test(userId)) {
    // 정규식에 맞지 않을 때 = 조건이 참
    idWarn.innerHTML = '<span class="text-red">5~8자의 영문 소문자만 사용 가능</span>';
  } else {
    // 위 조건에 둘 다 해당하지 않고 값을 잘 입력 했을 때
    idveri = true;
    idWarn.innerHTML = '<span class="text-green">멋진 아이디네여!</span>';
  }
})

let userPw = document.querySelector('.userpw input');

// 비밀번호
userPw.addEventListener('focusout', function(){
  let userPwVal = userPw.value;
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;

  let pwWarn = document.querySelector('.userpw .warn');
  let pwText = document.querySelector('.userpw .inputbox p');
  let pwImg = document.querySelector('.userpw .inputbox img');

  if(userPwVal.length == 0) {
    pwWarn.innerHTML = essenInfo;
    // pwText 내용 비우기
    pwText.innerHTML = '';
    pwImg.src = './images/m_icon_pw_step_01.png';
  } else if(!pwExp.test(userPwVal)) {
    pwWarn.innerHTML = '<span class="text-red">8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>';
    pwText.innerHTML = '<span class="text-red">사용불가</span>';
    pwImg.src = './images/m_icon_pw_step_10.png';
  } else {
    pwveri = true;
    pwWarn.innerHTML = '';
    pwText.innerHTML = '<span class="text-green">안전</span>';
    pwImg.src = './images/m_icon_pw_step_04.png';
  }
})


// 비밀번호 재확인
document.querySelector('.userpw-chk input').addEventListener('focusout', function(){
  let userpwChk = this.value;
  let pwChkWarn = document.querySelector('.userpw-chk .warn');
  let pwChkImg = document.querySelector('.userpw-chk .inputbox img');

  if(userpwChk.length == 0) {
    pwChkWarn.innerHTML = essenInfo;
  } else if(userpwChk == userPw.value) {
    pwchkveri = true;
    pwChkWarn.innerHTML = '';
    pwChkImg.src = './images/m_icon_pw_step_07.png';
  } else {
    // 입력은 했는데 .userpw value랑 일치하지 않을 때
    pwChkWarn.innerHTML = '<span class="text-red">비밀번호가 일치하지 않습니다.</span>'
    pwChkImg.src = './images/m_icon_pw_step_02.png';
  }
})


// 이름
document.querySelector('.username input').addEventListener('focusout', function(){
  let userName = this.value;
  let nameExp = /^[가-힣]{2,5}$/;
  let nameWarn = document.querySelector('.username .warn');

  if(userName.length == 0) {
    nameWarn.innerHTML = essenInfo;
  } else if(!nameExp.test(userName)) {
    nameWarn.innerHTML = '<span class="text-red">2~5글자 사이의 한글로 입력하세요.</span>'
  } else {
    nameveri = true;
    nameWarn.innerHTML = '';
  }
})

