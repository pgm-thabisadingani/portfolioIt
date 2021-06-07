(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.$menu__mobile = document.querySelector('.menu__mobile');
      this.$burger = document.querySelector('.burger');
      this.$closing__menu = document.querySelector('.btn__closing--menu');

      this.$backToTheTop = document.querySelector('.arrow-top');
    },
    registerEventListeners () {
      this.$burger.addEventListener('click', (e) => {
        this.showSideMenu();
      });
      this.$closing__menu.addEventListener('click', (e) =>{
        this.removeSideMenu();
      });
      this.$backToTheTop.addEventListener('click', (e) => {
        this.getBackToTheTop();
      });
      window.addEventListener('scroll', () => {
        this.getPageScroll();
      });
    },
    removeSideMenu(){
      this.$menu__mobile.classList.remove('hidden');
    },

		showSideMenu() {
      this.$menu__mobile.classList.add('hidden');
    },
    getPageScroll(){
      if (window.pageYOffset > 300){
        this.$backToTheTop.classList.add('btnAppears'); 
      }else{ 
        this.$backToTheTop.classList.remove('btnAppears'); 
     }
    },
    getBackToTheTop(){
        window.scrollTo(0, 0);
    },

  };
  app.initialize();
})();