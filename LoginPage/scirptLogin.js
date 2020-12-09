$(function(){
    $("form").submit(function(e){
        e.preventDefault();
    });
var $form=$(".form");

    $form.validate({
        rules:{
            LoginUsername:{
                required: true,
                email: true
            },
            LoginPassword:{
                required: true,
                LoginPassword:true
            }
        },
        messages:{
            LoginUsername:{
               required: "Insert  Valid Username",
               email: "Please Enter Valid Email"
            },
            LoginPassword:{
                required: "Inert Valid Passowrd",
                LoginPassword:"Not Valid"
            }
        }
        ,
        errorPlacement: function(error,element){
            if(element.hasClass("loginUsername")){
                error.insertBefore($(".inputUsername"));
             }
          else if(element.hasClass("loginPassword")){
              error.insertBefore($(".inputPassword"));
          }
        }

    })

})