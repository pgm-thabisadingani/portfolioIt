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
    },
    registerEventListeners () {
      this.$burger.addEventListener('click', (e) => {
        this.showSideMenu();
        console.log("i work");
      });
      this.$closing__menu.addEventListener('click', () =>{
        this.removeSideMenu();
      });
    },
    removeSideMenu(){
      this.$menu__mobile.classList.remove('hidden');
    },

		showSideMenu() {
      this.$menu__mobile.classList.add('hidden');
    }

  };
  app.initialize();
})();