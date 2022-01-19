//이미지 슬라이딩
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1
    } 
   if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display="block";
}


var acc=document.getElementsByClassName("according");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () { //클릭할때 열려 있던 아코디언을 접어준다.
        for(var j=0; j<acc.length; j++){
            // acc[j].classList.remove("active"); //active 클래스를 지운다.
            if(this!==acc[j]){ //높이 0으로 만들기
                acc[j].nextElementSibling.style.maxHeight=null;
                acc[j].classList.remove("active");
            }
        }
        this.classList.toggle("active");  
        var panel = this.nextElementSibling; 
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight+"px";
        }
    });
}

$(".btn-open").click(function(){
    $(".modal-login").fadeIn();
    $("body").addClass("active");
});
$(".btn-close").click(function(){
    $(".modal-login").fadeOut();
    $("body").remove("active");
})
