let sliderImg = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg'];
let imgListContainer = Array.from(document.querySelectorAll('.img-list-container img'));
let slider = document.getElementById('slider')
let dataImgList = [...document.querySelectorAll('.img-list img')];
let modal = document.getElementById('modal');
let btnClose = document.querySelector('.btn-close');
let mbBtnClose = document.querySelector('.mb-btn-close');
let dataImgMain = document.querySelector('[data-img-main]');
let burgerMenu = document.querySelector('.burger-menu');
let headerNav = document.querySelector('header nav:nth-child(1)');
let header = document.querySelector('header');

document.addEventListener('click', e => {
  const isDropdownBtn = e.target.matches('[data-dropdown-button]');
  let dropdownActive = [...document.querySelectorAll('[data-dropdown].active')];
  let currentDropdown;
  
  if (!isDropdownBtn && (e.target.closest('[data-dropdown]') != null)) return;
  if (isDropdownBtn) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  }
  
  for (let i = 0; i < dropdownActive.length; i++) {
    if (dropdownActive[i] === currentDropdown) return;
    dropdownActive[i].classList.remove('active');
  }
})

// for (let i = 0; i < imgListContainer.length; i++) {
//   imgListContainer[i].addEventListener('click', () => {
//     slider.src = sliderImg[i];
//     imgListContainer.filter(innerImg => innerImg.classList.contains('active') && innerImg.classList.remove('active'));
//     imgListContainer[i].classList.add('active')
    
//     if (modal.classList.contains('active')) {
//       console.log(slider.src);
//     }
//   })
// }

// for (let i = 0; i < dataImgList.length; i+=1) {
//   dataImgList[i].addEventListener('click', () => {
//     slider.src = sliderImg[i];
//     modal.classList.add('active');
//   })
// }
// dataImgMain.addEventListener('click', () => modal.classList.add('active'));
// btnClose.addEventListener('click', () => {
//   modal.classList.remove('active')
//   imgListContainer.filter(innerImg => innerImg.classList.contains('active') && innerImg.classList.remove('active'));
// });

burgerMenu.addEventListener('click', function() {
  header.classList.add('active');
  headerNav.classList.add('active');
})
mbBtnClose.addEventListener('click', () => {
  header.classList.remove('active');
  headerNav.classList.remove('active');
})