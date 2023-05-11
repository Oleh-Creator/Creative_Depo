let db = [{
  name: 'ФУТБОЛКА IM UKRANIAN',
              code: 1601434,
              size: 'Розмір: XS, S, M, L, XL, XXL',
              money: '1200 грн.',
              pic: '1product.jpg'
},

{
  name: 'СВІТШОТ IM UKRAINIAN',
              code: 1601467,
              size: 'Розмір: XS, S, M, L, XL, XXL',
              money: '2100 грн.',
              pic: '2product.jpg'
},
{
  name: 'Худи IM UKRAINIAN',
              code: 1601409,
              size: 'Розмір: XS, S, M, L, XL, XXL',
              money: '2200 грн.',
              pic: '3product.jpg'
},

];
let kb = [{
  name: 'КЕПКА IM UKRANIAN',
              code: 1601445,
              size: 'Розмір: one size',
              money: '600 грн.',
              pic: '4product.jpg'
},

{
  name: 'КЕПКА IM UKRANIAN',
              code: 1601412,
              size: 'Розмір: one size',
              money: '600 грн.',
              pic: '5product.jpg'
},
{
  name: 'ЧОРА КЕПКА UKRAINE',
  code: 1601410,
  size: 'Розмір: one size',
  money: '600 грн.',
  pic: '6product.png'
},

];
let lb = [{
  name: 'ФУТБОЛ UKRAINE',
              code: 1601417,
              size: 'Розмір: XS, S, M, L, XL, XXL',
              money: '1200 грн.',
              pic: '7product.jpg'
},

{
  name: 'СВИТШОТ UKRAINE',
              code: 112233,
              size: 'Розмір: XS, S, M, L, XL, XXL',
              money: '2100 грн.',
              pic: '8product.jpg'
},
{
  name: 'ХУДІ UKRAINE',
  code: 11111,
  size: 'Розмір: XS, S, M, L, XL, XXL',
  money: '600 грн.',
  pic: '9product.jpg'
},

];
let eb = [{
  name: 'ЧОХОЛ IM UKRAINIAN',
              code: 1601417,
              model:'Модель телефону:(під замовлення)',
              color:'Колір:Чорний',
              material:'Матеріал:Софт тач із мікрофібою',
              money: '1200 грн.',
              pic: '10product.png'
},

{
  name: 'ЧОХОЛ UKRAINE',
              code: 1601417,
              model:'Модель телефону:(під замовлення)',
              color:'Колір:Чорний',
              material:'Матеріал:Софт тач із мікрофібою',
              money: '1200 грн.',
              pic: '11product.png'
},
{
  name: 'ЧОХОЛ FROM KYIV WITH LOVE',
              code: 1601417,
              model:'Модель телефону:(під замовлення)',
              color:'Колір:Чорний',
              material:'Матеріал:Софт тач із мікрофібою',
              money: '1200 грн.',
  pic: '12product.png'
},

];

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
function showUser() {
  for (let el of db) {
      $('.ProductBox1').append(`<div class='productBox'>
          <div class='ProductInf' id='inf1'>
     <img src='./img/${el.pic}'>
    <div class='prInf'
    <br>
    <br>
      <span class='PrName'>${el.name}<span> 
          <br>
          <span class='PrSize'>${el.size}</span>
          <br>
      <div class='row'>
           <span class='price'>${el.money}<span> 
           </div>
           <br>
      <button class='productBuyBut' id='infBut'${el.code}'>ДОДАТИ У КОШИК</button>
      </div>
  </div>
  `
  );
  }
  for (let el of kb) {
    $('.ProductBox2').append(`<div class='productBox'>
        <div class='ProductInf' id='inf1'>
   <img src='./img/${el.pic}'>
  <div class='prInf'
  <br>
  <br>
    <span class='PrName'>${el.name}<span> 
        <br>
        <span class='PrSize'>${el.size}</span>
        <br>
    <div class='row'>
         <span class='price'>${el.money}<span> 
         </div>
         <br>
    <button class='productBuyBut' id='infBut'${el.code}'>ДОДАТИ У КОШИК</button>
    </div>
</div>
`
);
}
for (let el of lb) {
  $('.ProductBox3').append(`<div class='productBox'>
      <div class='ProductInf' id='inf1'>
 <img src='./img/${el.pic}'>
<div class='prInf'
<br>
<br>
  <span class='PrName'>${el.name}<span> 
      <br>
      <span class='PrSize'>${el.size}</span>
      <br>
  <div class='row'>
       <span class='price'>${el.money}<span> 
       </div>
       <br>
  <button class='productBuyBut' id='infBut'${el.code}'>ДОДАТИ У КОШИК</button>
  </div>
</div>
`
);
}
for (let el of eb) {
  $('.ProductBox4').append(`<div class='productBox'>
      <div class='ProductInf' id='inf1'>
 <img src='./img/${el.pic}'>
<div class='prInf'
<br>
<br>
  <span class='PrName'>${el.name}<span> 
      <br>
  <div class='row'>
  <span class='price'>${el.model}</span>
<br>
<br>
       <span class='price'>${el.color}<span> 
       <br>
       <span class='price'>${el.material}<span> 
       <br>
       <span class='price'>${el.money}<span> 
       <br>
       </div>
       <br>
  <button class='productBuyBut' id='infBut'${el.code}'>ДОДАТИ У КОШИК</button>
  </div>
</div>
`
);
}
}
showUser();

let animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
  window.addEventListener('scroll', animOnscroll);
  function animOnscroll(params){
    for(let index = 0; index < animItems.length; index++ ){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if(( pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      }else{
        if(animItem.classList.contains('_anim-no-hide')){
        animItem.classList.remove('_active');
      }
    }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

}
