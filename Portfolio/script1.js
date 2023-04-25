console.log('Hello JavaScript...')

 document.querySelector('.close').style.display = 'none';


 document.querySelector('.sidebarGo');


 document.querySelector('.hamburger').addEventListener('click' ,() =>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if(document.querySelector('.sidebar').classList.contains('sidebarGo') ){
      
        setTimeout(() => {
            document.querySelector('.ham').style.display = 'inline';
            console.log('Hello this ham....')
        },350)
       document.querySelector('.close').style.display = 'none';
     } 
 else 
        {
    document.querySelector('.ham').style.display = 'none';

    setTimeout(() => {
        document.querySelector('.close').style.display = 'inline';
        console.log('Hello this close....')
    },300)
       
 }

})

/*console.log('Hello JavaScript...');

// Select the close button and hide it
const closeButton = document.querySelector('.close');
if (closeButton) {
  closeButton.style.display = 'none';
}

// Select the hamburger icon and add a click event listener
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    // Toggle the visibility of the sidebar
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('sidebarGo');

      // Update the display of the close and hamburger icons
      const hamIcon = document.querySelector('.ham');
      const closeIcon = document.querySelector('.close');
      if (sidebar.classList.contains('sidebarGo')) {
        setTimeout(() => {
          if (hamIcon) {
            hamIcon.style.display = 'inline';
            console.log('Hello this ham....');
          }
        }, 350);
        if (closeIcon) {
          closeIcon.style.display = 'none';
        }
      } else {
        if (hamIcon) {
          hamIcon.style.display = 'none';
        }
        setTimeout(() => {
          if (closeIcon) {
            closeIcon.style.display = 'inline';
            console.log('Hello this close....');
          }
        }, 300);
      }
    }
  });
}
*/
