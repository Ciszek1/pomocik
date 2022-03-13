const express = require('express')
const app = express()
const fetch = require('node-fetch');
const port = 3000

app.get('/', (req, res) => {

  const lessonAll = [["Basen, Basen, Angielski, Wos, Matematyke, Matematyke, Biologie, Polski", "siudmej czterdzieści pięć", "pietnastej trzydzieści"], {}];
  const weatherApi = "http://api.openweathermap.org/data/2.5/weather?lat=54.3294106&lon=18.593441&appid=50d25bbab013b3251462733786b007d7";
  const dayName = new Date().toLocaleString('pl-pl', { weekday: 'long' });
  const d = new Date();
  let day = d.getDay();

  //_______________________Pogoda
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=54.3294106&lon=18.593441&appid=50d25bbab013b3251462733786b007d7')    
    .then(res => res.json())
    .then((json) => {
    const api = json;



      //_______________________Lesson
      let lessonDayNumber = day - 1;
      if (day == 6 || day == 0) {
        lessonDayNumber = 0;
      }
      const lessonOut = `Lekcje zaczynasz o ${lessonAll[lessonDayNumber][1]}, masz: ${lessonAll[lessonDayNumber][0]} kończysz o ${lessonAll[lessonDayNumber][2]} `;

      const pogoda = `W Gdansku jest ${Number(Math.round(api.main.temp - 273.15 + 'e+2') + 'e-2')} stopni celcusza, wilgotność powietrza wynosi ${api.main.humidity} procent `

      //________________________Output
      var text = `WItaj Łukasz, dziś jest ${dayName}. ${pogoda}. ${lessonOut}. Miłego dnia!`;


      res.send(text)
    });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
