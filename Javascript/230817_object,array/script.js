// Array 안에 object
let products = [
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4b2f5e8a-8638-4fa5-81fa-e714024efb39/%ED%85%8C%ED%81%AC-%ED%97%A4%EB%9D%BC-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-5psTyMig.png',
    title : '나이키 테크 헤라',
    price : '103,200 원',
    size : ['230', '235', '240', '245']
  }
]


document.querySelector('.box-item img').src = products[0].img;
document.querySelector('.sho-info h2').innerHTML = products[0].title;
document.querySelectorAll('.sho-info p')[0].innerHTML = products[0].price;
document.querySelectorAll('.sho-info p')[1].innerHTML = products[0].size;

