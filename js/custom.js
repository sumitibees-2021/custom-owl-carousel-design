$(document).ready(() => {

  $(".slider-sec").owlCarousel({
    items: 3,
    nav: true,
    dots: false,
    center: true,
    loop: true,
    navText: ["&#8592;", "&#8594;"],
    onInitialized: highlightFirstActive,
    onChanged: highlightFirstActive,
  });
  
  function highlightFirstActive(event) {
    $(".slider-sec .owl-item").removeClass("first-active");
  
    const visibleItems = $(".slider-sec .owl-item.active");
     const nextBtn = $(".slider-sec .owl-next");
    const prevBtn = $(".slider-sec .owl-prev");


    
    $(".slider-sec .owl-item.active").addClass("first-active");
    $(".slider-sec .owl-item.active").first().removeClass("first-active");
    nextBtn.click(function() {
      // alert("next")
      $(".slider-sec .owl-item").removeClass("first-active");
      $(".slider-sec .owl-item.center").prev().siblings(".active").addClass("first-active");
    })
    prevBtn.click(function() {
      $(".slider-sec .owl-item").removeClass("first-active");
      $(".slider-sec .owl-item.center").prev().siblings(".active").addClass("first-active");
    })

  }

  



});
