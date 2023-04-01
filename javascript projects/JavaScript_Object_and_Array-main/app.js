// ==================
// Nested Object
// ==================

let obj = {
  popular: {
    ChickenBriyani: {
      name: "Chicken Briyani",
      detail: "Net weight half kg",
      image: "./images/popular/pic1.jpg",
      price: 330,
    },
    BeefBriyani: {
      name: "Beef Briyani",
      detail: "Net weight half kg",
      image: "./images/popular/pic2.jpg",
      price: 400,
    },
  },
  SpecialItems: {
    BeefQorma: {
      name: "Beef Qorma",
      image: "./images/special items/pic1.jpg",
      price: 420,
    },
    ChickenHandiBonless: {
      name: "Chicken Handi Bonless",
      image: "./images/popular/pic2.jpg",
      detail:
        "Flavor explosion made by high heat, chicken, herbs, spices, and lots of...",
      price: 1300,
    },
  },
  ChickenChargha: {
    name: "Chicken Chargha",
    detail: "Meat cooked in a pot, with oil, vegetables and spices",
    image: "./images/chicken chargha/pic1.jpg",
    price: 700,
  },
  MuttonKarahi: {
    name: "Plain Mutton Karahi",
    detail: "Half/Full",
    image: "./images/mutton karahi/pic1.jpg",
    price: 2000,
  },
  ChickenKarahi: {
    name: "Plain Chicken Karahi",
    detail: "Half/Full",
    image: "./images/chicken karahi/pic1.jpg",
    price: 950,
  },
  BarBQ: {
    name: "Chicken Tikka Leg",
    detail: "Serves 1",
    image: "./images/bar bq/pic1.jpg",
    price: 400,
  },
  Rolls: {
    name: "Shawarma Roll",
    detail: "Chicken",
    image: "./images/rolls/pic1.jpg",
    price: 250,
  },
  Kabab: {
    name: "Reshami Kabab",
    detail: "Serves 1",
    image: "./images/kabab/pic1.jpg",
    price: 480,
  },
  Savouries: {
    name: "Gol Gappay",
    detail: "12 Pieces",
    image: "./images/savouries/pic1.jpg",
    price: 220,
  },
  Tandoor: {
    name: "Puri Paratha",
    image: "./images/tandoor/pic1.jpg",
    price: 120,
  },
  IceCream: {
    name: "Caramel Crunch Ice Cream",
    detail: "Single Scoop/2 Scoops/Half Liter/Family Pack",
    image: "./images/ice creame shakes/pic1.jpg",
    price: 110,
  },
};

// ================================================================================================
// Copy the nested value(s) (using the SPREAD OPERATOR) and then store it in a separate variable(s).
// ================================================================================================

console.log("========================");
console.log("Object nested value copy");
console.log("========================");

console.log(obj);

let popularItem1 = { ...obj.popular.ChickenBriyani };
let popularItem2 = { ...obj.popular.BeefBriyani };

console.log(popularItem1);
console.log(popularItem2);

let SpecialItem1 = { ...obj.SpecialItems.BeefQorma };
let SpecialItem2 = { ...obj.SpecialItems.ChickenHandiBonless };

console.log(SpecialItem1);
console.log(SpecialItem2);

let ChickenChargha = { ...obj.ChickenChargha };

console.log(ChickenChargha);

let MuttonKarahi = { ...obj.MuttonKarahi };

console.log(MuttonKarahi);

let ChickenKarahi = { ...obj.ChickenKarahi };

console.log(ChickenKarahi);

let BarBQ = { ...obj.BarBQ };

console.log(BarBQ);

let Rolls = { ...obj.Rolls };

console.log(Rolls);

let Kabab = { ...obj.Kabab };

console.log(Kabab);

let Savouries = { ...obj.Savouries };

console.log(Savouries);

let Tandoor = { ...obj.Tandoor };

console.log(Tandoor);

let IceCream = { ...obj.IceCream };

console.log(IceCream);

// ==================
// Nested Array
// ==================

let arr = [
  "popular",
  [
    "ChickenBriyani",
    ["Chicken Briyani", "Net weight half kg", "./images/popular/pic1.jpg", 330],
    "BeefBriyani",
    ["Beef Briyani", "Net weight half kg", "./images/popular/pic2.jpg", 400],
  ],
  "SpecialItems",
  [
    "BeefQorma",
    ["Beef Qorma", "./images/special items/pic1.jpg", 420],
    "ChickenHandiBonless",
    [
      "Chicken Handi Bonless",
      "./images/popular/pic2.jpg",
      "Flavor explosion made by high heat, chicken, herbs, spices, and lots of...",
      1300,
    ],
  ],
  [
    "ChickenChargha",
    [
      "Chicken Chargha",
      "Meat cooked in a pot, with oil, vegetables and spices",
      "./images/chicken chargha/pic1.jpg",
      700,
    ],
  ],
  [
    "MuttonKarahi",
    [
      "Plain Mutton Karahi",
      "Half/Full",
      "./images/mutton karahi/pic1.jpg",
      2000,
    ],
  ],
  [
    "ChickenKarahi",
    [
      "Plain Chicken Karahi",
      "Half/Full",
      "./images/chicken karahi/pic1.jpg",
      950,
    ],
  ],
  ["BarBQ", ["Chicken Tikka Leg", "Serves 1", "./images/bar bq/pic1.jpg", 400]],
  ["Rolls", ["Shawarma Roll", "Chicken", "./images/rolls/pic1.jpg", 250]],
  ["Kabab", ["Reshami Kabab", "Serves 1", "./images/kabab/pic1.jpg", 480]],
  [
    "Savouries",
    ["Gol Gappay", "12 Pieces", "./images/savouries/pic1.jpg", 220],
  ],
  ["Tandoor", ["Puri Paratha", "./images/tandoor/pic1.jpg", 120]],
  [
    "IceCream",
    [
      "Caramel Crunch Ice Cream",
      "Single Scoop/2 Scoops/Half Liter/Family Pack",
      "./images/ice creame shakes/pic1.jpg",
      110,
    ],
  ],
];

// ================================================================================================
// Copy the nested value(s) (using the SPREAD OPERATOR) and then store it in a separate variable(s).
//================================================================================================

console.log("=======================");
console.log("Array nested value copy");
console.log("=======================");

console.log(arr);

let popular1Items = [...arr[1]];
console.log(popular1Items);

let popular1Item1 = [...arr[1][1]];
console.log(popular1Item1);

let popular1Item2 = [...arr[1][3]];
console.log(popular1Item2);

let Special1Items = [...arr[3]];
console.log(Special1Items);

let Special1Item1 = [...arr[3][1]];
console.log(Special1Item1);

let Special1Item2 = [...arr[3][3]];
console.log(Special1Item2);

let ChickenChargha1 = [...arr[4]];
console.log(ChickenChargha1);

let ChickenChargha1Value = [...arr[4][1]];
console.log(ChickenChargha1Value);

let MuttonKarahi1 = [...arr[5]];
console.log(MuttonKarahi1);

let MuttonKarahi1Value = [...arr[5][1]];
console.log(MuttonKarahi1Value);

let ChickenKarahi1 = [...arr[6]];
console.log(ChickenKarahi1);

let ChickenKarahi1Value = [...arr[6][1]];
console.log(ChickenKarahi1Value);

let BarBQ1 = [...arr[7]];
console.log(BarBQ1);

let BarBQ1Value = [...arr[7][1]];
console.log(BarBQ1Value);

let Rolls1 = [...arr[8]];
console.log(Rolls1);

let Rolls1Value = [...arr[8][1]];
console.log(Rolls1Value);

let Kabab1 = [...arr[9]];
console.log(Kabab1);

let Kabab1Value = [...arr[9][1]];
console.log(Kabab1Value);

let Savouries1 = [...arr[10]];
console.log(Savouries1);

let Savouries1Value = [...arr[10][1]];
console.log(Savouries1Value);

let Tandoor1 = [...arr[11]];
console.log(Tandoor1);

let Tandoor1Value = [...arr[11][1]];
console.log(Tandoor1Value);

let IceCream1 = [...arr[12]];
console.log(IceCream1);

let IceCream1Value = [...arr[12][1]];
console.log(IceCream1Value);
