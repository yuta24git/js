for ( var i = 0; i < 5; i++ ){
  console.log(i+"回目の処理");
}

var sports = ["サッカー","野球","テニス"]
for (index in sports) {
  console.log(sports[index]);
}

var countries = [
  {
    country : "Japan",
    language : "Japanese",
    currency : "yen",
  },
  {
    country : "America",
    language : "English",
    currency : "dollar",
  },
  {
    country : "spain",
    language : "Spanish",
    currency : "euro",
  },
];
for (country of countries) {
  console.log(country.language);
}