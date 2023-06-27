const theme ={
  
  // ----------------------------------------------------------
  // Initialisation de notre fonctionnalité thème
  // ----------------------------------------------------------

  init: function(){
    
    theme.addEventChangeButtonGreen();
    theme.addEventChangeButtonRed();
    theme.addEventChangeButtonBlue();
    
  },
  // ----------------------------------------------------------
  // Méthodes gérant l'ajout des écouteurs d'évènement
  // ----------------------------------------------------------

addEventChangeButtonGreen: function (){
    const buttonGreen = document.querySelector('#theme-green');
    console.log(buttonGreen);
    buttonGreen.addEventListener('click', theme.handleButtonClickGreen)
    console.log("mon bouton vert:",buttonGreen );
   

  },

  addEventChangeButtonRed: function (){
    // on reccupere les bouton de changment  de theme de couleur 

    const buttonRed = document.querySelector('#theme-red');
    console.log(buttonRed);

    buttonRed.addEventListener('click', theme.handleButtonClickRed)
    console.log("mon bouton rouge:",buttonRed );
  },
  
  addEventChangeButtonBlue: function (){
    const buttonBlue = document.querySelector('#theme-blue');
    console.log(buttonBlue);
      buttonBlue.addEventListener('click', theme.handleButtonClickBlue)
      console.log("mon bouton blue:",buttonBlue);
    } ,

    // ----------------------------------------------------------
    // Méthodes gérant les gestionnaires d'évènement (handlers)
    // ----------------------------------------------------------
/*****************************************************************************************************/
  handleButtonClickGreen :function(eventDetail){
  console.log(eventDetail.currentTarget);
  // on récupère le bouton de couleur sur lequel on a cliqué
  const clickedColorButtonEl = eventDetail.currentTarget;
  console.log("J'ai cliqué sur le bouton : ", clickedColorButtonEl);

  theme.changeColorThemeGreen(clickedColorButtonEl.id);
  console.log('changeColorTheme', clickedColorButtonEl.id);
},
    
  handleButtonClickRed :function(event){
    console.log(event.currentTarget);
    // on récupère le bouton de couleur sur lequel on a cliqué
    const clickedColorButtonEl = event.currentTarget;
    console.log("J'ai cliqué sur le bouton : ", clickedColorButtonEl);

    theme.changeColorThemeRed(clickedColorButtonEl.id);
    console.log('changeColorThemeRed', clickedColorButtonEl.id);
    
  },

  handleButtonClickBlue :function(evt){
    console.log(evt.currentTarget);
    // on récupère le bouton de couleur sur lequel on a cliqué
    const clickedColorButtonEl = evt.currentTarget;
    console.log("J'ai cliqué sur le bouton : ", clickedColorButtonEl);

    theme.changeColorThemeBlue(clickedColorButtonEl.id);
    console.log('changeColorThemeblue', clickedColorButtonEl.id);
  },

  // ----------------------------------------------------------
  // Méthodes liées aux changements du DOM
  // ----------------------------------------------------------

/****************************************************************************************************************/
  changeColorThemeGreen: function (green){
  console.log();
  // On recupere l'élement sur lequel on veu ajouter le theme couleur
  const mainElementGreen =document.querySelector('main');
  console.log(mainElementGreen);

  mainElementGreen.classList.remove('theme-green');
  console.log(mainElementGreen);

  mainElementGreen.classList.add('green');
  console.log(mainElementGreen);
  

},

  changeColorThemeRed: function (red){
    console.log();
    // On recupere l'élement sur lequel on veu ajouter le theme couleur
    const mainElementRed =document.querySelector('main');
    console.log(mainElementRed);

    mainElementRed.classList.remove('theme-red');
    console.log(mainElementRed);

    mainElementRed.classList.add('red');
    console.log(mainElementRed);
 
},

changeColorThemeBlue: function (blue){
  console.log();
  // On recupere l'élement sur lequel on veu ajouter le theme couleur
  const mainElementBlue =document.querySelector('main');
  console.log(mainElementBlue);

  mainElementBlue.classList.remove('theme-blue');
  console.log(mainElementBlue);

  mainElementBlue.classList.add('blue');
  console.log(mainElementBlue);

},
}
document.addEventListener('DOMContentLoaded', theme.init);