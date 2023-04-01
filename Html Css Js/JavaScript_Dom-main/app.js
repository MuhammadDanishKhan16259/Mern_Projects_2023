// ========
// database
// ========
const Mobiles = {
  samsung: {
    cover: {
      image: "./images/cover/cover1.jpg",
      name: "Samsung",
    },
    models: {
      SamsungGalaxyA04s: {
        image: "./images/models/samsung/model1.jpg",
        name: "Samsung Galaxy A04s",
      },
      SamsungGalaxyA04: {
        image: "./images/models/samsung/model2.jpg",
        name: "Samsung Galaxy A04",
      },
      SamsungGalaxyM135G: {
        image: "./images/models/samsung/model3.jpg",
        name: "Samsung Galaxy M13 5G",
      },
      SamsungGalaxyA13: {
        image: "./images/models/samsung/model4.jpg",
        name: "Samsung Galaxy A13",
      },
      SamsungGalaxyXcover6Pro: {
        image: "./images/models/samsung/model5.jpg",
        name: "Samsung Galaxy Xcover6 Pro",
      },
      SamsungGalaxyS20FE: {
        image: "./images/models/samsung/model6.jpg",
        name: "Samsung Galaxy S20 FE 2022",
      },
    },
  },
  apple: {
    cover: {
      image: "./images/cover/cover2.jpg",
      name: "Apple",
    },
    models: {
      AppleiPhoneXSMax: {
        image: "./images/models/apple/model7.jpg",
        name: "Apple iPhone XS Max",
      },
      AppleiPhone13ProMax: {
        image: "./images/models/apple/model2.jpg",
        name: "Apple iPhone 13 Pro Max",
      },
      AppleiPhone12ProMax: {
        image: "./images/models/apple/model3.jpg",
        name: "Apple iPhone 12 Pro Max",
      },
      AppleiPhone12: {
        image: "./images/models/apple/model4.jpg",
        name: "Apple iPhone 12",
      },
      AppleiPhoneSE: {
        image: "./images/models/apple/model5.jpg",
        name: "Apple iPhone SE (2020)",
      },
      AppleiPhoneXR: {
        image: "./images/models/apple/model6.jpg",
        name: "Apple iPhone XR",
      },
    },
  },
  xiaomi: {
    cover: {
      image: "./images/cover/cover3.jpg",
      name: "Xiaomi",
    },
    models: {
      XiaomiRedmiNote11SE: {
        image: "./images/models/xiaomi/model1.jpg",
        name: "Xiaomi Redmi Note 11 SE (India)",
      },
      XiaomiPocoM45G: {
        image: "./images/models/xiaomi/model2.jpg",
        name: "Xiaomi Poco M4 5G",
      },
      Xiaomi12SUltra: {
        image: "./images/models/xiaomi/model3.jpg",
        name: "Xiaomi 12S Ultra",
      },
      Xiaomi12Pro: {
        image: "./images/models/xiaomi/model4.jpg",
        name: "Xiaomi 12 Pro (Dimensity)",
      },
      XiaomiPocoX4GT: {
        image: "./images/models/xiaomi/model5.jpg",
        name: "Xiaomi Poco X4 GT",
      },
      XiaomiRedmiNote11TPro: {
        image: "./images/models/xiaomi/model6.jpg",
        name: "Xiaomi Redmi Note 11T Pro",
      },
    },
  },
  honor: {
    cover: {
      image: "./images/cover/cover4.jpg",
      name: "Honor",
    },
    models: {
      HonorX85G: {
        image: "./images/models/honor/model1.jpg",
        name: "Honor X8 5G",
      },
      HonorX40i: {
        image: "./images/models/honor/model2.jpg",
        name: "Honor X40i",
      },
      Honor70Pro: {
        image: "./images/models/honor/model3.jpg",
        name: "Honor 70 Pro",
      },
      HonorPlay6TPro: {
        image: "./images/models/honor/model4.jpg",
        name: "Honor Play6T Pro",
      },
      HonorX8: {
        image: "./images/models/honor/model5.jpg",
        name: "Honor X8",
      },
      HonorX30Max: {
        image: "./images/models/honor/model6.jpg",
        name: "Honor X30 Max",
      },
    },
  },
};

// =======
// company
// =======
let company = document.querySelector(".company");

// ==========================================
// in the drop-down, all companies' value set
// ==========================================
const allCompany = () => {
  for (let i in Mobiles) {
    let option = document.createElement("option");
    option.innerHTML = i;
    company.appendChild(option);
  }
};

allCompany();

// ==================
// Main Function Data
// ==================
const data = (event) => {
  let cover = document.querySelector(".cover");
  let companyName = document.querySelector(".companyName");
  let allCards = document.querySelector(".allCards");
  let mobileData;

  if (event === undefined) {
    mobileData = Mobiles.samsung;
  } else {
    mobileData = Mobiles[event.value];
  }

  cover.style.backgroundImage = `linear-gradient(#1b1a3275,
    #1b1a3275,
    #1b1a3275,
    #1b1a3275), url(${mobileData.cover.image})`;
  companyName.innerHTML = mobileData.cover.name;
  allCards.innerHTML = "";

  for (let i in mobileData.models) {
    let card1 = document.createElement("div");
    let img = document.createElement("img");
    let button = document.createElement("button");

    card1.className = "card1";
    img.setAttribute("src", mobileData.models[i].image);
    button.innerHTML = mobileData.models[i].name;

    card1.appendChild(img);
    card1.appendChild(button);
    allCards.appendChild(card1);
  }
};

// ===================
// budefault set value
// ===================
window.addEventListener("load", () => {
  data();
});

// ========================
// Search value in database
// ========================
const search = () => {
  let searchValue = document.querySelector(".searchValue");
  let searchArea = document.querySelector(".searchArea");
  let removeSpaceBetweenSearchValue = "";

  for (let i = 0; i < searchArea.value.length; i++) {
    if (searchArea.value[i] !== " ") {
      removeSpaceBetweenSearchValue += searchArea.value[i];
    }
  }

  let selectdCompany =
    Mobiles[company.value].models[removeSpaceBetweenSearchValue];

  if (selectdCompany === undefined) {
    alert("Your value is not found in our database please try another value. ");
    searchArea.value = "";
    searchArea.focus();
  } else {
    searchValue.style.display = "block";

    let image = document.querySelector(".searchProductImage");
    let button = document.querySelector(".searchProductName");

    image.setAttribute("src", selectdCompany.image);
    button.innerHTML = selectdCompany.name;

    window.scrollTo(0, 600);
    searchArea.value = "";
  }
};
