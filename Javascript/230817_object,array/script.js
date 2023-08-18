// Array 안에 object
let products = [
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4b2f5e8a-8638-4fa5-81fa-e714024efb39/%ED%85%8C%ED%81%AC-%ED%97%A4%EB%9D%BC-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-5psTyMig.png',
    title : '나이키 테크 헤라',
    price : '103,200 원',
    size : ['230', '235', '240', '245']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-ZuZyA5Sj.png',
    title : '나이키 덩크 로우',
    price : '139,000 원',
    size : ['220', '230', '240', '250']
  },
  {
    img : 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/d062f057-ab59-4723-acef-e59176868673/%EC%9A%B0%EB%A8%BC%EC%8A%A4-%EC%BD%94%EB%A5%B4%ED%85%8C%EC%A6%88-midnight-navy-dz2795-400-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg',
    title : '우먼스 코르테즈 Midnight Navy',
    price : '119,000 원',
    size : ['225', '230', '235', '240', '245']
  },
]

// document.querySelector('.box-item img').src = products[0].img;
// document.querySelector('.sho-info h2').innerHTML = products[0].title;
// document.querySelectorAll('.sho-info p')[0].innerHTML = products[0].price;
// document.querySelectorAll('.sho-info p')[1].innerHTML = products[0].size;

let boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(function(item, index){
  item.querySelector('img').src = products[index].img;
  item.querySelector('.sho-info h2').innerHTML = products[index].title;
  item.querySelectorAll('.sho-info p')[0].innerHTML = products[index].price;
  item.querySelectorAll('.sho-info p')[1].innerHTML = products[index].size;
})

// 프론트엔드 개발자가 하는 역할
// 서버가 보낸 데이터를 html에 꽂아준다
// 전문 용어로 '데이터 바인딩'이라고 한다.
// 데이터 바인딩을 쉽고 편하게 할 수 있도록
// 도와주는 도구 (React, Vue, angular)
// 시작 기호가 대괄호[], 중괄호{}냐에 따라서
// Array, object 구분
