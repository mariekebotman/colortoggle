const togglecolor1 = function() {
  const bodyElement =document.body;
  bodyElement.classList.add("olive-background");
  bodyElement.classList.remove('red-background', 'purple-background', 'blue-background', 'grey-background');
  };
  const changeColorButton1 = document.getElementById("olive");
  
   changeColorButton1.addEventListener("click",() => {
    console.log('olive-background');
  
      togglecolor1();
    });

const togglecolor2 = function() {
  const bodyElement =document.body;
  bodyElement.classList.add("red-background");
  bodyElement.classList.remove('grey-background', 'purple-background', 'blue-background', 'olive-background');
  };
  const changeColorButton2 = document.getElementById("red");
  
   changeColorButton2.addEventListener("click",() => {
    console.log('red-background');
  
      togglecolor2();
    });
    
    const togglecolor3 = function () {
      const bodyElement = document.body;
      bodyElement.classList.add("blue-background");
      bodyElement.classList.remove('red-background', 'purple-background', 'grey-background', 'olive-background');
    };
    const changeColorButton3 = document.getElementById("blue");
    
    changeColorButton3.addEventListener("click", () => {
      console.log('blue-background');
    
        togglecolor3();
      });

      const togglecolor4 = function() {
        const bodyElement =document.body;
        bodyElement.classList.add("grey-background");
        bodyElement.classList.remove('red-background', 'purple-background', 'blue-background', 'olive-background');
      
        };
        const changeColorButton4 = document.getElementById("grey");
        
         changeColorButton4.addEventListener("click",() => {
          console.log('grey-background');
        
            togglecolor4();
          });

          const togglecolor5 = function() {
            const bodyElement =document.body;
            bodyElement.classList.add("purple-background");
            bodyElement.classList.remove('red-background', 'grey-background', 'blue-background', 'olive-background');  
          };

            const changeColorButton5 = document.getElementById("purple");
            
             changeColorButton5.addEventListener("click",() => {
              console.log('purple-background');
            
                togglecolor5();
              });
 


    

  





















