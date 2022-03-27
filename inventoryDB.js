const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/categoryDB", {
  useNewUrlParser: true,
});

const itemSchema = mongoose.Schema({
  itemcategory: { type: String, required: true },
  itemId: { type: Number, required: true, unique: true },
  itemname: { type: String, required: true },
  itemPrice: { type: Number, required: true },
  Stock: { type: Number, required: true },
  itemSold: { type: Number, required: true },
});

const Item = mongoose.model("Item", itemSchema);
////////////////////////////////Fruits and Vegetables///////////////////////////////////////
const apple = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 101,
  itemname: "Apple",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const banana = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 102,
  itemname: "Banana",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const peach = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 103,
  itemname: "peach",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const pineapple = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 104,
  itemname: "pineapple",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const grape = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 105,
  itemname: "grapes",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const grava = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 106,
  itemname: "grava",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const tomato = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 107,
  itemname: "tomato",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const potato = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 108,
  itemname: "potato",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const celery = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 109,
  itemname: "celery",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const cabbage = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 110,
  itemname: "cabbage",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const kale = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 111,
  itemname: "kale",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const lettuce = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 112,
  itemname: "lettuce",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const bok_choy = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 113,
  itemname: "bok choy",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const spinach = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 114,
  itemname: "spinach",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const romaine_hearts = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 115,
  itemname: "romaine hearts",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const green_peper = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 116,
  itemname: "green peper",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});

const partlySkimmedMilk = new Item({
  itemcategory: "Dairy and eggs",
  itemId: 201,
  itemname: "2% Partly Skimmed Milk 2L",
  itemPrice: 4.29,
  Stock: 10,
  itemSold: 10,
});
const homogenizedMilk = new Item({
  itemcategory: "Dairy and eggs",
  itemId: 202,
  itemname: "3.25% Homogenized Milk 4L",
  itemPrice: 5.79,
  Stock: 10,
  itemSold: 10,
});

const whiteEggs = new Item({
  itemcategory: "Dairy and eggs",
  itemId: 203,
  itemname: "White Eggs 12pk",
  itemPrice: 3.88,
  Stock: 10,
  itemSold: 10,
});

const MarbleCheese = new Item({
  itemcategory: "Dairy and eggs",
  itemId: 204,
  itemname: "Marble Cheddar Cheese",
  itemPrice: 6.47,
  Stock: 10,
  itemSold: 10,
});
const saltedButter = new Item({
  itemcategory: "Dairy and eggs",
  itemId: 205,
  itemname: "Salted Butter",
  itemPrice: 5.97,
  Stock: 10,
  itemSold: 10,
});

const sourCream = new Item({
  itemcategory: "Dairy and eggs",
  itemId: 206,
  itemname: "Sour Cream",
  itemPrice: 2.28,
  Stock: 10,
  itemSold: 10,
});

const creamCheese = new Item({
  itemcategory: "Dairy and eggs",
  itemId: 207,
  itemname: "Cream Cheese",
  itemPrice: 2.47,
  Stock: 10,
  itemSold: 10,
});

const paneer = new Item({
  itemcategory: "Dairy and eggs",
  itemId: 208,
  itemname: "Paneer",
  itemPrice: 4.97,
  Stock: 10,
  itemSold: 10,
});

const parmesanCheese = new Item({
  itemcategory: "Dairy and eggs",
  itemId: 209,
  itemname: "Parmesan Cheese",
  itemPrice: 4.98,
  Stock: 10,
  itemSold: 10,
});

const plainYogurt = new Item({
  itemcategory: "Dairy and eggs",
  itemId: 210,
  itemname: "Plain Yogurt",
  itemPrice: 2.18,
  Stock: 10,
  itemSold: 10,
});
//////////////////////////////////////Bakery////////////////////////////////////////
const brownies = new Item({
  itemcategory: "Bakery",
  itemId: 301,
  itemname: "Brownies",
  itemPrice: 4.97,
  Stock: 10,
  itemSold: 10,
});

const pizzaBuns = new Item({
  itemcategory: "Bakery",
  itemId: 302,
  itemname: "Pizza Buns 6pk",
  itemPrice: 5.47,
  Stock: 10,
  itemSold: 10,
});

const cheeseBagels = new Item({
  itemcategory: "Bakery",
  itemId: 303,
  itemname: "Cheese Bagels 4pk",
  itemPrice: 2,
  Stock: 10,
  itemSold: 10,
});

const chocolatineCroissant = new Item({
  itemcategory: "Bakery",
  itemId: 304,
  itemname: "Chocolatine Croissant",
  itemPrice: 3.77,
  Stock: 10,
  itemSold: 10,
});

const whiteBread = new Item({
  itemcategory: "Bakery",
  itemId: 305,
  itemname: "White Bread",
  itemPrice: 1.67,
  Stock: 10,
  itemSold: 10,
});

const wholeWheatBread = new Item({
  itemcategory: "Bakery",
  itemId: 306,
  itemname: "100% Whole Wheat Bread",
  itemPrice: 1.67,
  Stock: 10,
  itemSold: 10,
});

const croissant = new Item({
  itemcategory: "Bakery",
  itemId: 307,
  itemname: "Croissant 6pk",
  itemPrice: 3.47,
  Stock: 10,
  itemSold: 10,
});

const blueberryMuffinTub = new Item({
  itemcategory: "Bakery",
  itemId: 308,
  itemname: "Blueberry Muffin Tub",
  itemPrice: 4.27,
  Stock: 10,
  itemSold: 10,
});

const applePie = new Item({
  itemcategory: "Bakery",
  itemId: 309,
  itemname: "Apple Crumble Pie",
  itemPrice: 6.47,
  Stock: 10,
  itemSold: 10,
});

const lemonTarts = new Item({
  itemcategory: "Bakery",
  itemId: 310,
  itemname: "Lemon Tarts",
  itemPrice: 3.47,
  Stock: 10,
  itemSold: 10,
});
//////////////////////////////Meat and Seafood/////////////////////////////////////////
const leanGroundBeef = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 401,
  itemname: "Lean Ground Beef 450g",
  itemPrice: 6.47,
  Stock: 10,
  itemSold: 10,
});
const chickenBreast = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 402,
  itemname: "Chicken Breast",
  itemPrice: 12,
  Stock: 10,
  itemSold: 10,
});
const bacon = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 403,
  itemname: "Bacon",
  itemPrice: 4.77,
  Stock: 10,
  itemSold: 10,
});
const weiners = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 404,
  itemname: "Original Wieners",
  itemPrice: 5,
  Stock: 10,
  itemSold: 10,
});
const drumsticks = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 405,
  itemname: "Lilydale Drumsticks",
  itemPrice: 14.31,
  Stock: 10,
  itemSold: 10,
});
const chickenKabobs = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 406,
  itemname: "Chicken Kabobs",
  itemPrice: 10.97,
  Stock: 10,
  itemSold: 10,
});
const beefStewingCubes = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 407,
  itemname: "Angus Beef Stewing Cubes",
  itemPrice: 19.78,
  Stock: 10,
  itemSold: 10,
});
const beefStripLoinSteak = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 408,
  itemname: "Beef Strip Loin Steak",
  itemPrice: 42.9,
  Stock: 10,
  itemSold: 10,
});
const halalChickenThighs = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 409,
  itemname: "Halal Chicken Thighs",
  itemPrice: 11.35,
  Stock: 10,
  itemSold: 10,
});

const portMeatball = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 410,
  itemname: "Italian Style Pork Meatballs",
  itemPrice: 5,
  Stock: 10,
  itemSold: 10,
});

const pollockFillets = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 411,
  itemname: "Pollock Fillets",
  itemPrice: 9.97,
  Stock: 10,
  itemSold: 10,
});
const flakeStyleSurimi = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 412,
  itemname: "Flake Style Surimi",
  itemPrice: 2.97,
  Stock: 10,
  itemSold: 10,
});
const beefPotRoast = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 413,
  itemname: "Beef Pot Roast",
  itemPrice: 8.97,
  Stock: 10,
  itemSold: 10,
});
const smokyBBQPorkBackRibs = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 414,
  itemname: "Smoky BBQ Pork Back Ribs",
  itemPrice: 12.97,
  Stock: 10,
  itemSold: 10,
});
const turkeyFranks = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 415,
  itemname: "Turkey Franks",
  itemPrice: 3.77,
  Stock: 10,
  itemSold: 10,
});

const chineseStylePorkSausage = new Item({
  itemcategory: "Meat and Seafood",
  itemId: 416,
  itemname: "Chinese Style Pork Sausage",
  itemPrice: 5.97,
  Stock: 10,
  itemSold: 10,
});
////////////////////////////////Snacks and Cookies///////////////////////////////////
const regularPotatoChips = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 501,
  itemname: "Regular Potato Chips 200g",
  itemPrice: 1,
  Stock: 10,
  itemSold: 10,
});

const juJubesCandy = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 502,
  itemname: "JuJubes Candy",
  itemPrice: 1,
  Stock: 10,
  itemSold: 10,
});
const milkChocolatebar = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 503,
  itemname: "Milk Chocolate bar",
  itemPrice: 1,
  Stock: 10,
  itemSold: 10,
});
const animalCookies = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 504,
  itemname: "Animal Cookies",
  itemPrice: 2.12,
  Stock: 10,
  itemSold: 10,
});
const mintCookies = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 505,
  itemname: "Mint Cookies",
  itemPrice: 2.57,
  Stock: 10,
  itemSold: 10,
});
const honeyGrahamWafers = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 506,
  itemname: "Honey Graham Wafers",
  itemPrice: 3,
  Stock: 10,
  itemSold: 10,
});
const shortbreadCookies = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 507,
  itemname: "Shortbread Cookies",
  itemPrice: 3.15,
  Stock: 10,
  itemSold: 10,
});
const oreo = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 508,
  itemname: "OREO Mini 6 Snak Paks 180g",
  itemPrice: 2.27,
  Stock: 10,
  itemSold: 10,
});
const gingerBiscuits = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 509,
  itemname: "Ginger Biscuits",
  itemPrice: 1.28,
  Stock: 10,
  itemSold: 10,
});
const rainbowChocolateChipCookies = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 510,
  itemname: "Rainbow Chocolate Chip Cookies 258g",
  itemPrice: 2.97,
  Stock: 10,
  itemSold: 10,
});
const digestiveBiscuit = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 511,
  itemname: "Digestive Biscuit",
  itemPrice: 2.97,
  Stock: 10,
  itemSold: 10,
});
const pocky = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 512,
  itemname: "Pocky Strawberry Cream Coated Biscuit Stick",
  itemPrice: 1.57,
  Stock: 10,
  itemSold: 10,
});

//////////////////////////////Beverages////////////////////////////////////////
const springWater = new Item({
  itemcategory: "Beverages",
  itemId: 601,
  itemname: "Spring Water 24pk",
  itemPrice: 2.97,
  Stock: 10,
  itemSold: 10,
});
const orangeJuice = new Item({
  itemcategory: "Beverages",
  itemId: 602,
  itemname: "Orange Juice 2.5L",
  itemPrice: 3.27,
  Stock: 10,
  itemSold: 10,
});
const appleJuice = new Item({
  itemcategory: "Beverages",
  itemId: 603,
  itemname: "100% Pure Apple Juice 1L",
  itemPrice: 2,
  Stock: 10,
  itemSold: 10,
});
const redBull = new Item({
  itemcategory: "Beverages",
  itemId: 604,
  itemname: "Red Bull Energy Drink",
  itemPrice: 2.98,
  Stock: 10,
  itemSold: 10,
});
const lemonade = new Item({
  itemcategory: "Beverages",
  itemId: 605,
  itemname: "Lemonade 1.98L",
  itemPrice: 2,
  Stock: 10,
  itemSold: 10,
});
const vitaminWater = new Item({
  itemcategory: "Beverages",
  itemId: 606,
  itemname: "Vitamin Water 591ml",
  itemPrice: 1.97,
  Stock: 10,
  itemSold: 10,
});
const pineappleJuice = new Item({
  itemcategory: "Beverages",
  itemId: 607,
  itemname: "Pineapple Juice",
  itemPrice: 4.48,
  Stock: 10,
  itemSold: 10,
});
const greenTea = new Item({
  itemcategory: "Beverages",
  itemId: 608,
  itemname: "Green Tea",
  itemPrice: 1.77,
  Stock: 10,
  itemSold: 10,
});
const instantCoffee = new Item({
  itemcategory: "Beverages",
  itemId: 609,
  itemname: "Instant Coffee",
  itemPrice: 3.74,
  Stock: 10,
  itemSold: 10,
});
const hotChocolate = new Item({
  itemcategory: "Beverages",
  itemId: 610,
  itemname: "marshmallow Hot Chocolate",
  itemPrice: 3.37,
  Stock: 10,
  itemSold: 10,
});
const grapefruitCocktail = new Item({
  itemcategory: "Beverages",
  itemId: 611,
  itemname: "Grapefruit Cocktail",
  itemPrice: 2.97,
  Stock: 10,
  itemSold: 10,
});
const coconutWater = new Item({
  itemcategory: "Beverages",
  itemId: 612,
  itemname: "Vita Coco Pure Coconut Water",
  itemPrice: 4.67,
  Stock: 10,
  itemSold: 10,
});
const earlGrey = new Item({
  itemcategory: "Beverages",
  itemId: 613,
  itemname: "Earl Grey Black Tea",
  itemPrice: 2.37,
  Stock: 10,
  itemSold: 10,
});
const rooibos = new Item({
  itemcategory: "Beverages",
  itemId: 614,
  itemname: "Vanilla Rooibos Red Tea",
  itemPrice: 2.37,
  Stock: 10,
  itemSold: 10,
});
const appleCider = new Item({
  itemcategory: "Beverages",
  itemId: 615,
  itemname: "Sweet Apple Cider 3L",
  itemPrice: 7.97,
  Stock: 10,
  itemSold: 10,
});
const tomatoJuice = new Item({
  itemcategory: "Beverages",
  itemId: 616,
  itemname: "Tomato Juice 1.89L",
  itemPrice: 2.58,
  Stock: 10,
  itemSold: 10,
});
/////////////////////////////////////////////////////////////////////


Item.deleteMany({});

Item.insertMany(
  [
    apple,
    banana,
    peach,
    pineapple,
    grape,
    grava,
    tomato,
    potato,
    celery,
    cabbage,
    kale,
    lettuce,
    bok_choy,
    spinach,
    romaine_hearts,
    green_peper,
    brownies,
    pizzaBuns,
    cheeseBagels,
    chocolatineCroissant,
    whiteBread,
    wholeWheatBread,
    croissant,
    blueberryMuffinTub,
    applePie,
    lemonTarts,
    partlySkimmedMilk,
    homogenizedMilk,
    whiteEggs,
    MarbleCheese,
    saltedButter,
    sourCream,
    creamCheese,
    paneer,
    parmesanCheese,
    plainYogurt,
    leanGroundBeef,
    chickenBreast,
    bacon,
    weiners,
    drumsticks,
    chickenKabobs,
    beefStewingCubes,
    beefStripLoinSteak,
    halalChickenThighs,
    portMeatball,
    pollockFillets,
    flakeStyleSurimi,
    beefPotRoast,
    smokyBBQPorkBackRibs,
    turkeyFranks,
    chineseStylePorkSausage,
    regularPotatoChips,
    juJubesCandy,
    milkChocolatebar,
    animalCookies,
    mintCookies,
    honeyGrahamWafers,
    shortbreadCookies,
    oreo,
    gingerBiscuits,
    rainbowChocolateChipCookies,
    digestiveBiscuit,
    pocky,
    springWater,
    orangeJuice,
    appleJuice,
    redBull,
    lemonade,
    vitaminWater,
    pineappleJuice,
    greenTea,
    instantCoffee,
    hotChocolate,
    grapefruitCocktail,
    coconutWater,
    earlGrey,
    rooibos,
    appleCider,
    tomatoJuice,
  ],
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("items db created successfully");
      mongoose.connection.close();
    }
  }
);

module.exports = Item;
