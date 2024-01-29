function getNum() {
  let num = 1000 + 400;
  console.log(num);
}

function showAlert() {
  alert("アラートを表示します");
}

function displayMessage(message) {
  console.log(message);
}

function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};

console.log(fruit("イチゴ",500));

function addTax(price, func) {
 // priceは値段
 // funcは実⾏する関数名
 // 税込み価格を計算して四捨五⼊して整数にしている(スコープ内でしか参照できません。)
  const taxPrice = Math.round(price * 1.10);
  func(taxPrice);
}

// トマトの税込み価格をコンソールに表⽰させる処理
const tomatoPrice = function price(taxPrice, name) {
  console.log("トマトの税込み価格は" + taxPrice + "円です");
}

// ⽟ねぎの税込み価格をコンソールに表⽰させる処理
const onionPrice = function price(taxPrice, name) {
  console.log("玉ねぎの税込み価格は" + taxPrice + "円です");
}

addTax(100, tomatoPrice);
addTax(150, onionPrice);