
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  //ovo kaze browseru da cemo da izrsimo animaciju,pa mora da update svaki frame,
  //moramo ga pozvati svaki put kada hocemo animaciju da ucitamo
  //svaki put kda se uradi neki repaint ili ponovn aanimcija on ce ovaj callback da pozove
var myScroll=window.requestAnimationFrame 



    window.onload = function () {
           
      
        var ImageBioskop=document.querySelector('.ImageBioskop');
        var TopBar=document.querySelector('.topBar');
        var BottomBar=document.querySelector('.bottomBar');
        var imageToLoadOnBegining=document.querySelectorAll('.ImageOnBeginning');
        var backCard=document.querySelector('.backCard');
        var imgCont4=document.querySelectorAll('.imgCont4');
        var textSection2=document.querySelectorAll('.textp1Slide');
        var body=document.querySelector('body');
        var textOnLoadPage2=document.querySelectorAll('.textonLoadPage2');
        imageToLoadOnBegining.forEach(function(e) {
            
                e.classList.add('ReadyToAnimate');
        });
     
            body.classList.add('stopScroll');
          
            setTimeout(function(){ body.classList.remove('stopScroll') }, 6500);
        
        
     
    
   
        
       
    
        var niz=[ImageBioskop,TopBar,BottomBar,textOnLoadPage2[0],textOnLoadPage2[1],backCard,textSection2[0],textSection2[1],textSection2[2],imgCont4[0],imgCont4[1],imgCont4[2],imgCont4[3]];



        loop();
function loop()
{

   
    niz.forEach((element) => {
       var tag=-1;
  
        switch(element.className.split(' ')[0])
        {
                case "ImageBioskop":{ tag=0; break;}
                case "topBar":{ tag=1; break;}
                case "bottomBar":{ tag=2; break;}
                case "textonLoadPage2":{
                    tag=3; break;}
                 case "backCard":{tag=4; break;}
                
                case "textonLoadPage2":{
                        tag=3; break;}
                case "backCard":{tag=4; break;}
                case "textp1Slide":{
                    tag=5; break;}
                case "imgCont4":{
                    tag=6; break;
                }
                
                        
                default :{tag=-1; break;}

        }
      
      
            if(isElementVisibleInArea(element,tag))
            {
              
                    element.classList.add('ReadyToScroll');
            }else{
                element.classList.remove('ReadyToScroll');
            }
            
    });
    myScroll(loop);
}



function isElementVisibleInArea(element,tag){
    
  //object providing information about the size of an element and its position relative to the viewport.
  //The returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width.  
  
  var rect=element.getBoundingClientRect();
    
    switch(tag)
    {
        case 0:{ return ScrollForSection2(rect); break;}
        case 1:{ return ScrollFortopBar(rect); break;}
        case 2:{return ScrollForbottomBar(rect); break;}
        case 3:{return  ScrollTextMiddleSection2(rect); break;}
        case 4:{return CardSection2(rect); break;}
        case 5:{return CardSection2(rect); break;}
        case 6:{return  ImageSection4(rect); break;}
    }
    
 
    
    }
    
        }

        function ImageSection4(rect)
        {
            return(
               
                  (rect.top<0 && rect.bottom >0)
       
                 ||(rect.top < (window.innerHeight || 
                    document.documentElement.clientHeight))
            ||(rect.top>0 && rect.bottom<(window.innerHeight ||
                 document.documentElement.clientHeight))
            );
        }
    
    function ScrollForSection2(rect){
        return(
          
              (rect.top<0 && rect.bottom >0)
             ||(rect.top < (window.innerHeight || 
                document.documentElement.clientHeight))
        ||(rect.top>0 && rect.bottom<(window.innerHeight ||
             document.documentElement.clientHeight))
        );
    }
   function ScrollFortopBar(rect){
       return false;
   }

   function ScrollForbottomBar(rect){


   return window.scrollY>0
   }
   
   function ScrollTextMiddleSection2(rect){

    
    return   (
        
          (rect.top<0 && rect.bottom >0)
   
         ||(rect.top < (window.innerHeight || 
            document.documentElement.clientHeight))
    ||(rect.top>0 && rect.bottom<(window.innerHeight ||
         document.documentElement.clientHeight))
    );
   }
      
   
   function  CardSection2(rect){
    return ((rect.top<0 && rect.bottom >0)
  
         ||(rect.top < (window.innerHeight || 
            document.documentElement.clientHeight))
    ||(rect.top>0 && rect.bottom<(window.innerHeight ||
         document.documentElement.clientHeight))
    );
   }
       
  
   



