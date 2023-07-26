// 0번 버튼 클릭 했을 때 
// 0번째 tab-item한테 blue 클래스 추가
// 0번째 tab-content한테 show 클래스 추가

// $('.tab-item').eq(0).on('click', function(){
//   $('.tab-item').removeClass('blue');
//   $('.tab-content').removeClass('show');

//   $(this).addClass('blue');
//   $('.tab-content').eq(0).addClass('show');
// })

// $('.tab-item').eq(1).on('click', function(){
//   $('.tab-item').removeClass('blue');
//   $('.tab-content').removeClass('show');

//   $(this).addClass('blue');
//   $('.tab-content').eq(1).addClass('show');
// })


// 코드를 확장성 있게 작성 
// 반복문을 이용해서 .tab-item class length만큼 반복
// for(let i = 0; i < $('.tab-item').length; i++) {
//   $('.tab-item').eq(i).on('click', function(){

//   })
// }


// 함수로 구현
function tabOpen(num){
  $('.tab-item').removeClass('blue');
  $('.tab-content').removeClass('show');

  $('.tab-item').eq(num).addClass('blue');
  $('.tab-content').eq(num).addClass('show');
}

// 이벤트리스너 1개 사용
// document.querySelector('.tab-list').addEventListener('click', function(e){
//   // e.target(클릭된 요소)가 버튼(tab-item) 0이라면
//   if(e.target == document.querySelectorAll('.tab-item')[0]) {
//     tabOpen(0);
//   } else if (e.target == document.querySelectorAll('.tab-item')[1]) {
//     tabOpen(1);
//   } else if (e.target == document.querySelectorAll('.tab-item')[2]) {
//     tabOpen(2);
//   }
// })


// dataset으로 구현
// html에 유저는 볼 수 없게 몰래 정보를 숨겨둘 수 있다.
// data-자료이름="값"
// dataset.자료이름
document.querySelector('.tab-list').addEventListener('click', function(e){
  // 지금 클릭한 버튼에 숨겨져 있는 dataset.id을 
  // tabOpen함수의 매개변수 값으로 넘겨준다.
  tabOpen(e.target.dataset.id);
  console.log(e.target.dataset.id);
})