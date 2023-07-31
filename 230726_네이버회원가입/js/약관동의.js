// 각 label 클릭시
// 클릭된 label 안 .checkbox-img에 checked class toggle
// 클릭된 label 안 input checkbox에 checked 속성 true / false
let labels = document.querySelectorAll('label');
let totalLabel = document.querySelector('.total label');
let agreeAll = document.querySelectorAll('.agree');


labels.forEach(function(label){
  label.addEventListener('click', function(e){
    e.preventDefault();
    this.querySelector('.checkbox-img').classList.toggle('checked');

    let inputCheck = this.querySelector('input[type="checkbox"]')
    // JS에서 특정 class를 포함하고 있는지 확인하는 함수 classList.contains() 
    // .checked class를 통해 체크 유무를 확인할 수 있다.
    // 이미지가 체크되어 있다면, checked 속성 true / false
    if(this.querySelector('.checkbox-img').classList.contains('checked')) {
      inputCheck.checked = true;
    } else {
      inputCheck.checked = false;
    }
  })
})


// .total label 클릭시
// .agree 안에 있는 모든 .checkbox-img에 checked class add / remove
// .agree 안에 있는 모든 input checkbox에 checked 속성 true / false
agreeAll.forEach(function(agree){
  totalLabel.addEventListener('click', function(){
    if(this.querySelector('.checkbox-img').classList.contains('checked')) {
      agree.querySelector('.checkbox-img').classList.add('checked');
      agree.querySelector('input[type="checkbox"]').checked = true;
    } else {
      agree.querySelector('.checkbox-img').classList.remove('checked');
      agree.querySelector('input[type="checkbox"]').checked = false;
    }
  })
})


// .agree label이 모두 체크 됐을 때
// .total label 안 .checkbox-img에 checked class add
// .total label input checkbox에 checked 속성 true

// .agree label이 모두 체크되지 않았을 때
// .total label 안 .checkbox-img checked class remove
// .total label 안 input checked에 checked 속성 false