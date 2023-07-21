// 현재 인덱스를 저장하는 변수 (초기값 0)
let cur = 0;
// len이라는 변수에 .slide-item라는 클래스가 가진 요소들의 총 개수 저장
let len = $('.slide-item').length;

for(i = 0; i < len; i++) {
  $('#dots').append('<div></div>');
}
