const scrollers = document.querySelectorAll('.scroller');

// Media query
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

// Add data attribute
function addAnimation(){
    scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        // Working on each individual scroller
        const scrollerInner = document.querySelector('.scroller__inner');
        // get all the content inside scroller__inner.
        const scrollerContent = Array.from(scrollerInner.children);
        // Array.from() : making a compy of an initial state. so it wont get change if the dom is updated.
        //scrollerInner.children : show all the li.

        scrollerContent.forEach((item)=>{
            const duplicatedItem = item.cloneNode(true);
            // make screen reader friendly.
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })
    });
}