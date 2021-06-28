const accordions = document.querySelectorAll("accordion-item");

for(item of accordions) {
    item.addEventListener("click", function(){
        this.classListener.toggle("active")
    });
}
