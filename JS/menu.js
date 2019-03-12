// class Menu {
//   constructor(element) {
//     this.element = element;
//     console.log(this.element)
//     this.button = this.element.querySelector(".menuIcon");
//     this.content = this.element.querySelector(".navigation");
//     this.button.addEventListener("click", () => this.toggle());
//   }
//   toggle() {
//     this.content.classList.toggle('nav');
//     console.log("click")
//   }
// }

// let menu = document.querySelectorAll(".navigation").forEach(menu => new Menu(menu));
// console.log(menu)
const toggleMenu = () => {
    menu.classList.toggle('menuopen');
    console.log("click")
};


const menu = document.querySelector('nav');
console.log(menu)

const menuButton = document.querySelector('.menuIcon');

menuButton.addEventListener('click', toggleMenu)
