// ********** Project Section ************
const menu = [
  {
    id: 1,
    title: "AI-Chat-Bot",
    category: "Python",
    link: "https://github.com/mdial009/AI-Chat-Bot",
    img: "./images/AIChatBot.jpg",
    desc: `This is a "Smart" Chat Bot Program that allows you to enter a url of a article and lets you ask a question that it then takes and quarries it on the website and brings back anything it can find on that specify thing.

    `,
  },
  {
    id: 2,
    title: "L3v3l 3ditor",
    category: "C#",
    category2: "Python",
    category3: "Unity",
    link: "https://github.com/mdial009/L3v3l3ditor",
    img: "./images/editorLogo.PNG",
    desc: `L3v3l 3ditor is a level editor that allows a user to design a turn-based strategy game. Users can play and/or make levels(boards). Which they can save and load. Within the level editor the user can; set the dimensions of the board, place/delete units for player 1 and player 2, place/delete obstacles, save/load a level, and play/test their creation. The game is 2 players. Each player controls their units, knight is player 1 and demon is player 2. Players take turns moving their units across the board. The goal is to eliminate all the enemy units.

    `,
  },
  {
    id: 3,
    title: "Virtual Assistant",
    category: "Python",
    img: "./images/VirtualAssistant.jpg",
    link: "https://github.com/mdial009/VirtualAssistant",
    desc: `This is a Virtual Assistant program that gets the date, current time, Respond back with a random greeting, and return information on a person.

    `,
  },
  {
    id: 4,
    title: "ICM = Image Classification Machine",
    category: "Python",
    link: "https://github.com/mdial009/ICM",
    img: "./images/ICM.jpg",
    desc: ` Used the tensorflow libaray to train the AI and based on data and take that data to classify a image. Then used Numpy to turn data into an array and make it easier for the AI to class the image. After that I used skimage to resize a image, and finally pyplot to show the image `,
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "HTML",
    category2: "CSS",
    category3: "Javascript",
    link: "https://mdial009.github.io/",
    img: "./images/PortfolioWebsite.png",
    desc: `Personal Portfolio Website Deployed by github pages`,
  },
  {
    id: 6,
    title: "Stock Web Application",
    category: "Python",
    link: "https://github.com/mdial009/Stock-Web-Application",
    img: "./images/StockWebApplication1.png",
    desc: `This is a stock market dashboard to show some charts and data on some stock`,
  },
  {
    id: 7,
    title: "Github Users",
    category: "React",
    category2: "Javascript",
    category3: "HTML",
    category4: "CSS",
    link: "https://github.com/mdial009/Github-User-Project",
    img: "./images/GithubUserProject.png",
    desc: `A React App that lets you search up different users on GitHub using GitHub API. You are able to see different stats about the users(Followers/Following, Repos)`,
  },
  {
    id: 8,
    title: "Discord Bot",
    category: "Javascript",
    link: "https://github.com/mdial009/Discord-Bot",
    img: "./images/DiscordBot.png",
    desc: `Created a Discord Bot With Node.js that allows the user to ban/kick a person. As well as remove/assign a role to a person by having them react to a message.  `,
  },
];
// ********** Project Section (Filiter) ************

// get parent element
const sectionCenter = document.querySelector(".section-centermenu");
const btnContainer = document.querySelector(".btn-containermenu");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <a href=${item.link}>Github</a>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all", "Unity", "C#", "CSS", "Javascript", "React"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<div class="button-typewriter">
         <button class="filter-btn" data-id=${category}><p> ${category}</p>
      </button> 
    </div>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const category2 = e.currentTarget.dataset.id;
      const category3 = e.currentTarget.dataset.id;
      const category4 = e.currentTarget.dataset.id;

      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
        if (menuItem.category2 === category2) {
          return menuItem;
        }
        if (menuItem.category3 === category3) {
          return menuItem;
        }
        if (menuItem.category4 === category4) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

// ********** Nav Section ************
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function (e) {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});

// ********** Dark Mode ************
function applyTheme(theme) {
  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "auto";

  applyTheme(savedTheme);
});

// ********** Set Date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** End Of Set Date ************

// ********** Cursor ************
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e)
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
  console.log(scrollY);
});
window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});

// ********** End Of Cursor ************
