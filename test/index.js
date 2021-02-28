$(document).ready(function(){

PopUpHide();

$('.burger').click(function(){
        $('.menu').slideToggle(300);
        return false;
    }); 
});

function PopUpShow(){
    $(".popup").show();
}
function PopUpHide(){
    $(".popup").hide();
}

$('.signUp').click(function(){
        PopUpShow();
    });

$('.close').click(function(){
        PopUpHide();
    });

