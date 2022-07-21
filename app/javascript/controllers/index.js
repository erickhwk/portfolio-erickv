// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)


// SKILL TABS
const tabs =  document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          const target = document.querySelector(tab.dataset.target)

          tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills-active')
          })

          target.classList.add('skills-active')

          tabs.forEach(tab => {
            tab.classList.remove('skills-active')
          })

          tab.classList.add('skills-active')
        })
      });

// MixItUp
// let mixer = mixitup('.work-container', {
//   selectors: {
//       target: '.work-card'
//   },
//   animation: {
//       duration: 300
//   }
// });

// Portfolio Popup
document.addEventListener("click", (e) => {
  if(e.target.classList.contains("work-button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
}

document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;
  document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
  document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
