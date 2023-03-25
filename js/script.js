let imgClick = document.querySelector('.header-img__click');
let oneClickUp = document.querySelector('[data-clickOne]');
let oneClickDown = document.querySelector('[data-closeOne]');
let speedText = document.querySelector('[data-speed]');
let traty = document.querySelector('[data-s]');
let numderTr = 750;
let speed = 60;
oneClickUp.onclick = () => {
   if (speed < 120) {
      speed += 5;
      speedText.innerHTML = `${speed}  км/ч`
      numderTr -= 10;
      traty.innerHTML = `${numderTr}км`
   }
}
oneClickDown.onclick = () => {
   if (speed > 5) {
      speed -= 5;
      speedText.innerHTML = `${speed}  км/ч`
      numderTr += 10;
      traty.innerHTML = `${numderTr}км`
   }
}
let tem = document.querySelector('[data-windowTem]');
let twoClickUp = document.querySelector('[data-clickTwo]');
let twoClickDown = document.querySelector('[data-closeTwo]');
let con = document.querySelector('[data-con]');

let temp = 20;
twoClickUp.onclick = () => {
   if (temp < 50) {
      temp += 1;
      tem.innerHTML = `${temp}°`
   }
   if (tem.innerHTML.slice(0, 2) >= 20) {
      con.innerHTML = 'Кондиционер'
   }
}
twoClickDown.onclick = () => {
   if (temp > -10) {
      temp -= 1;
      tem.innerHTML = `${temp}°`
   }
   if (tem.innerHTML.slice(0, 2) < 20) {
      con.innerHTML = 'Печка'
   }
}
let oneInput = document.querySelectorAll('[data-conActive]');
oneInput.forEach(item => {
   item.onclick = () => {
      if (item.checked) {
         numderTr -= 40;
         traty.innerHTML = `${numderTr}км`;
      }else {
         numderTr += 40;
         traty.innerHTML = `${numderTr}км`;
      }
   }
})

let twoInput = document.querySelectorAll('[data-long]');
let price = document.querySelector('[data-price]');
let priceNum = 89990;
twoInput.forEach(item => {
   item.onclick = () => {
      if (item.checked) {
         priceNum+=5000;
         price.innerHTML = `$${addCommas(priceNum)}`
      } else {
         priceNum-=5000;
         price.innerHTML = `$${addCommas(priceNum)}`
      }
   }
}
)
let main = document.querySelector('.page');
let m = document.querySelector('.madol')
console.log(main);

imgClick.onclick = () => {
   img.style.scale = 15;
   img.style.marginTop = '600px'
   main.style.display = 'none';
   setTimeout(i=>{
      img.style.display = 'none';
      m.style.display = 'block';
      setTimeout(i=>{
         m.style.scale = 1;
      },900)
   },900)
}
function addCommas(nStr) {
   // console.log(nStr);

   nStr += '';
   // console.log(nStr);
   
   var x = nStr.split('.');
   // console.log(x);
   
   var x1 = x[0];
   // console.log(x1);
   
   var x2 = x.length > 1 ? '.' + x[1] : '';
   // console.log(x2);

   var rgx = /(\d+)(\d{3})/;
   // console.log(rgx);
   
   while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
   }
   return x1 + x2;
}

let diskMap = {
   1:'10.jpg',
   2:'13.webp',
   3:'14.png',
   4:'15.jpg',
   5:'17.webp',
   6:'19.jpg',
   7:'21.webp',
   8:'24.webp'
}
let diskText = document.querySelector('[data-diskText]');
let diskUp = document.querySelectorAll('[data-diskUp]');
let diskDown = document.querySelectorAll('[data-diskDown]');
let img = document.querySelector('.header-img__img');
let diskNum = 6;
diskUp.forEach(item => {
   item.onclick = () => {
      if (diskNum < 8) {
         diskNum += 1;
         let rlDisk =  diskMap[diskNum];
         diskText.innerHTML = `${rlDisk.slice(0,2)}`;
         img.style.backgroundImage = `url(./img/${rlDisk})`;
      }
   }
})
diskDown.forEach(item => {
   item.onclick = () => {
      if (diskNum > 1) {
         diskNum -= 1;
         let rlDisk =  diskMap[diskNum];
         diskText.innerHTML = `${rlDisk.slice(0,2)}`;
         img.style.backgroundImage = `url(./img/${rlDisk})`;
         console.log();
         
      }
   }
})
let labelColor = document.querySelectorAll('.filter-lf-block__label');
let oneImg = document.querySelector('.img__container-img');
let textPrice = document.querySelector('.rg-block__title');
let onePrice = 89990;
let mapImg = {
   '0': 'url(./img/pick-one.svg)',
   '1000': 'url(./img/pick-two.svg)',
   '2000': 'url(./img/pick-tre.svg)'
}
labelColor.forEach(item => {
   item.onclick = () => {
      labelColor.forEach(i => i.classList.remove(`active-label`));
      item.classList.add(`active-label`);
      let key = +item.getAttribute('data-index');
      oneImg.style.backgroundImage = mapImg[key]
      textPrice.innerHTML = `$${addCommas(onePrice + key)}`
   }
})