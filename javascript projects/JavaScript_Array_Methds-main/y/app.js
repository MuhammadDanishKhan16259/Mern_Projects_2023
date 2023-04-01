// ********
// Data
// ********
const mobile = [
  {
    companyName: "Samsung",
    cover: ["./images/cover/cover1.jpg", "Samsung"],
    models: [
      {
        name: "SamsungGalaxyA04s",
        item: ["./images/models/samsung/model1.jpg", "Samsung Galaxy A04s"],
      },
      {
        name: "SamsungGalaxyA04",
        item: ["./images/models/samsung/model2.jpg", "Samsung Galaxy A04"],
      },
      {
        name: "SamsungGalaxyM135G",
        item: ["./images/models/samsung/model3.jpg", "Samsung Galaxy M13 5G"],
      },
      {
        name: "SamsungGalaxyA13",
        item: ["./images/models/samsung/model4.jpg", "Samsung Galaxy A13"],
      },
      {
        name: "SamsungGalaxyXcover6Pro",
        item: [
          "./images/models/samsung/model5.jpg",
          "Samsung Galaxy Xcover6 Pro",
        ],
      },
      {
        name: "SamsungGalaxyS20FE",
        item: [
          "./images/models/samsung/model6.jpg",
          "Samsung Galaxy S20 FE 2022",
        ],
      },
    ],
  },
  {
    companyName: "apple",
    cover: ["./images/cover/cover2.jpg", "Apple"],
    models: [
      {
        name: "AppleiPhoneXSMax",
        item: ["./images/models/apple/model7.jpg", "Apple iPhone XS Max"],
      },
      {
        name: "AppleiPhone13ProMax",
        item: ["./images/models/apple/model2.jpg", "Apple iPhone 13 Pro Max"],
      },
      {
        name: "AppleiPhone12ProMax",
        item: ["./images/models/apple/model3.jpg", "Apple iPhone 12 Pro Max"],
      },
      {
        name: "AppleiPhone12",
        item: ["./images/models/apple/model4.jpg", "Apple iPhone 12"],
      },
      {
        name: "AppleiPhoneSE",
        item: ["./images/models/apple/model5.jpg", "Apple iPhone SE (2020)"],
      },
      {
        name: "AppleiPhoneXR",
        item: ["./images/models/apple/model6.jpg", "Apple iPhone XR"],
      },
    ],
  },
];

// *******************************
// First Method (forEach, filter)
// *******************************
// let company = document.getElementById("company");
// let model = document.getElementById("modle");

// mobile.forEach((value) => {
//   let option = document.createElement("option");
//   option.innerHTML = value.companyName;
//   company.appendChild(option);
// });

// company.addEventListener("change", () => {
//   model.innerHTML = "";
//   mobile.forEach((value) => {
//     if (value.companyName === company.value) {
//       model.disabled = false;
//       value.models.forEach((value) => {
//         let option = document.createElement("option");
//         option.innerHTML = value.name;
//         model.appendChild(option);
//       });
//     }
//   });
// });

// function data() {
//   mobile.filter((val) => {
//     if (val.companyName === company.value) {
//       val.models.filter((val1) => {
//         if (val1.name === model.value) {
//           console.log(val1.item);
//         }
//       });
//     }
//   });
// }

// **************************
// Second Method (map, find)
// **************************
let company = document.getElementById("company");
let model = document.getElementById("modle");

let image = document.querySelector(".image");
let heading = document.querySelector(".heading");
let card = document.querySelector(".card");

let cname = mobile.map((value) => {
  return value.companyName;
});

cname.forEach((value) => {
  let option = document.createElement("option");
  option.innerHTML = value;
  company.appendChild(option);
});

company.addEventListener("change", () => {
  model.innerHTML = "";
  mobile.forEach((value) => {
    if (value.companyName === company.value) {
      model.disabled = false;
      value.models.forEach((value) => {
        let option = document.createElement("option");
        option.innerHTML = value.name;
        model.appendChild(option);
      });
    }
  });
});

const data = () => {
  mobile.find((value) => {
    if (value.companyName === company.value) {
      value.models.find((value) => {
        if (value.name === model.value) {
          card.style.transform = "scale(1)";
          console.log(value.item);
          image.src = value.item[0];
          heading.innerHTML = value.item[1];
        }
      });
    }
  });
};
