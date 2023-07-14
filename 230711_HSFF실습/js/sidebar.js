let openBtn = document.querySelector('.gnb-open-btn');
let closeBtn = document.querySelector('.sidebar-btn');
let sidebar = document.querySelector('.sidebar');

// .gnb-open-btn을 클릭 했을 때 sidebar.active class add
openBtn.addEventListener('click', function(){
  sidebar.classList.add('active');
})

// .sidebar-btn click -> sidebar.active class remove
closeBtn.addEventListener('click', function(){
  sidebar.classList.remove('active');
})