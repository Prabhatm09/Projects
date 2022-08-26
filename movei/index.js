const movieArray = [
    {
      id: 1,
      title: "Minious",
      category: "hollywood",
      rating: 7,
      img: "./img/minious.jpg",
      desc: `In 1968, Kevin, Stuart and Bob head to New York and Florida expecting to find a new boss while the rest of their tribe waits for them in Antarctica `,
    },
    {
      id: 2,
      title: "K.G.F",
      category: "tollywood",
      rating: 8.8,
      img: "./img/kgf.png",
      desc: `The film focuses on Rocky, a high-ranking assassin in Mumbai, who was born in poverty`,
    },
    {
      id: 3,
      title: "shershaah",
      category: "bollywood",
      rating: 8,
      img: "./img/shersaha.png",
      desc: `Shershaah is the story of PVC awardee Indian soldier Capt. Vikram Batra, whose bravery and unflinching courage in chasing the Pakistani soldiers out of Indian territory contributed immensely in India finally winning the Kargil War in 1999..`,
    },
    {
      id: 4,
      title: "Dark Knight",
      category: "hollywood",
      rating: 7.8,
      img: "./img/darkKnight.jpg",
      desc: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. `,
    },
    {
      id: 5,
      title: "Pushpa : Part 1",
      category: "tollywood",
      rating: 9.0,
      img: "./img/pushpa.png",
      desc: `Pushpa: The Rise – Part 01 is a 2021 Indian Telugu-language action drama film written and directed by Sukumar. `,
    },
    {
      id: 6,
      title: "Serial Killer",
      category:"bollywood",
      rating: 6,
      img: "./img/serial.png",
      desc: `Beautiful looking Jacqueline,Mohit raina as cop is amazing A good film to watch during the lockdown`,
    },
    {
      id: 7,
      title: "Suicide Squad",
      category: "hollywood",
      rating: 8,
      img: "./img/squad.jpg",
      desc: `several convicts join a task force known as the "Suicide Squad" in exchange for lighter sentences. `,
    },
    {
      id: 8,
      title: "RRR",
      category:"tollywood",
      rating: 8,
      img: "./img/RRR.png",
      desc: `RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem  `,
    },
    {
      id: 9,
      title: "BajiRao Mastani",
      category: "bollywood",
      rating: 9,
      img: "./img/baji.jpg",
      desc: `Based on Nagnath S. Inamdar's Marathi novel Rau, Bajirao Mastani narrates the story of the Maratha Peshwa Bajirao I (1700–1740 AD) and his second wife, Mastani. `,
    },
    {
      id: 10,
      title: "Joker",
      category: "hollywood",
      rating: 9.8,
      img: "./img/horrorjoker.jpg",
      desc: `A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMovieContainer(movieArray);
    displayMovieButtons();
  });
  
  function diplayMovieContainer(movieItems) {
    let displayMovie = movieItems.map(function (item) {
  
  
      return `<article class="movie-container">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="rating">Imdb${item.rating}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMovie = displayMovie.join("");
   
  
    sectionCenter.innerHTML = displayMovie;
  }
  function displayMovieButtons() {
    const categories = movieArray.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        
        const category = e.currentTarget.dataset.id;
        const movieCategory = movieArray.filter(function (movieItems) {
          
          if (movieItems.category === category) {
            return movieItems;
          }
        });
        if (category === "all") {
          diplayMovieContainer(movieArray);
        } else {
          diplayMovieContainer(movieCategory);
        }
      });
    });
  }