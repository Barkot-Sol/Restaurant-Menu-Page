const menu = [
    {
        id: 1,
        name: "Pancake",
        price: 13.50,
        img: "/Images/Pancakes.jpeg",
        category: "Breakfast",
        alt: "Pancake",
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        id: 2,
        name: "Burger Buzzer",
        price: 14.99,
        img: "/Images/burger.jpeg",
        category: "Lunch",
        alt: "burger",
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        id: 3,
        name: "Oreo Shakes",
        price: 9.99,
        img: "/Images/Oreo.jpeg",
        category: "Shakes",
        alt: "oreo",
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        id: 4,
        name: "Egg on toast",
        price: 22.50,
        img: "/Images/Egg.jpeg",
        category: "Breakfast",
        alt: "Egg",
        description: "She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry."
    },
    {
        id: 5,
        name: "Waffle Special",
        price: 8.99,
        img: "/Images/waffles.jpg",
        category: "Breakfast",
        alt: "waffles",
        description: "A wave loudly clashing against a long shoreline likes to take a walk in the park."
    },
    {
        id: 6,
        name: "Pasta Alfredo",
        price: 12.50,
        img: "/Images/Pasta.jpg",
        category: "Dinner",
        alt: "Pasta",
        description: "No matter how you try to rationalize the outcome, it doesn't make sense."
    },
    {
        id: 7,
        name: "Steak Dinner",
        price: 19.99,
        img: "/Images/Steak.jpg",
        category: "Dinner",
        alt: "Steak",
        description: "Wondrous awe is interdependant on the relatedness of motivation, subcultures, and management."
    },
    {
        id: 8,
        name: "Monster Milkshake",
        price: 18.50,
        img: "/Images/Frap.jpeg",
        category: "Shakes",
        alt: "Frap",
        description: "A wave loudly clashing against a long shoreline says hello. You generate the one with will"
    },
    {
        id: 9,
        name: "Bacon Sandwich",
        price: 7.50,
        img: "/Images/Bacon.jpg",
        category: "Lunch",
        alt: "Bacon",
        description: "The body of mind is interdependant on the relatedness of motivation, subcultures, and management."
    },
    {
        id: 10,
        name: "Mint Shakes",
        price: 15.99,
        img: "/Images/Mint.jpg",
        category: "Shakes",
        alt: "Mint",
        description: "Camouflage paint is interdependant on the relatedness of motivation, subcultures, and management."
    },
    {
        id: 11,
        name: "Italian Torte",
        price: 17.99,
        img: "/Images/Torte.jpg",
        category: "Dessert",
        alt: "Italian Torte",
        description: "Camouflage paint is interdependant on the relatedness of motivation, subcultures, and management."
    }
];

const menuItemEL = document.querySelector(".menu-items");
const navEl = document.querySelector(".nav");

window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons(menu);
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item) {
        return `<article class="item">
                <img src="${item.img}" alt="${item.alt}" class="photo">
                <div class="menu-info">
                    <header>
                        <h3 class="item-name">${item.name}</h3>
                        <p class="price">$${item.price}</p>
                    </header>
                    <hr class="item-line">
                    <p class="description">${item.description}</p>
                </div>
            </article>`;
    });
    displayMenu = displayMenu.join("");
    menuItemEL.innerHTML = displayMenu;
}

function displayMenuButtons(menu){
    const foodTypes = menu.reduce(function(values, item){
        if (!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ["All"])
    console.log(foodTypes);
    const foodTypebtns = foodTypes.map(function(type){
        return `<button class="btn-el" data-id=${type}>${type}</button>`
    }).join("") 
    navEl.innerHTML = foodTypebtns
    const btnEl = document.querySelectorAll(".btn-el");
    btnEl.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const filterCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem;
                }
            })
            if(category === "All"){
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(filterCategory);  
            }
        })
    })
}
