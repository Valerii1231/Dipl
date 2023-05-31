const swiper = new Swiper('.box_mob_swiper', {    
    direction: 'horizontal',
    centeredSlides: false, 
    loop: true,      
    spaceBetween: 70,   
    navigation: {
       prevEl:'.slider__next',
       nextEl:'.slider__prev',
    }
});

const swiper1 = new Swiper('.tech__cards_mob_swiper', {
    direction: 'horizontal',      
    loop: true,  
    spaceBetween: 100,     
    navigation: {
        prevEl:'.tech__arrow-prev_mob',
        nextEl:'.tech__arrow-next_mob',
    }
});

const swiper2 = new Swiper('.tech__logos_mob_swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 150, 
    navigation: {
        prevEl:'.tech__arrow-prev1_mob',
        nextEl:'.tech__arrow-next1_mob',
    }
});

const swiper3 = new Swiper('.process__boxs_mob_wriper', {    
    direction: 'horizontal',   
    loop: true,    
    spaceBetween: 150,   
    navigation: {
       prevEl:'.process__arrow-prev_mob',
       nextEl:'.process__arrow-next_mob',
    }
});

const swiper01 = new Swiper('.box_pl_swiper', {    
    direction: 'horizontal',
    centeredSlides: false, 
    loop: true,       
    spaceBetween: 370,   
    navigation: {
       prevEl:'.slider__next',
       nextEl:'.slider__prev',
    }
});

const swiper02 = new Swiper('.tech__logos_pl_swiper', {
    direction: 'horizontal',      
    loop: true,     
    spaceBetween: 370,     
    navigation: {
        prevEl:'.tech__arrow-prev1_pl',
        nextEl:'.tech__arrow-next1_pl',
    }
});
    
const swiper03 = new Swiper('.process__boxs_pl_wriper', {
    direction: 'horizontal',      
    loop: true,      
    spaceBetween: 370,     
    navigation: {
        prevEl:'.process__arrow-prev_pl',
        nextEl:'.process__arrow-next_pl',
    }
});




