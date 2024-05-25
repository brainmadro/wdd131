const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    image: {
      src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
      alt: "Aba Nigeria Temple"
    }
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    image: {
      src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
      alt: "Manti Utah Temple",
    }
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    image: {
      src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
      alt: "Payson Utah Temple"
    }
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    image: {
      src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
      alt: "Yigo Guam Temple"
    }
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    image: {
      src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
      alt: "Washington D.C. Temple"
    }
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    image: {
      src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
      alt: "Lima Perú Temple"
    }
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    image: {
      src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
      alt: "Mexico City Mexico Temple"
    }
    
  },
  {
    templeName: "Albuquerque New Mexico",
    location: "Albuquerque, New Mexico",
    dedicated: "2000, March, 5",
    area: 34245,
    image: {
      src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/1280x800/albuquerque-temple-lds-137883-wallpaper.jpg",
      alt: "Albuquerque New Mexico Temple"
    }
    
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    image: {
      src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/1200x675/accra-ghana-temple-detail-249022-2400x1200.jpg",
      alt: "Accra Ghana Temple"
    }
  },
  {
    templeName: "Boise Idaho",
    location: "Boise, Idaho",
    dedicated: "1987, May, 29",
    area: 35868,
    image: {
      src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/1280x800/boise-idaho-temple-exterior-2012-1029111-wallpaper.jpg",
      alt: "Boise Idaho Temple"
    }
  },
  {
    templeName: "Arequipa Peru",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    image: {
      src: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/1280x800/4-48661c257177c19a0f39a3991b1a7e7aa0338487.jpeg",
      alt: "Arequipa Peru Temple"
    }
  }
];

const menu$ = document.querySelector(".menu-content");
const navbar$ = document.querySelector("nav");
const sectionTitle$ = document.querySelector("#sectionTitle");
const imagesContainer$ = document.querySelector("#templeImages");
const hamburger$ = document.querySelector(".hamburger");

hamburger$.addEventListener("click", function () {
  hamburger$.classList.toggle("isactive");
  navbar$.classList.toggle("active");
});

for (const element of menu$.children) {
  element.addEventListener("click", (event) => {
    const category = event.target.dataset.category;
    imagesContainer$.innerHTML = "";
    populateGallery(category);
    hamburger$.classList.remove("isactive");
    navbar$.classList.remove("active");
  });
}

function populateGallery(category) {
  const filteredTemples = {
    home: temples,
    old: temples.filter(t => Number(t.dedicated.split(',')[0]) < 1900),
    new: temples.filter(t => Number(t.dedicated.split(',')[0]) > 2000),
    large: temples.filter(t => t.area > 90000),
    small: temples.filter(t => t.area < 10000)
  };

  sectionTitle$.innerHTML =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  if (imagesContainer$) {
    filteredTemples[category].forEach(temple => {
      imagesContainer$.innerHTML += `
        <div class="temple-card">
          <h3>${temple.templeName}</h3>
          <span>LOCATION: ${temple.location}</span>
          <span>DEDICATEED: ${temple.dedicated}</span>
          <span>SIZE: ${temple.area} sq ft</span>
          <img loading="lazy" src="${temple.image.src}" alt="${temple.image.alt}">
        </div>`;
    });
  }
}

populateGallery("home");
