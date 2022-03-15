$('.owl-carousel').owlCarousel({
    
    margin:10,
    
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

function changeMode(){
    var mybody = document.body;
    mybody.classList.toggle('mydark')
}



function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
}

// function loadcoupon(){
//     document.getElementById('coupon').style.display = 'block';
// }

// function closecoupon(){
//     document.getElementById('coupon').style.display = 'none';
// }
