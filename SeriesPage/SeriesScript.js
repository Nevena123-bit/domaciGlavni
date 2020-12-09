window.onload=() => {
    var body=document.querySelector('body');
    body.classList.add('stopScroll');
var radio1=document.getElementById('radio1');
var radio2=document.getElementById('radio2');
var radio3=document.getElementById('radio3');
radio1.style.borderBottom ="solid red";

var footer=document.getElementById('ButtonsRadio');

var buttonLeft=document.getElementById('buttonLeft');
var rightButton=document.getElementById('buttonRight');
var headText=document.getElementById('HeadText');

var nizHeadera=["MONEY HEIST","GAME OF THRONES","STRAINGER THINGS"];
var nizSlika=["url('SeriesPage/Util/MONEY_HEIST.jpg')","url('SeriesPage/Util/GOT.jpg')","url('SeriesPage/Util/STRAINGER_THINGS.jpg')"];
var nizParagrafa1 = ["An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history","Nine noble families fight for control over the lands of Westeros,","When a young boy disappears, his mother, a police chief and his friends must confront"];
var nizParagrafa2=["stealing 2.4 billion euros from the Royal Mint of Spain.","while an ancient enemy returns after being dormant for millennia.","terrifying supernatural forces in order to get him back."];
var nizParagrafa3=["","",""];


var PText3=document.getElementById('P3');
var PText2=document.getElementById('P2');
var PText1=document.getElementById('P1');


          
setTimeout(function(){ body.classList.remove('stopScroll') }, 4000);

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
    PText1.innerHTML = nizParagrafa1[i];   cardContainerImage[0].style.backgroundImage = nizSlika[i];
    
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
        radio2.style.borderBottom ="none";
        radio3.style.borderBottom ="none";
        break;
    }



    case 'radio2': {
      
        radio2.style.borderBottom =" solid red";
        radio1.style.borderBottom ="none";
        radio3.style.borderBottom ="none";
        break;
    }


    case 'radio3': {
        
        radio2.style.borderBottom ="none";
        radio3.style.borderBottom =" solid red";
        radio1.style.borderBottom ="none";
        break;
    }
}

});


};