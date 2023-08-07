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


