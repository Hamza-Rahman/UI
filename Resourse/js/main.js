// Isotope activation js codes

$(document).ready(function(){
   
     // Activate isotope in container
 
    $(".protfolio-item").isotope({
        itemSelector: '.single-item',
        layoutMode: 'fitRows',
    });
    
    // Add isotope click function
    
    $('.default-nav li').click(function(){
        $(".default-nav li").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".protfolio-item").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
    
 $("img").elevateZoom({scrollZoom : true});
    
});