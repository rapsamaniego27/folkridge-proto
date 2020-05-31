/* Navigation */
class Navigation{
  constructor(openTrigger, closeTrigger, menu){
    this.openTrigger = openTrigger;
    this.closeTrigger = closeTrigger;
    this.menu = menu;
    
  }


  //Open Nav
  open(){
    this.openTrigger.addEventListener('click', (e) => {
      try {
        this.menu.classList.add('nav--show');

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
        return this.menu.classList.remove('nav--show');
      
      
    });
    
  }

  clickedOutside(){
    const outside = document.querySelector('#main');
    
    outside.addEventListener('click', (e)=> {
     /* if(this.menu.classList.contains('nav--show')){
       this.closeTrigger.click();
     } */
    
      
    });
  }


  

}


const navOpen = document.querySelector('#navOpen');
const navClose = document.querySelector('#navClose');
const nav = document.querySelector('#nav');

const navigation = new Navigation(navOpen, navClose, nav);

navigation.open();
navigation.close();
navigation.checkWindowSize();
navigation.clickedOutside();