const accordions = document.querySelectorAll(".accordion-item");

for(item of accordions) {
    item.addEventListener("click", function(){
        if(this.classList.contains("active")) {
            this.classList.remove('active');
        } else {
            for(el of accordions) {
                el.classList.remove('active');
            }
               this.classList.add('active');
        }
    });
}