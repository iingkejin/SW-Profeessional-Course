// input에 focusin 되면 부모 .inputbox에 border-act class add
$('input').focusin(function(){
  $(this).parent('.inputbox').addClass('border-act');
})

// input에 focusout되면 부모 .inputbox border-act class remove
$('input').focusout(function(){
  $(this).parent('.inputbox').removeClass('border-act');
})

// 필수항목인 모든 변수에 false 값 할당 후
// 각 해당조건을 충족 했을 때 true값으로 변경
// 마지막에 필수항목 변수가 모두 true라면 submit
// 아니라면 제출 이벤트를 막는다.
let idveri = pwveri = pwchkveri = nameveri = bitrhveri = genderveri = phoneveri = addressveri = false;
// 메일은 필수가 아니라 선택사항 이므로 true
let mailveri = true;


// 아이디
// .userid input에 focusout 됐을 때 
// input value 값이 길이(length)가 0이라면(조건)
// .userid warn에 text-red class '필수 정보입니다.'

// else if(!정규식.test(userID)) 
// .userid warn에 text-red class '5~8자의 영문 소문자, 숫자만 사용 가능합니다.'

// else (0이 아니고, 정규식에 맞게 작성 했을 때)
// idveri = true;
// .userid warn에 text-green class '멋진 아이디네요!'
$('.userid input').focusout(function(){
  let userId = $(this).val();
  // 최소 5글자 ~ 최대 8글자 사이 영문 소문자 + 숫자 포함
  let idExp= /^[a-z0-9]{5,8}$/

  if(userId.length == 0) {
    $('.userid .warn').html('<span class="text-red">필수정보 입니다.</span>')
  } else if(!idExp.test(userId)) {
    $('.userid .warn').html('<span class="text-red">5~8자의 영문 소문자, 숫자만 사용 가능합니다.</span>')
  } else {
    idveri = true;
    $('.userid .warn').html('<span class="text-green">멋진 아이디네요!</span>')
  }
})


// 비밀번호
// .userpw input에 focusout 됐을 때 
// input value 값이 길이(length)가 0이라면(조건)
// .userpw warn에 text-red class '필수 정보입니다.'

// else if (!정규식.test(userPw))
// .userpw warn에 text-red class '8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'
// .userpw .inputbox p에 text-red class '사용불가' (.inputbox 우측 텍스트)
// .userpw .inputbox img attr src 변경 - 10

// else (0이 아니고, 정규식에 맞게 작성 했을 때)
// pwveri = true;
// .userpw .inputbox p에 text-green class '안전' (.inputbox 우측 텍스트)
// .userpw .inputbox img attr src 변경 - 04
$('.userpw input').focusout(function(){
  let userPw = $(this).val();
  // 8~20자 사이 영문 대소문자, 숫자, 특수문자 포함
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/

  if(userPw.length == 0) {
    $('.userpw .warn').html('<span class="text-red">필수정보 입니다.</span>');
    $('.userpw .inputbox span').empty();
    $('.userpw .inputbox img').attr('src', './images/m_icon_pw_step_01.png');
  } else if(!pwExp.test(userPw)) {
    $('.userpw .warn').html('<span class="text-red">8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>')
    $('.userpw .inputbox p').html('<span class="text-red">사용불가</span>');
    $('.userpw .inputbox img').attr('src', './images/m_icon_pw_step_10.png');
  } else {
    pwveri = true;
    $('.userpw .warn').empty();
    $('.userpw .inputbox p').html('<span class="text-green">안전</span>');
    $('.userpw .inputbox img').attr('src', './images/m_icon_pw_step_04.png')
  }
})


// 비밀번호 재확인
// .userpw-chk input에 focusout 됐을 때 입력된 값이 0이라면(조건)
// .userpw-chk .warn에 빨간색 글자로 필수 정보 입니다. (실행문1)
// 우측 아이콘 이미지를 원래대로 변경 (실행문2)

// .userpw input값이랑 .userpw-chk input이 같은가? (조건2)
// pwchkveri에 true
// .warn에 뜨는 경고메세지 화면에서 사라지게 한다.
// 우측 아이콘 이미지를 바꿔준다.

// 그렇지 않다면 else (0이 아니고, 일치하지 않을 때)
// .userpw-chk .warn에 비밀번호가 일치하지 않습니다. (text-red)
// 우측 아이콘 이미지를 원래대로 변경(02)
$('.userpw-chk input').focusout(function(){
  let userPwChk = $(this).val();

  if(userPwChk.length == 0) {
    $('.userpw-chk .warn').html('<span class="text-red">필수 정보 입니다.</span>');
    $('.userpw-chk .inputbox img').attr('src', './images/m_icon_pw_step_02.png');
  } else if(userPwChk == $('.userpw input').val()) {
    pwchkveri = true;
    $('.userpw-chk .warn').empty();
    $('.userpw-chk .inputbox img').attr('src', './images/m_icon_pw_step_07.png');
  } else {
    $('.userpw-chk .warn').html('<span class="text-red">비밀번호가 일치하지 않습니다.</span>');
    $('.userpw-chk .inputbox img').attr('src', './images/m_icon_pw_step_02.png');
  }
})


// 이름
// .username input에 focusout 됐을 때
// input value 값이 0이라면(조건)
// .warn에 text-red class '필수 정보 입니다.'
// else if (정규식.test())
// .warn에 text-red class '2~5글자 사이의 한글로 입력하세요.'
// else (0이 아니고, 정규식에 맞게 잘 입력 했을 때)
// nameveri = true;
// .warn에 들어있는 경고메세지를 비운다. empty() 
$('.username input').focusout(function(){
  let userName = $('.username input').val();
  let nameExp = /^[가-힣]{2,5}$/;

  if(userName.length == 0) {
    $('.username .warn').html('<span class="text-red">필수 정보입니다.</span>');
  } else if(!nameExp.test(userName)) {
    $('.username .warn').html('<span class="text-red">2~5글자 사이의 한글로 입력하세요.</span>');
  } else {
    nameveri = true;
    $('.username .warn').empty();
  }
})


// 생년월일
// #year, #month, #date에 focusout 됐을 때
// #year의 value length가 4글자 아니라면(조건1)
// .birth .warn에 text-red class 
// '태어난 년도 4자리를 정확하게 입력하세요.'

// #month의 length가 0이라면 (조건2)
// .birth .warn text-red class 
// '태어난 월을 선택하세요.'

// #date의 length가 0이라면 (조건3)
// .birth .warn text-red class 
// '태어난 일(날짜) 2자리를 정확하게 입력하세요.'

// 년,월,일 값이 숫자가 아니라면 (조건4)
// .birth .warn text-red class 
// '생년월일을 다시 확인해주세요.'

// 올 해 기준으로 나이가 100 초과라면 (조건5)
// .birth .warn text-red class 
// '정말이세요?'
$('#year, #month, #date').focusout(function(){
  let year = $('#year').val();
  let month = $('#month').val();
  let date = $('#date').val();

  // 한국 날짜 및 시간 (한국 표준시)
  let now = new Date();
  // Date 객체의 getTime() 메서드는
  // 1970년 1월 1일 00시 00분 00초 (UTC) 
  // 세계표준시를 기준으로 경과한 밀리초를 반환한다. 
  let nowStamp = now.getTime();
  // 현재 날짜 및 시간에서 현재 연도의 네자리 값을 변수에 할당
  now = now.getFullYear();

  // 사용자가 입력한 year, month, date 값으로 Date 객체 생성
  let birth = new Date(year, month, date);
  birth = birth.getTime();

  if(year.length != 4) {
    $('.birth .warn').html('<span class="text-red">태어난 년도 4자리를 정확하게 입력하세요.</span>');
  } else if(month.length == 0) {
    $('.birth .warn').html('<span class="text-red">태어난 월을 선택하세요.</span>');
  } else if(date.length == 0 || date > 31 || date <= 0) {
    $('.birth .warn').html('<span class="text-red">태어난 일(날짜) 2자리를 정확하게 입력하세요.</span>');
  } else if(isNaN(year * month * date)) {
    // is Not a Number
    $('.birth .warn').html('<span class="text-red">생년월일을 다시 확인 해주세요.</span>');
  } else if(now - year > 100) {
    $('.birth .warn').html('<span class="text-red">정말이세요?</span>');
  } else if(nowStamp < birth) {
    $('.birth .warn').html('<span class="text-red">미래에서 오셨군요.^^</span>');
  } else {
    bitrhveri = true;
    $('.birth .warn').empty();
  }
})


// 성별
// .gender .inputbox를 클릭 했을 때
// .gender 모든 .inputbox에 .btn-primary class remove
// .gender .inputbox안 모든 input radio에 checked false
// 클릭된 자신에게만 .btn-primary class add
// 클릭된 자신에게만 input radio에 checked true
// genderveri = true;
$('.gender .inputbox').on('click', function(){
  $('.gender .inputbox').removeClass('btn-primary');
  // prop => jQuery에서 radio 버튼을 제어할 때 사용
  $('.gender .inputbox input[type="radio"]').prop('checked', false);
  $(this).addClass('btn-primary');
  $(this).children('input[type="radio"]').prop('checked', true);
  genderveri = true;
})



