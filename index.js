let sliderImg = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg'];
let imgListModal = Array.from(document.querySelectorAll('#img-list-modal .img-list-container'));
let slider = document.getElementById('slider')
let imgListMain = [...document.querySelectorAll('#img-list-main .img-list-container img')];
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

for (let i = 0; i < imgListModal.length; i++) {
  imgListModal[i].addEventListener('click', function() {
    slider.src = sliderImg[i];
    imgListModal.filter(innerImg => innerImg.classList.contains('active') && innerImg.classList.remove('active'));
    imgListModal[i].classList.add('active');
  })
}

for (let i = 0; i < imgListMain.length; i+=1) {
  imgListMain[i].addEventListener('click', () => {
    modal.classList.add('active');
    slider.src = sliderImg[i];

    // try something
    if (slider.src == sliderImg.forEach(sliderForEach => sliderForEach)) {
      console.log('forEach log statement')
    }
  })
}

dataImgMain.addEventListener('click', () => modal.classList.add('active'));
  btnClose.addEventListener('click', () => {
    modal.classList.remove('active')
    imgListModal.filter(innerImg => innerImg.classList.contains('active') && innerImg.classList.remove('active'));
});

burgerMenu.addEventListener('click', function() {
  header.classList.add('active');
  headerNav.classList.add('active');
})
mbBtnClose.addEventListener('click', () => {
  header.classList.remove('active');
  headerNav.classList.remove('active');
})
