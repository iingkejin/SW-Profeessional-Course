// dropdown-btn을 클릭 했을 때 dropdown-menu한테 active class 추가
// dropdown-menu가 active를 가지고 있을 때 클릭하면 active class remove
// toggle

let dropdownBtn = document.querySelector('.dropdown-btn');
let dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', function(){
  dropdownMenu.classList.toggle('active');
})
