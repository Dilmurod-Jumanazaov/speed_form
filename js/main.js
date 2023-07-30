// var elForm = document.querySelector(".form-box");
// var elFormInput = elForm.querySelector(".form-box__input");
// var elPerson = document.querySelector(".list__person-speed");
// var elBike = document.querySelector(".list__bike-speed");
// var elCar = document.querySelector(".list__car-speed");
// var elPlain = document.querySelector(".list__plain-speed");

// var personSpeed = 3.6;
// var bikeSpeed = 20.1;
// var carSpeed = 70;
// var plainSpeed = 800;

// elForm.addEventListener("submit", function(evt) {
//   evt.preventDefault();

//   var inputValue = elFormInput.value.trim(); 

//   speedometr(inputValue,personSpeed,elPerson);
//   speedometr(inputValue,bikeSpeed,elBike);
//   speedometr(inputValue,carSpeed,elCar);
//   speedometr(inputValue,plainSpeed,elPlain);

// })

// function speedometr(inputVal,speed,element) {
//   // Umumiy vaqt topildi
//   var time = inputVal / speed;
//   // Umumiy vaqtdan soatni topdik
//   var hour = Math.trunc(time);
//   // Umumiy vaqtdan miutni topdik
//   var minute = Math.round((time - hour) * 60);  


//   if(hour != 0) {
//     element.textContent = `${hour} soat ${minute} daqiqa`;
//   }
//   else {
//     element.textContent = `${minute} daqiqa`;
//   }
//   console.log(element);
// }

var elForm = document.querySelector(".form-box");
var elFormInput = elForm.querySelector(".form-box__input");
var elPerson = document.querySelector(".list__person-speed");
var elBike = document.querySelector(".list__bike-speed");
var elCar = document.querySelector(".list__car-speed");
var elPlain = document.querySelector(".list__plain-speed");

// console.log(elForm,elFormInput,elBike,elPerson,elCar,elPlain);

var personSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var plainSpeed = 800;

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  var inputValue = Number(elFormInput.value.trim());

  speedometr(inputValue,personSpeed,elPerson);
  speedometr(inputValue,bikeSpeed,elBike);
  speedometr(inputValue,carSpeed,elCar);
  speedometr(inputValue,plainSpeed,elPlain);
  
})

function speedometr(inputValue,elSpeed,element) {
  // bu yerda biz umumiy vaqtdan kunni topib oldik.
  var day = Math.trunc((inputValue / elSpeed) / 24);
  console.log(day);
  // bu yerda kilometrni tezlikka bolib umumiy vaqni toopib oldik.Bundan natija yaxlit bolmagan son chiqadi.
  var time = inputValue / elSpeed;
  // bu yerda soatni topib oldik.Yani inputdan kelyotgan qiymatni elementning tezligiga bolib yuboramiz.Va undan yaxlit bolmagan son chiqadi va uni Math (obj) ning 'trunc' methodi yordamida nuqtagacha bolgan butun sonlarni olishimiz mumkin boladi.Va u bizga soatni qaytaradi.
  var hour = Math.trunc(time);
  // bu yerda minutni topib oldik.Yani inputdan kelyotgan qiymatni elementning tezligiga bolib yuboramiz.Va undan yaxlit bolmagan son chiqadi.Va shu yaxlit bolmagan sondan soatni ayrib tashlanadi.Saot esa Math.trunc(inputValue / elSpeed) yaxlitlangan qiymatiga teng.
  // va ((inputValue / elSpeed) - Math.trunc(inputValue / elSpeed)) undan chiqqan natijani 60 ga kopaytirib yuboramiz.va undan chiqqan natijani Math (obj) ning 'round' methodi (bu method sonlarni yaxlitlab beradi avtomotichiskiy qiymatiga qarab) yordamida yaxlitlab qoyamiz va biz minutni olishimiz mumkin boladi.
  var minute = Math.trunc((time - hour) * 60);
  // bu yerda sekundni topib oldik.
  var second = Math.trunc((((time - hour) * 60) - minute) * 60);
  // bu joyda 'if', 'else' shart operatorlari  yordamida shart berib agar soat 0 ga teng bolmay qoladigan bolsa soat va minutni ekranga chiqarib bersin deyilgan. 'else' yokida soat 0 ga teng bolib qoladigan bolsa faqat minutni ozini ekranga chiqarsin deyilgan.
  if(hour != 0) {
    element.textContent = `${hour} soat ${minute} daqiqa ${second} sekund`;
  }
  else if(minute != 0 && second !=0) {
    element.textContent = `${minute} daqiqa ${second} sekund`;
  }
  else if(second == 0) {
    element.textContent = `${minute} daqiqa`
  }
  else {
    element.textContent = `${second} sekund`;
  }
  // console.log(element);
}
