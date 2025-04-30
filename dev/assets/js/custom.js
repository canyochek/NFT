window.addEventListener("load", function (event) {
const btnBurger = document.querySelector('.btn-menu')
const mobileContainer = document.querySelector('.container-mobile')

console.log(mobileContainer)

const toggleMobileNav =()=> {
    mobileContainer.classList.toggle('show')
    btnBurger.classList.toggle('active')
}

btnBurger.addEventListener('click', toggleMobileNav)





const bannerSlider = new Swiper('.swiper', {
  slidesPerView: 2,
  speed: 700,
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
});




  const carouselWeekly = new Swiper('.swiper-weekly', {
    slidesPerView: 5,
    centeredSlides: true,
    speed: 700,
    loop: true,
    spaceBetween: 40,
    navigation: {
      nextEl: '.weekly-button-next',
      prevEl: '.weekly-button-prev',
    },
    wrapperClass: 'swiper-wrapper-weekly',
    slideClass: 'swiper-slide-weekly', 
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 28,
        centeredSlides: true,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 28,
        centeredSlides: true,
      },
      // when window width is >= 1025px
      1025: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: true,
      },
    }
  });

  const openButton = document.querySelectorAll('[data-custom-wiget="list"]')

	openButton.forEach(btn => {
		btn.addEventListener('click', function(){
			btn.closest('.layout-menu').classList.toggle('show')
		})
	})

})

const wiget = document.querySelector('.wiget-list')
const layoutItem = document.querySelectorAll('[data-layout]')

document.cookie = "layoutCase=list"


function checkLayoutCookie() {
  if (document.cookie === "layoutCase=grid") {
    wiget.classList.remove('list')
    wiget.classList.add('grid')
  } else {
    wiget.classList.remove('grid')
    wiget.classList.add('list')
  }
}



layoutItem.forEach(item => {
  
  item.addEventListener('click', function(){
    let dataLayout = item.getAttribute('data-layout')

    
    document.cookie = "layoutCase=" + dataLayout;

    const thisNavigation = item.closest('.layout-case')
    const thisNavigationItems = thisNavigation.querySelectorAll('.icon-layout')

    thisNavigationItems.forEach(item => {
      item.classList.remove('active')
    })

    if (document.cookie === "layoutCase=list") {
      wiget.classList.remove('grid')
      wiget.classList.add('list')
    } else {
      wiget.classList.remove('list')
      wiget.classList.add('grid')
    }
    

    item.classList.add('active')
    

  })

})

const customWiget = document.querySelectorAll('[data-custom-wiget="menu"]')
function closeAllWiget() {
  customWiget.forEach(item => {
    document.addEventListener('click', function(event) {
      const inBoundaries = event.composedPath().includes(item);
      !inBoundaries ? item.classList.remove('show') : null
    })
  })
}
closeAllWiget();


const btnExplore = document.querySelector('.expant'); 
const tableBody = document.querySelector('.table-body-adaptivy');

btnExplore.addEventListener('click', function(){
    tableBody.classList.toggle('full');
    let element = document.getElementById("expbtn");
    if (element.textContent === "Close") {
      element.textContent = "Explore All";
    } else {
      element.textContent = "Close";
  }
});




