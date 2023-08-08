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


// 생년월일
let birthList = document.querySelectorAll('.birth-item');

function birthWarnTxt (text){
  document.querySelector('.birth .warn').innerHTML = `<span class="text-red">${text}</span>`;

}


birthList.forEach(function(item){
  item.addEventListener('focusout', function(){
    let year = birthList[0].value;
    let month = birthList[1].value;
    let date = birthList[2].value;

    let now = new Date();
    let nowStamp = now.getTime(); 
    now = now.getFullYear();

    let birth = new Date(year, month, date);
    birth = birth.getTime();

    if(year.length != 4) {
      birthWarnTxt('태어난 년도 4자리를 정확하게 입력하세요.');
    } else if(month.length == 0) {
      birthWarnTxt('태어난 월을 선택하세요.');
    } else if(date.length == 0 || date > 31 || date <= 0) {
      birthWarnTxt('태어난 일(날짜) 2자리를 정확하게 입력하세요.');
    } else if(isNaN(year * month * date)) {
      birthWarnTxt('생년월일을 다시 확인 해주세요.');
    } else if(now - year > 100) {
      birthWarnTxt('정말이세요?');
    } else if(nowStamp < birth) {
      birthWarnTxt('미래에서 오셨군요^^');
    } else {
      bitrhveri = true;
      birthWarnTxt('');
    }
  })
})


// 성별
let genderInputs = document.querySelectorAll('.gender .inputbox');


genderInputs.forEach(function(input){
  input.addEventListener('click',function(){
    genderInputs.forEach(function(item){
      item.classList.remove('btn-primary');
      item.querySelector('input[type="radio"]').checked = false;
    })

    genderveri = true;
    this.classList.add('btn-primary');
    this.querySelector('input[type="radio"]').checked = true;
  })
})


// 본인 확인 이메일
document.querySelector('.usermail input').addEventListener('focusout', function(){
  let userMail = this.value;
  let mailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  let mailWarn = document.querySelector('.usermail .warn');

  if(userMail.length == 0) {
    mailWarn.innerHTML = '';
  } else if(!mailExp.test(userMail)) {
    mailWarn.innerHTML = '<span class="text-red">이메일 주소를 다시 확인해주세요.</span>';
  } else {
    mailWarn.innerHTML = '';
  }
})


// 휴대전화
let numWarn = document.querySelector('.phone .warn');
let veriText = document.getElementById('veritext');

document.querySelector('.phonenum input').addEventListener('focusout', function(){
  let phoneNum = this.value;

  if(phoneNum.length == 0) {
    numWarn.innerHTML = essenInfo;
  } else {
    numWarn.innerHTML = '';
  }
})

document.getElementById('veribtn').addEventListener('click', function(){
  let phoneNum = document.querySelector('.phonenum input').value;
  phoneNum = phoneNum.replace(/[^0-9]/g, '');
  document.querySelector('.phonenum input').value = phoneNum;

  let phoneLeng;
  if(phoneNum.length < 10 || phoneNum.length > 11) {
    phoneLeng = false;
  } else {
    phoneLeng = true;
  }

  let phoneNaN;
  if(isNaN(phoneNum)) {
    phoneNaN = false;
  } else {
    phoneNaN = true;
  }

  if(phoneLeng && phoneNaN) {
    numWarn.innerHTML = '<span class="text-green">인증번호가 발송되었습니다.</span>';
    veriText.parentNode.classList.remove('disinput');
    veriText.disabled = false;
  } else {
    numWarn.innerHTML = '<span class="text-red">형식에 맞지 않는 번호입니다.</span>'
    veriText.parentNode.classList.add('disinput');
    veriText.disabled = true;
  }
})


veriText.addEventListener('focusout', function(){
  if(this.value == '1234') {
    phoneveri = true;
    numWarn.innerHTML = '<span class="text-green">인증 되었습니다.</span>';
    this.nextElementSibling.innerHTML = '';
    this.parentNode.classList.remove('border-red');
  } else {
    numWarn.innerHTML = '<span class="text-red">인증번호를 다시 확인해주세요.</span>';
    this.nextElementSibling.innerHTML = '<span class="text-red">불일치</span><span class="disagree"></span>'
    this.parentNode.classList.add('border-red');
  }
})



// 주소
function sample6_execDaumPostcode() {
  addressveri = true;
  new daum.Postcode({
      oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var addr = ''; // 주소 변수
          var extraAddr = ''; // 참고항목 변수

          //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
              addr = data.roadAddress;
          } else { // 사용자가 지번 주소를 선택했을 경우(J)
              addr = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if(data.userSelectedType === 'R'){
              // 법정동명이 있을 경우 추가한다. (법정리는 제외)
              // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
              if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                  extraAddr += data.bname;
              }
              // 건물명이 있고, 공동주택일 경우 추가한다.
              if(data.buildingName !== '' && data.apartment === 'Y'){
                  extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
              }
              // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
              if(extraAddr !== ''){
                  extraAddr = ' (' + extraAddr + ')';
              }
              // 조합된 참고항목을 해당 필드에 넣는다.
              document.getElementById("sample6_extraAddress").value = extraAddr;
          
          } else {
              document.getElementById("sample6_extraAddress").value = '';
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById('sample6_postcode').value = data.zonecode;
          document.getElementById("sample6_address").value = addr;
          // 커서를 상세주소 필드로 이동한다.
          document.getElementById("sample6_detailAddress").focus();
      }
  }).open();
}
