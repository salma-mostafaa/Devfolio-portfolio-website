window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {  
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


let navItems = document.querySelectorAll(".navbar .nav-item");

navItems.forEach(item => {
    item.addEventListener("click", function () {

        navItems.forEach(el => el.classList.remove("active"));

        this.classList.add("active");
    });
});


