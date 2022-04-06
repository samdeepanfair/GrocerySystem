const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/categoryDB", {
  useNewUrlParser: true,
});

const itemSchema = mongoose.Schema({
  itemcategory: { type: String, required: true },
  itemId: { type: Number, required: true, unique: true },
  itemname: { type: String, required: true, unique: true },
  itemPrice: { type: Number, required: true },
  Stock: { type: Number, required: true },
  itemSold: { type: Number, required: true },
});

module.exports = mongoose.model("Item", itemSchema);
const Item = mongoose.model("Item", itemSchema);


////////////////////////////////Fruits and Vegetables///////////////////////////////////////
const apple = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 101,
  itemname: "Apple",
  itemPrice: 11,
  Stock: 10,
  itemSold: 10,
});
const banana = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 102,
  itemname: "Banana",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const peach = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 103,
  itemname: "peach",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const pineapple = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 104,
  itemname: "pineapple",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const grape = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 105,
  itemname: "grapes",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const grava = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 106,
  itemname: "grava",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const tomato = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 107,
  itemname: "tomato",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const potato = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 108,
  itemname: "potato",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const celery = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 109,
  itemname: "celery",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const cabbage = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 110,
  itemname: "cabbage",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const kale = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 111,
  itemname: "kale",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const lettuce = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 112,
  itemname: "lettuce",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const bok_choy = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 113,
  itemname: "bok choy",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const spinach = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 114,
  itemname: "spinach",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const romaine_hearts = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 115,
  itemname: "romaine hearts",
  itemPrice: 10.00,
  Stock: 10,
  itemSold: 10,
});
const green_peper = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 116,
  itemname: "green peper",
  itemPrice: 10.00,
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

const marbleCheese = new Item({
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
  itemPrice: 2.00,
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
//////////////////////////////////Meat and Seafood/////////////////////////////////////////
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
  itemPrice: 12.00,
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
  itemPrice: 5.00,
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
  itemPrice: 42.90,
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
  itemPrice: 5.00,
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
  itemPrice: 1.00,
  Stock: 10,
  itemSold: 10,
});

const juJubesCandy = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 502,
  itemname: "JuJubes Candy",
  itemPrice: 1.00,
  Stock: 10,
  itemSold: 10,
});
const milkChocolatebar = new Item({
  itemcategory: "Snacks and Cookies",
  itemId: 503,
  itemname: "Milk Chocolate bar",
  itemPrice: 1.00,
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
  itemPrice: 3.00,
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
  itemPrice: 2.00,
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
  itemPrice: 2.00,
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
///////////////////////////////////////////Frozen Food////////////////////////////////////
const cookedPacificWhiteShrimp = new Item({
  itemcategory: "Frozen Food",
  itemId: 701,
  itemname: "Cooked Pacific White Shrimp",
  itemPrice: 8.97,
  Stock: 10,
  itemSold: 10,
});
const cultivatedBlueberries = new Item({
  itemcategory: "Frozen Food",
  itemId: 702,
  itemname: "Cultivated Blueberries",
  itemPrice: 4.97,
  Stock: 10,
  itemSold: 10,
});
const vanillaIceCream = new Item({
  itemcategory: "Frozen Food",
  itemId: 703,
  itemname: "Vanilla Ice Cream Sandwiches",
  itemPrice: 4.23,
  Stock: 10,
  itemSold: 10,
});
const frozenMangoChunks = new Item({
  itemcategory: "Frozen Food",
  itemId: 704,
  itemname: "Frozen Mango Chunks",
  itemPrice: 4.97,
  Stock: 10,
  itemSold: 10,
});
const homestyleWaffles = new Item({
  itemcategory: "Frozen Food",
  itemId: 705,
  itemname: "Homestyle Waffles",
  itemPrice: 2.47,
  Stock: 10,
  itemSold: 10,
});
const slicedStrawberries = new Item({
  itemcategory: "Frozen Food",
  itemId: 706,
  itemname: "Sliced Strawberries",
  itemPrice: 4.97,
  Stock: 10,
  itemSold: 10,
});
const chickenStrips = new Item({
  itemcategory: "Frozen Food",
  itemId: 707,
  itemname: "Chicken Strips",
  itemPrice: 4.97,
  Stock: 10,
  itemSold: 10,
});
const frozenFries = new Item({
  itemcategory: "Frozen Food",
  itemId: 708,
  itemname: "Crinkle Cut Frozen Fries",
  itemPrice: 1.97,
  Stock: 10,
  itemSold: 10,
});
const italianStyleBeefMeatballs = new Item({
  itemcategory: "Frozen Food",
  itemId: 709,
  itemname: "Italian Style Beef Meatballs",
  itemPrice: 9.05,
  Stock: 10,
  itemSold: 10,
});
const frozenBeefBurgers = new Item({
  itemcategory: "Frozen Food",
  itemId: 710,
  itemname: "Frozen Beef Burgers",
  itemPrice: 11.97,
  Stock: 10,
  itemSold: 10,
});

///////////////////////////////////////Prepared Food////////////////////////////////////
const smokedTurkeyBreast = new Item({
  itemcategory: "Prepared Food",
  itemId: 801,
  itemname: "Smocked Turckey Breast",
  itemPrice: 3.00,
  Stock: 10,
  itemSold: 10,
});
const cajunChicken = new Item({
  itemcategory: "Prepared Food",
  itemId: 802,
  itemname: "Cajun Chicken",
  itemPrice: 3.00,
  Stock: 10,
  itemSold: 10,
});
const pepperoniPizzaStyle = new Item({
  itemcategory: "Prepared Food",
  itemId: 803,
  itemname: "Pepperoni Pizza Style",
  itemPrice: 5.00,
  Stock: 10,
  itemSold: 10,
});
const roastBeef = new Item({
  itemcategory: "Prepared Food",
  itemId: 804,
  itemname: "Roast Beef",
  itemPrice: 3.00,
  Stock: 10,
  itemSold: 10,
});
const tzatzikiYogurtDip = new Item({
  itemcategory: "Prepared Food",
  itemId: 805,
  itemname: "Tzatziki Yogurt Dip",
  itemPrice: 3.77,
  Stock: 10,
  itemSold: 10,
});
const watermelonChunks = new Item({
  itemcategory: "Prepared Food",
  itemId: 806,
  itemname: "Watermelon Chunks",
  itemPrice: 3.97,
  Stock: 10,
  itemSold: 10,
});
const cookedHam = new Item({
  itemcategory: "Prepared Food",
  itemId: 807,
  itemname: "Cooked Ham",
  itemPrice: 3.00,
  Stock: 10,
  itemSold: 10,
});
const fruitTray = new Item({
  itemcategory: "Prepared Food",
  itemId: 808,
  itemname: "Fruit Tray",
  itemPrice: 14.97,
  Stock: 10,
  itemSold: 10,
});
const vegetableTray = new Item({
  itemcategory: "Prepared Food",
  itemId: 809,
  itemname: "Vegetable Tray",
  itemPrice: 8.97,
  Stock: 10,
  itemSold: 10,
});
const greekPastaFetaSalad = new Item({
  itemcategory: "Prepared Food",
  itemId: 810,
  itemname: "Greek Pasta Feta Salad",
  itemPrice: 6.97,
  Stock: 10,
  itemSold: 10,
});

///////////////////////////////////////Pantry/////////////////////////////////////////////
const macAndCheese = new Item({
  itemcategory: "Pantry",
  itemId: 901,
  itemname: "Macaroni and Cheese",
  itemPrice: 1.57,
  Stock: 10,
  itemSold: 10,
});
const beansInTomatoSauce = new Item({
  itemcategory: "Pantry",
  itemId: 902,
  itemname: "Beans in Tomato Sauce",
  itemPrice: 1.27,
  Stock: 10,
  itemSold: 10,
});
const dryPastaSpaghetti = new Item({
  itemcategory: "Pantry",
  itemId: 903,
  itemname: "Dry Pasta Spaghetti",
  itemPrice: 1.27,
  Stock: 10,
  itemSold: 10,
});
const slicedMushrooms = new Item({
  itemcategory: "Pantry",
  itemId: 904,
  itemname: "Sliced Mushrooms",
  itemPrice: 0.97,
  Stock: 10,
  itemSold: 10,
});
const dicedTomatoes = new Item({
  itemcategory: "Pantry",
  itemId: 905,
  itemname: "Diced Tomatoes",
  itemPrice: 0.97,
  Stock: 10,
  itemSold: 10,
});
const flakedLightTuna = new Item({
  itemcategory: "Pantry",
  itemId: 906,
  itemname: "Flaked Light Tuna",
  itemPrice: 1.17,
  Stock: 10,
  itemSold: 10,
});
const canolaOil = new Item({
  itemcategory: "Pantry",
  itemId: 907,
  itemname: "Canola Oil",
  itemPrice: 8.67,
  Stock: 10,
  itemSold: 10,
});
const chickPeas = new Item({
  itemcategory: "Pantry",
  itemId: 908,
  itemname: "Chick Peas",
  itemPrice: 1.37,
  Stock: 10,
  itemSold: 10,
});
const allpurposeFlour = new Item({
  itemcategory: "Pantry",
  itemId: 909,
  itemname: "All-Purpose Flour",
  itemPrice: 3.97,
  Stock: 10,
  itemSold: 10,
});
const honey = new Item({
  itemcategory: "Pantry",
  itemId: 910,
  itemname: "Pure Liquid Honey",
  itemPrice: 4.97,
  Stock: 10,
  itemSold: 10,
});

//////////////////////////////////////Pet care///////////////////////////////////////////
const catLitter = new Item({
  itemcategory: "Pet Care",
  itemId: 1001,
  itemname: "Cat Litter - Scented",
  itemPrice: 12.48,
  Stock: 10,
  itemSold: 10,
});
const dryCatFood = new Item({
  itemcategory: "Pet Care",
  itemId: 1002,
  itemname: "Dry Cat Food",
  itemPrice: 5.48,
  Stock: 10,
  itemSold: 10,
});
const wetCatFood = new Item({
  itemcategory: "Pet Care",
  itemId: 1003,
  itemname: "Wet Cat Food",
  itemPrice: 0.70,
  Stock: 10,
  itemSold: 10,
});
const dogTreats = new Item({
  itemcategory: "Pet Care",
  itemId: 1004,
  itemname: "Dog Treats",
  itemPrice: 4.98,
  Stock: 10,
  itemSold: 10,
});
const wetDogFood = new Item({
  itemcategory: "Pet Care",
  itemId: 1005,
  itemname: "Real Beef Wet Dog Food",
  itemPrice: 3.27,
  Stock: 10,
  itemSold: 10,
});
const trainingPadForDog = new Item({
  itemcategory: "Pet Care",
  itemId: 1006,
  itemname: "Training Pads for Dog",
  itemPrice: 28.98,
  Stock: 10,
  itemSold: 10,
});
const largeBreedDentalDogTreats = new Item({
  itemcategory: "Pet Care",
  itemId: 1007,
  itemname: "Large Breed Dental Dog Treats",
  itemPrice: 13.97,
  Stock: 10,
  itemSold: 10,
});
const exercisePen = new Item({
  itemcategory: "Pet Care",
  itemId: 1008,
  itemname: "36IN Exercise Pen",
  itemPrice: 49.97,
  Stock: 10,
  itemSold: 10,
});
const dogHouse = new Item({
  itemcategory: "Pet Care",
  itemId: 1009,
  itemname: "Dog House",
  itemPrice: 63.71,
  Stock: 10,
  itemSold: 10,
});
const skyKennel = new Item({
  itemcategory: "Pet Care",
  itemId: 1010,
  itemname: "Sky Kennel for Pets",
  itemPrice: 159.99,
  Stock: 10,
  itemSold: 10,
});

///////////////////////////////////Floral & Garden//////////////////////////////////////
const antKiller = new Item({
  itemcategory: "Floral and Garden",
  itemId: 1101,
  itemname: "Ant Killer and Trap",
  itemPrice: 7.68,
  Stock: 10,
  itemSold: 10,
});
const allpurposeLiquidPlantFood = new Item({
  itemcategory: "Floral and Garden",
  itemId: 1102,
  itemname: "All-Purpose Liquid Plant Food",
  itemPrice: 7.42,
  Stock: 10,
  itemSold: 10,
});
const herbMix = new Item({
  itemcategory: "Floral and Garden",
  itemId: 1103,
  itemname: "Vegetable and Herb Mix",
  itemPrice: 7.08,
  Stock: 10,
  itemSold: 10,
});
const mouseTrap = new Item({
  itemcategory: "Floral and Garden",
  itemId: 1104,
  itemname: "Mouse Trap",
  itemPrice: 3.17,
  Stock: 10,
  itemSold: 10,
});
const lawnFertilizer = new Item({
  itemcategory: "Floral and Garden",
  itemId: 1105,
  itemname: "Lawn Fertilizer",
  itemPrice: 17.48,
  Stock: 10,
  itemSold: 10,
});
const indoorPlantFoodSpikesTray = new Item({
  itemcategory: "Floral and Garden",
  itemId: 1106,
  itemname: "Indoor Plant Food Spikes Tray",
  itemPrice: 4.98,
  Stock: 10,
  itemSold: 10,
});
const plantStand = new Item({
  itemcategory: "Floral and Garden",
  itemId: 1107,
  itemname: "Plant Stand",
  itemPrice: 16.98,
  Stock: 10,
  itemSold: 10,
});
const peatPots = new Item({
  itemcategory: "Floral and Garden",
  itemId: 1108,
  itemname: "peat pots",
  itemPrice: 22.34,
  Stock: 10,
  itemSold: 10,
});
const planter = new Item({
  itemcategory: "Floral and Garden",
  itemId: 1109,
  itemname: "Planter",
  itemPrice: 29.98,
  Stock: 10,
  itemSold: 10,
});
const lawnRoller = new Item({
  itemcategory: "Floral and Garden",
  itemId: 1110,
  itemname: "Lawn Roller",
  itemPrice: 179.99,
  Stock: 10,
  itemSold: 10,
});
const seedStartingTray = new Item({
  itemcategory: "Floral and Garden",
  itemId: 1111,
  itemname: "Seed Starting Tray",
  itemPrice: 10.92,
  Stock: 10,
  itemSold: 10,
});

/////////////////////////////////International/////////////////////////////////////
const basmatiRice = new Item({
  itemcategory: "International",
  itemId: 1201,
  itemname: "Basmati Rice",
  itemPrice: 17.47,
  Stock: 10,
  itemSold: 10,
});
const darkRedKidneyBeans = new Item({
  itemcategory: "International",
  itemId: 1202,
  itemname: "Dark Red Kidney Beans",
  itemPrice: 1.37,
  Stock: 10,
  itemSold: 10,
});
const sweetenedCondensedMilk = new Item({
  itemcategory: "International",
  itemId: 1203,
  itemname: "Sweetened Condensed Milk",
  itemPrice: 1.97,
  Stock: 10,
  itemSold: 10,
});
const tortillas = new Item({
  itemcategory: "International",
  itemId: 1204,
  itemname: "Tortillas",
  itemPrice: 3.17,
  Stock: 10,
  itemSold: 10,
});
const garlicNaan = new Item({
  itemcategory: "International",
  itemId: 1205,
  itemname: "Garlic Naan",
  itemPrice: 1.77,
  Stock: 10,
  itemSold: 10,
});
const whiteNaan = new Item({
  itemcategory: "International",
  itemId: 1206,
  itemname: "White Naan",
  itemPrice: 1.97,
  Stock: 10,
  itemSold: 10,
});
const soyaSauce = new Item({
  itemcategory: "International",
  itemId: 1207,
  itemname: "Soya Sauce",
  itemPrice: 1.87,
  Stock: 10,
  itemSold: 10,
});
const hummus = new Item({
  itemcategory: "International",
  itemId: 1208,
  itemname: "Hummus",
  itemPrice: 3.77,
  Stock: 10,
  itemSold: 10,
});
const jasmineRice = new Item({
  itemcategory: "International",
  itemId: 1209,
  itemname: "Jasmine Rice",
  itemPrice: 16.97,
  Stock: 10,
  itemSold: 10,
});
const lasagna = new Item({
  itemcategory: "International",
  itemId: 1210,
  itemname: "Lasagna Pasta",
  itemPrice: 2.27,
  Stock: 10,
  itemSold: 10,
});

/////////////////////////////////Baby Care////////////////////////////////////////
const unscentedBabyWipes = new Item({
  itemcategory: "Baby Care",
  itemId: 1301,
  itemname: "Unscented Baby Wipes",
  itemPrice: 2.97,
  Stock: 10,
  itemSold: 10,
});
const babyFoodPurée = new Item({
  itemcategory: "Baby Care",
  itemId: 1302,
  itemname: "Baby Food Purée",
  itemPrice: 1.00,
  Stock: 10,
  itemSold: 10,
});
const diaperRashCream = new Item({
  itemcategory: "Baby Care",
  itemId: 1303,
  itemname: "Diaper Rash Cream",
  itemPrice: 19.97,
  Stock: 10,
  itemSold: 10,
});
const siliconNipples = new Item({
  itemcategory: "Baby Care",
  itemId: 1304,
  itemname: "3-Pack Silicon Nipples",
  itemPrice: 1.97,
  Stock: 10,
  itemSold: 10,
});
const babyBottle = new Item({
  itemcategory: "Baby Care",
  itemId: 1305,
  itemname: "Baby Bottle",
  itemPrice: 8.97,
  Stock: 10,
  itemSold: 10,
});
const unscentedPetroleumJelly = new Item({
  itemcategory: "Baby Care",
  itemId: 1306,
  itemname: "Unscented Petroleum Jelly",
  itemPrice: 2.97,
  Stock: 10,
  itemSold: 10,
});
const moisturizingCream = new Item({
  itemcategory: "Baby Care",
  itemId: 1307,
  itemname: "Moisturizing Cream",
  itemPrice: 17.97,
  Stock: 10,
  itemSold: 10,
});
const babySunscreen = new Item({
  itemcategory: "Baby Care",
  itemId: 1308,
  itemname: "Baby Sunscreen",
  itemPrice: 14.97,
  Stock: 10,
  itemSold: 10,
});
const swaddlersDiapers = new Item({
  itemcategory: "Baby Care",
  itemId: 1309,
  itemname: "Swaddlers Diapers",
  itemPrice: 27.97,
  Stock: 10,
  itemSold: 10,
});
const activityToy = new Item({
  itemcategory: "Baby Care",
  itemId: 1310,
  itemname: "Activity Toy",
  itemPrice: 17.97,
  Stock: 10,
  itemSold: 10,
});
const diaperBag = new Item({
  itemcategory: "Baby Care",
  itemId: 1311,
  itemname: "Diaper Bag",
  itemPrice: 42.97,
  Stock: 10,
  itemSold: 10,
});

const hotSafetySpoons = new Item({
  itemcategory: "Baby Care",
  itemId: 1312,
  itemname: "Hot Safety Spoons",
  itemPrice: 5.97,
  Stock: 10,
  itemSold: 10,
});
///////////////////////////////Home///////////////////////////////////////////////
const softTouchPillow = new Item({
  itemcategory: "Home",
  itemId: 1401,
  itemname: "Soft Touch Pillow",
  itemPrice: 3.98,
  Stock: 10,
  itemSold: 10,
});
const fittedSheets = new Item({
  itemcategory: "Home",
  itemId: 1402,
  itemname: "Fitted sheets",
  itemPrice: 9.97,
  Stock: 10,
  itemSold: 10,
});
const plasticClothesHanger = new Item({
  itemcategory: "Home",
  itemId: 1403,
  itemname: "Plastic Clothes Hanger 10pk",
  itemPrice: 3.68,
  Stock: 10,
  itemSold: 10,
});
const towerFan = new Item({
  itemcategory: "Home",
  itemId: 1404,
  itemname: "Tower Fan",
  itemPrice: 59.99,
  Stock: 10,
  itemSold: 10,
});
const tealightCandles = new Item({
  itemcategory: "Home",
  itemId: 1405,
  itemname: "Tealight Candles",
  itemPrice: 5.97,
  Stock: 10,
  itemSold: 10,
});
const waterFilter = new Item({
  itemcategory: "Home",
  itemId: 1406,
  itemname: "Standard Water Filter",
  itemPrice: 7.48,
  Stock: 10,
  itemSold: 10,
});
const whiteDinnerwareSet = new Item({
  itemcategory: "Home",
  itemId: 1407,
  itemname: "White Dinnerware Set",
  itemPrice: 39.97,
  Stock: 10,
  itemSold: 10,
});
const pillowcases = new Item({
  itemcategory: "Home",
  itemId: 1408,
  itemname: "Pillow Cases",
  itemPrice: 3.99,
  Stock: 10,
  itemSold: 10,
});
const lunchbags = new Item({
  itemcategory: "Home",
  itemId: 1409,
  itemname: "Lunch Bags",
  itemPrice: 3.33,
  Stock: 10,
  itemSold: 10,
});
const fryPan = new Item({
  itemcategory: "Home",
  itemId: 1410,
  itemname: "Fry Pan 24cm",
  itemPrice: 11.97,
  Stock: 10,
  itemSold: 10,
});

///////////////////////////////Health and Beauty//////////////////////////////////
const disposableMask = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1501,
  itemname: "3 Layer Disposable Mask",
  itemPrice: 4.97,
  Stock: 10,
  itemSold: 10,
});
const vitaminD3 = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1502,
  itemname: "Vitamin D3 1000 IU Tablets",
  itemPrice: 5.97,
  Stock: 10,
  itemSold: 10,
});
const stoolSoftener = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1503,
  itemname: "Stool Softener",
  itemPrice: 4.97,
  Stock: 10,
  itemSold: 10,
});
const diarrheaReliefCaplets = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1504,
  itemname: "Diarrhea Relief Caplets",
  itemPrice: 8.97,
  Stock: 10,
  itemSold: 10,
});
const adhesiveBandages = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1505,
  itemname: "Adhesive Bandages",
  itemPrice: 3.27,
  Stock: 10,
  itemSold: 10,
});
const nasalCongestionSpray = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1506,
  itemname: "Nasal Congestion Spray",
  itemPrice: 3.97,
  Stock: 10,
  itemSold: 10,
});
const hotWaterBottle = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1507,
  itemname: "Hot Water Bottle",
  itemPrice: 9.77,
  Stock: 10,
  itemSold: 10,
});
const vitaminB12 = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1508,
  itemname: "Vitamin B12 1500 mcg",
  itemPrice: 5.37,
  Stock: 10,
  itemSold: 10,
});
const eyeDrops = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1509,
  itemname: "Eye Drops",
  itemPrice: 3.97,
  Stock: 10,
  itemSold: 10,
});
const subsalicylateLiquid = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1510,
  itemname: "Bismuth Subsalicylate Liquid",
  itemPrice: 4.47,
  Stock: 10,
  itemSold: 10,
});
const handSanitizer = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1511,
  itemname: "Hand Sanitizer",
  itemPrice: 3.77,
  Stock: 10,
  itemSold: 10,
});
const vitaminC = new Item({
  itemcategory: "Health and Beauty",
  itemId: 1512,
  itemname: "Vitamin C Timed Release",
  itemPrice: 13.97,
  Stock: 10,
  itemSold: 10,
});

//////////////////////////////Cleaning///////////////////////////////////////
const concentratedLiquidBleach = new Item({
  itemcategory: "Cleaning",
  itemId: 1601,
  itemname: "Concentrated Liquid Bleach",
  itemPrice: 3.28,
  Stock: 10,
  itemSold: 10,
});
const parchment = new Item({
  itemcategory: "Cleaning",
  itemId: 1602,
  itemname: "Parchment Paper",
  itemPrice: 2.98,
  Stock: 10,
  itemSold: 10,
});
const garbageBages = new Item({
  itemcategory: "Cleaning",
  itemId: 1603,
  itemname: "Garpage bages",
  itemPrice: 6.47,
  Stock: 10,
  itemSold: 10,
});
const kitchenBags = new Item({
  itemcategory: "Cleaning",
  itemId: 1604,
  itemname: "Kitchen Bags",
  itemPrice: 4.47,
  Stock: 10,
  itemSold: 10,
});
const facialTissues = new Item({
  itemcategory: "Cleaning",
  itemId: 1605,
  itemname: "Facial Tissues",
  itemPrice: 1.47,
  Stock: 10,
  itemSold: 10,
});
const broomWithDustpan = new Item({
  itemcategory: "Cleaning",
  itemId: 1606,
  itemname: "Broom with Dustpan",
  itemPrice: 11.97,
  Stock: 10,
  itemSold: 10,
});
const drainOpener = new Item({
  itemcategory: "Cleaning",
  itemId: 1607,
  itemname: "Drain Opener",
  itemPrice: 4.77,
  Stock: 10,
  itemSold: 10,
});
const disinfectingWipes = new Item({
  itemcategory: "Cleaning",
  itemId: 1608,
  itemname: "Disinfecting Wipes",
  itemPrice: 3.77,
  Stock: 10,
  itemSold: 10,
});
const disposableGloves = new Item({
  itemcategory: "Cleaning",
  itemId: 1609,
  itemname: "Nitryl Disposable Gloves",
  itemPrice: 7.97,
  Stock: 10,
  itemSold: 10,
});
const washingMachineCleaner = new Item({
  itemcategory: "Cleaning",
  itemId: 1610,
  itemname: "Washing Machine Cleaner",
  itemPrice: 7.97,
  Stock: 10,
  itemSold: 10,
});
//////////////////////////////////////////////////////////

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
    //bakery
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
    //diary&eggs
    partlySkimmedMilk,
    homogenizedMilk,
    whiteEggs,
    marbleCheese,
    saltedButter,
    sourCream,
    creamCheese,
    paneer,
    parmesanCheese,
    plainYogurt,
    //meats
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
    //snacks
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
    //beverage
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
    //frozen food
    cookedPacificWhiteShrimp,
    cultivatedBlueberries,
    vanillaIceCream,
    frozenMangoChunks,
    homestyleWaffles,
    slicedStrawberries,
    chickenStrips,
    frozenFries,
    italianStyleBeefMeatballs,
    frozenBeefBurgers,
    //prepared food
    smokedTurkeyBreast,
    cajunChicken,
    pepperoniPizzaStyle,
    roastBeef,
    tzatzikiYogurtDip,
    watermelonChunks,
    cookedHam,
    fruitTray,
    vegetableTray,
    greekPastaFetaSalad,
    //pantry
    macAndCheese,
    beansInTomatoSauce,
    dryPastaSpaghetti,
    slicedMushrooms,
    dicedTomatoes,
    flakedLightTuna,
    canolaOil,
    chickPeas,
    allpurposeFlour,
    honey,
    //pet
    catLitter,
    dryCatFood,
    wetCatFood,
    dogTreats,
    wetDogFood,
    trainingPadForDog,
    largeBreedDentalDogTreats,
    exercisePen,
    dogHouse,
    skyKennel,
    //garden
    antKiller,
    allpurposeLiquidPlantFood,
    herbMix,
    mouseTrap,
    lawnFertilizer,
    indoorPlantFoodSpikesTray,
    plantStand,
    peatPots,
    planter,
    lawnRoller,
    seedStartingTray,
    //International
    basmatiRice,
    darkRedKidneyBeans,
    sweetenedCondensedMilk,
    tortillas,
    garlicNaan,
    whiteNaan,
    soyaSauce,
    hummus,
    jasmineRice,
    lasagna,
    //baby
    unscentedBabyWipes,
    babyFoodPurée,
    diaperRashCream,
    siliconNipples,
    babyBottle,
    unscentedPetroleumJelly,
    moisturizingCream,
    babySunscreen,
    swaddlersDiapers,
    activityToy,
    diaperBag,
    hotSafetySpoons,
    //home
    softTouchPillow,
    fittedSheets,
    plasticClothesHanger,
    towerFan,
    tealightCandles,
    waterFilter,
    whiteDinnerwareSet,
    pillowcases,
    lunchbags,
    fryPan,
    //health
    disposableMask,
    vitaminD3,
    stoolSoftener,
    diarrheaReliefCaplets,
    adhesiveBandages,
    nasalCongestionSpray,
    hotWaterBottle,
    vitaminB12,
    eyeDrops,
    subsalicylateLiquid,
    handSanitizer,
    vitaminC,
    //Cleaning
    concentratedLiquidBleach,
    parchment,
    garbageBages,
    kitchenBags,
    facialTissues,
    broomWithDustpan,
    drainOpener,
    disinfectingWipes,
    disposableGloves,
    washingMachineCleaner,
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

// module.exports = Item;
