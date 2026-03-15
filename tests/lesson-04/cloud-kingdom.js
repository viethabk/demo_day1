let playerName = "Mario";
let currentLves = 3;

const coinLevel1 = 25;
const coinLevel2 = 30;
const coinLevel3 = 45;

const totalCoins = coinLevel1+coinLevel2+coinLevel3;
const averageCoins = totalCoins / 3;
const remainderCoins = totalCoins % 3;


console.log("1. Tong cua 3 level la: " + totalCoins);
console.log("2. Trung binh cong cua 3 level la: " + averageCoins);
console.log("3. So coin du sau khi chia 3 la: " + remainderCoins);

