// 모든 input 태그에 focusin 되면 
// 부모인 .inputbox에 border-act class add
$('input').focusin(function(){
  $(this).parent('.inputbox').addClass('border-act');
})

// 모든 input 태그에 focusout되면 
// 부모인 .inputbox border-act class remove
$('input').focusout(function(){
  $(this).parent('.inputbox').removeClass('border-act');
})

// 필수항목인 모든 변수에 false 값 할당 후
// 각 해당 조건을 충족 했을 때 true값으로 변경한다.
// 마지막에 필수항목에 해당하는 변수가 모두 true라면 submit
// 아니라면 제출되지 못하게 막는다.
// Javascript(폴더) ->  230719_복합연산자.html 파일 참고
let idveri = pwveri = pwchkveri = nameveri = bitrhveri = genderveri = phoneveri = addressveri = false;
// 메일은 필수가 아니라 선택사항 이므로 true
let mailveri = true;


// 아이디
// .userid input에 focusout 됐을 때 
// input value 값이 길이(length)가 0이라면(조건)
// .userid .warn에 text-red class '필수 정보입니다.'

// else if(!정규식.test(userID)) 
// .userid .warn에 text-red class 
// '5~8자의 영문 소문자, 숫자만 사용 가능합니다.'

// else (위 두 조건에 해당하지 않을 때) 0이 아니고 정규식에 맞게 잘 작성
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
// input value 값 길이(length)가 0이라면(조건)
// .userpw warn에 text-red class '필수 정보입니다.'

// else if (!정규식.test(userPw))
// .userpw warn에 text-red class 
// '8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'
// .userpw .inputbox p에 text-red class '사용불가' (.inputbox 우측 텍스트)
// .userpw .inputbox img attr src 변경 / img - 10

// else (0이 아니고, 정규식에 맞게 작성 했을 때)
// pwveri = true;
// .userpw .inputbox p에 text-green class '안전' (.inputbox 우측 텍스트)
// .userpw .inputbox img attr src 변경 / img - 04
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
// .userpw-chk input에 focusout 됐을 때 
// 입력된 값이 0이라면(조건)
// .userpw-chk .warn에 text-red class '필수 정보 입니다.' 
// 우측 아이콘 이미지를 원래대로 변경 / img - 02 

// .userpw-chk input.val(), .userpw input.val() 두 값이 같은가? (조건2)
// pwchkveri = true
// .userpw-chk .warn에 들어있는 경고 메세지를 empty()로 비운다. 
// 우측 아이콘 이미지를 바꿔준다. / img - 07

// 그렇지 않다면 else (위 두 조건에 해당하지 않을 때) 0이 아니고 두 값이 일치하지 않을 때
// .userpw-chk .warn에 text-red class 
// '비밀번호가 일치하지 않습니다.' 
// 우측 아이콘 이미지를 원래대로 변경 / img - 02
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
// .username input value length가 0이라면(조건)
// .username .warn에 text-red class 
// '필수 정보 입니다.'

// else if (정규식.test())
// .username .warn에 text-red class 
// '2~5글자 사이의 한글로 입력하세요.'

// else (0이 아니고, 정규식에 맞게 잘 입력 했을 때)
// nameveri = true;
// .username .warn에 들어있는 경고 메세지를 empty()로 비운다. 
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
// #year.val()의 length가 4글자가 아니라면(조건1)
// .birth .warn에 text-red class 
// '태어난 년도 4자리를 정확하게 입력하세요.'

// #month.val()의 length가 0이라면 (조건2)
// .birth .warn text-red class 
// '태어난 월을 선택하세요.'

// #date.val()의 length가 0이라면 || #date.val이 31보다 크다 || #date.val이 0보다 작거나 같다 (조건3)
// .birth .warn text-red class 
// '태어난 일(날짜) 2자리를 정확하게 입력하세요.'

// 년,월,일 값이 숫자가 아니라면 isNaN(is Not a Number) (조건4)
// .birth .warn text-red class 
// '생년월일을 다시 확인해주세요.'

// 올 해 기준으로 나이가 100 초과라면 (조건5)
// 2023(now) - 1988(year - 사용자가 입력한 년도 네자리) = 35
// now - year > 100
// .birth .warn text-red class 
// '정말이세요?'

// UTC를 기준으로 now와 birth를 비교했을 때 birth 값이 더 클 경우
// now = UTC 기준으로 부터 now까지 경과한 값
// birth = UTC 기준으로 부터 birth까지 경과한 값

// else (위 조건들에 모두 해당하지 않는다면)
// bitrhveri = true;
// .birth .warn에 들어있는 경고 메세지를 empty()로 비운다. 
$('#year, #month, #date').focusout(function(){
  let year = $('#year').val();
  let month = $('#month').val();
  let date = $('#date').val();

  // 한국 날짜 및 시간 (한국 표준시)
  let now = new Date();
  // Date 객체의 getTime() 메서드는 1970년 1월 1일 00시 00분 00초  
  // 세계표준시(UTC)를 기준으로 경과한 밀리초 값을 반환한다. 
  let nowStamp = now.getTime();
  // 현재 날짜 및 시간에서 현재 연도 네자리 값을 변수에 할당
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
// 우선 모두 제거 후 클릭된 대상에게만 class 및 속성 추가

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


// 본인 확인 이메일
// .usermail input에 focusout 됐을 때
// 필수사항이 아니라 선택사항 이니까 기본적으로 mailveri = true;
// 사용자가 값을 입력하지 않았을 경우 mailveri = true 유지

// 값을 입력 했는데 정규식에 맞지 않게 입력했다면 => mailveri = false 
// .usermail .warn text-red class
// '이메일 주소를 다시 확인해주세요.'

// else (위 두 조건에 다 해당하지 않을 경우)
// .usermail .warn에 들어있는 경고 메세지를 empty()로 비운다.
$('.usermail input').focusout(function(){
  let mail = $(this).val();
  // 대소문자, 숫자로 시작 가능 @ 다음에 naver.com 까지 나와야함
  let mailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if(mail.length == 0) {
    $('.usermail .warn').empty();
  } else if(!mailExp.test(mail)) {
    mailveri = false;
    $('.usermail .warn').html('<span class="text-red">이메일 주소를 다시 확인 해주세요.</span>')
  } else {
    $('.usermail .warn').empty();
  }
})



// 휴대전화
// .phonenum input에서 focusout 됐을 때
// .phonenum input value length가 0이라면(조건)
// .phonenum .warn에 text-red class '필수 정보입니다.
$('.phonenum input').focusout(function(){
  if($(this).val().length == 0) {
    $('.phone .warn').html('<span class="text-red">필수 정보입니다.</span>');
  } else {
    $('.phone .warn').empty();
  }
}) 

// #veribtn(인증번호 받기)를 클릭 했을 때
// .phonenum input value에 숫자가 아닌 모든 문자를 제거하고,
// 제거한 값을 변수에 담아서 input에 다시 넣어준다.
$('#veribtn').on('click', function(){
  let phoneVal = $('.phonenum input').val();
  phoneVal = phoneVal.replace(/[^0-9]/g, '');
  $('.phonenum input').val(phoneVal);

  // .phonenum input value length가 10~11 자리가 아니라면(조건1)
  // .phonenum input value 값이 숫자가 아닌 경우(조건2)
  // 변수 두 개 선언 후 1,2번 조건을 모두 충족할 때만 값을 true로 준다.
  // 10~11자리가 맞을 때 / 값이 숫자일 경우
  let phoneLeng;
  if(phoneVal.length < 10 || phoneVal.length > 11) {
    phoneLeng = false;
  } else {
    phoneLeng = true;
  }

  let phoneNum;
  if(isNaN(phoneVal)) {
    phoneNum = false;
  } else {
    phoneNum = true;
  }

  // phoneLeng, phoneNum 모두 true일 경우(조건)
  // .phone .warn에 text-green class '인증번호를 발송했습니다~~~';
  // #veritext에 disabled false
  // .inputbox에 .disinput class remove

  // else 
  // .phone .warn에 text-red class '형식에 맞지 않는 번호입니다.'
  // #veritext에 disabled true
    // .inputbox에 .disinput class add
  if(phoneLeng && phoneNum) {
    $('.phone .warn').html('<span class="text-green">인증번호를 발송했습니다.(유효시간 30분)<br>인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요. 이미 가입된 번호거나, 가상전화번호는 인증번호를 받을 수 없습니다.</span>');
    $('#veritext').attr('disabled', false);
    $('#veritext').parent('.inputbox').removeClass('disinput');
  } else {
    $('.phone .warn').html('<span class="text-red">형식에 맞지 않는 번호입니다.</span>')
    $('#veritext').attr('disabled', true);
    $('#veritext').parent('.inputbox').addClass('disinput');
  }
})




// 두 조건이 모두 true일 때
// 인증번호 입력칸을 활성화 시킨다.



