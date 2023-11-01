document.getElementById('headerBurgerMenu').onclick = function () {
  let burgerButton = document.getElementById('headerBurgerMenuWrapper');
  
  if (!burgerButton.classList.contains('header__burger-menu-open')) {
    burgerButton.classList.add('header__burger-menu-open');
  } else if (burgerButton.classList.contains('header__burger-menu-open')) {
    burgerButton.classList.remove('header__burger-menu-open')
  }
}

const chooseColor = document.querySelectorAll('.assorment__list-item');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(element){
  element.addEventListener('click', open)
})

function open (evt) {
  const target = evt.currentTarget;
  console.log(target);
  const button = target.dataset.button;
  console.log(button);
  const contentActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach(function (item) {
    item.classList.remove('assorment__list-item--active');
  })

  target.classList.add('assorment__list-item--active');

  contentItem.forEach(function(item) {
    item.classList.remove('content-item__active')
  })

  contentActive.forEach(function(item) {
    item.classList.add('content-item__active')
  })
}