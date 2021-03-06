/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

/*
var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message
messageFunc();
*/
//CEVABIM
var person = {
  name: "John",
  message: function () {
    console.log("Hello, " + this.name);
  },
};

var messageFunc = person.message;
messageFunc.apply(person);
//messageFunc();



/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/

/*
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map(function(number, numberIndex){
        const result = number * this.numbers[1];
        console.log(result)
    })
  }
};

numbers.multiply();
*/
//CEVABIM
var numbers = {
  numbers: [[10, 20, 30], 2],
  multiply: function () {
    let result;

      this.numbers[0].map((number, numberIndex) => {
          result = number * this.numbers[1];
          console.log(result);
          
      });
      
  }
};

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
/*

function isValidName(name){

}
*/
//CEVABIM
function isValidName(name) {
  let trimmedName;
  
  if (typeof name !== "string") {
    return false
  }

  trimmedName = name.trim().split(" ");

  for (let i = 0; i<trimmedName.length; i++){
    if (trimmedName[i].length <= 1) {
      return false;
    }
      return true;
  }
}


/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
/*

function katilimSaati(dersSayisi, dersSuresi){

}
*/
//CEVABIM
function katilimSaati(dersSayisi, dersSuresi) {
  let totalSure;

  if ((typeof dersSayisi == "string" || typeof dersSayisi == "number") && (typeof dersSuresi == "string" || typeof dersSuresi == "number")) {
    
    if (!isNaN(dersSayisi) && !isNaN(dersSuresi) && isFinite(dersSayisi) && isFinite(dersSuresi) && dersSayisi !== "" & dersSuresi !== "") {
      totalSure = dersSayisi * dersSuresi;
      return totalSure;
    }
    return false;
  }  
   
  else {
    return false;
  }

}



