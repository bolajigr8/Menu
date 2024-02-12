const cl = console.log.bind(console);

const menu = [
  {
    id: 1,
    name: "coffee",
    category: "breakfast",
    price: 2,
    desc: "coffee Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/1.jpg",
  },
  {
    id: 2,
    name: "steak",
    category: "lunch",
    price: 9.09,
    desc: "steak Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/2.jpg",
  },
  {
    id: 3,
    name: "oranges",
    category: "lunch",
    price: 13.99,
    desc: "oranges Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/3.jpg",
  },
  {
    id: 4,
    name: "tomato sauce",
    category: "breakfast",
    price: 10.99,
    desc: "tomato sauce Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/4.jpg",
  },
  {
    id: 5,
    name: "burger",
    category: "lunch",
    price: 11.99,
    desc: "burger Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/5.jpg",
  },
  {
    id: 6,
    name: "noodles",
    category: "dinner",
    price: 12,
    desc: "noodles Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/6.jpg",
  },
  {
    id: 10,
    name: "buttermilk pancakes",
    category: "dinner",
    price: 2.99,
    desc: "buttermilk pancakes Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/10.jpeg",
  },
  {
    id: 7,
    name: "rice",
    category: "dinner",
    price: 12.99,
    desc: "rice Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/7.jpg",
  },
  {
    id: 8,
    name: "pineapples",
    category: "lunch",
    price: 5.4,
    desc: "pineapples Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/8.jpg",
  },
  {
    id: 9,
    name: "strawberries",
    category: "dinner",
    price: 2.99,
    desc: "strawberries Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur, nostrum. Quam iure eveniet quia qui cupiditate unde aperiam repellat totam!",
    img: "./images/9.jpg",
  },
];

// 1st step - get only unique categories

// --- we commented out the buttons from html, we are setting them dynamically.

const menuCenter = document.querySelector(".menu-center");
const btnContainer = document.querySelector(".button");
/*
=============== 
Event Listeners 
===============
*/
window.addEventListener("DOMContentLoaded", function () {
  loadMenu(menu);
  loadMenuBtns();
});

/*
=============== 
Functions 
===============
*/
function loadMenu(menuArray) {
  let showMenu = menuArray.map(function (item) {
    return `<!-- single menu -->
        <article class="menu">
          <img src="${item.img}" alt="${item.name}" class="img" />
          <!-- menu-info -->
          <div class="menu-info">
            <div class="name">
              <h4 id="name">${item.name}</h4>
              <span id="price" class="price">$${item.price}</span>
            </div>
            <!-- text -->
            <p id="desc" class="menu-text">
              ${item.desc}
            </p>
          </div>
        </article>
        <!-- end of single menu -->`;
  });
  showMenu = showMenu.join("");
  menuCenter.innerHTML = showMenu;
}

function loadMenuBtns() {
  const categories = menu.reduce(
    function (values, item) {
      // to get uniques categories
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  // creating and targetting the buttons dynamically
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="btn filter-btn" type="button" data-id=${category}>
        ${category}
      </button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  // specific buttons performing specific actions
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      // new menu array by category
      const menuByCategory = menu.filter(function (item) {
        if (item.category === category) {
          return item;
        }
      });
      // end of new menu array by category
      if (category === "all") {
        loadMenu(menu);
      } else {
        loadMenu(menuByCategory);
      }
    });
  });
}
