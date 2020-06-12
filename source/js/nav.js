/* Navigation */
class Navigation{
  constructor(openTrigger, closeTrigger, overlay, menu){
    this.openTrigger = openTrigger;
    this.closeTrigger = closeTrigger;
    this.overlay = overlay;
    this.menu = menu;
    
  }


  //Open Nav
  open(){
    this.openTrigger.addEventListener('click', (e) => {
      try {
        this.menu.classList.add('nav--show');
        this.overlay.classList.add('nav--show');

      } catch (err) {
        console.log(err);
      }
    });

  }

  //Close Nav
  close(){ 
    this.closeTrigger.addEventListener('click', (e) => {

      try {
        
        this.menu.classList.remove('nav--show');

        setTimeout(() => {
          this.overlay.classList.remove('nav--show');
        },300);
        
      } catch (err) {
        console.log(err);
      }
    });
  }

  getWidth() {
    const width = window.innerWidth;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(width);
      }, 50);
    });

  }

  checkWindowSize(){
    const MINIMUM = 767;
    
    window.addEventListener('resize', async()=> {
      const windowWidth = await this.getWidth();

      if (windowWidth > MINIMUM) 
        return this.menu.classList.remove('nav--show')
               this.overlay.classList.remove('nav--show');
      
      
    });
    
  }

  clickedOutside(){
    const outside = this.overlay;
    
    outside.addEventListener('click', (e)=> {
    if(e.target == outside)
     return this.closeTrigger.click();
    
      
    });
  }

  checkIfSubmenu(){
    const menuItems = document.querySelectorAll('.nav-list__item');
    
    menuItems.forEach(item => {
      if(item.classList.contains('has-submenu')){
        item.addEventListener('click', (e)=> {
          e.preventDefault();
        
          const navLink = item.children[0];
          const submenu = item.children[1];

          if(e.target == navLink)
            return submenu.classList.toggle('submenu--show');
          
        });
      }
      
    });
    
    
  }


}


const navOpen = document.querySelector('#navOpen');
const navClose = document.querySelector('#navClose');
const navOverlay = document.querySelector('#navOverlay');
const nav = document.querySelector('#nav');

const navigation = new Navigation(navOpen, navClose, navOverlay, nav);

navigation.open();
navigation.close();
navigation.clickedOutside();
navigation.checkWindowSize();
navigation.checkIfSubmenu();