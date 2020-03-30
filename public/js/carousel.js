new Glide('.glide', {
    type: 'carousel',
    startAt: 0, 
    autoplay: 3000, 
    hoverpause: false, 
    gap : 1,
    perView : 1, 
    peek : {
        before : 170, 
        after : 170
    },
    breakpoints : {
        800 : {
            peek : {
                before : 0, 
                after : 0
            }
        }
    }
}).mount();