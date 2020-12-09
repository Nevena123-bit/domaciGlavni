window.onload=() => {
    
var radio1=document.getElementById('radio1');
var radio3=document.getElementById('radio3');
radio1.style.borderBottom ="solid red";

var footer=document.getElementById('ButtonsRadio');

var buttonLeft=document.getElementById('buttonLeft');
var rightButton=document.getElementById('buttonRight');
var headText=document.getElementById('HeadText');

var nizHeadera=["Inception","Shutter Island","Imagination game"];
var nizSlika=["url('MoviesPage/Util/INCEPTION.jpg')","url('MoviesPage/Util/SHUTTER_ISLAND.jpg')","url('MoviesPage/Util/iMITATION_GAME.jpg')"];
var nizParagrafa1 = ["A thief who steals corporate secrets through the use of dream-sharing technology is given the","In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a","During World War II, the English mathematical genius Alan Turing tries to crack the German"];
var nizParagrafa2=["inverse task of planting an idea into the mind of a C.E.O.","hospital for the criminally insane.","Enigma code with help from fellow mathematicians."];
var nizParagrafa3=["","",""];

var PText3=document.getElementById('P3');
var PText2=document.getElementById('P2');
var PText1=document.getElementById('P1');

var cardContainerImage=document.getElementsByClassName('cardContainer');

 var i=0;

 rightButton.addEventListener('click',(e) => {
     
   if(i<2)
   { 
       i++;
      NamestiSliku(i) ;
      
   }
   else{
       i=0;
    
   NamestiSliku(i) ;
  
      
       }

   
});
function NamestiSliku(i)
{
    headText.innerHTML = nizHeadera[i];
    PText3.innerHTML = nizParagrafa3[i];
    PText2.innerHTML = nizParagrafa2[i];
    PText1.innerHTML = nizParagrafa1[i];
    cardContainerImage[0].style.backgroundImage = nizSlika[i];
    
}
buttonLeft.addEventListener('click',(e) => {
    if(i>0)
    {
        i--;
       NamestiSliku(i) ;
       
    }
    else{i=2;
    NamestiSliku(i) ;
   
       
        }
});
footer.addEventListener('click',function(e){

 
   
var targetId=e.target.id;

switch(targetId)
{
    case 'radio1': {
   
        radio1.style.borderBottom =" solid red";
    
        radio3.style.borderBottom ="none";
        break;
    }



  

    case 'radio3': {
        
     
        radio3.style.borderBottom =" solid red";
        radio1.style.borderBottom ="none";
        break;
    }
}

});


};