const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  const lessonAll = [["Basen, Basen, Angielski, Wos, Matematyke, Matematyke, Biologie, Polski", "siudmej czterdzieści pięć", "pietnastej trzydzieści"], []];
  const dayName = new Date().toLocaleString('pl-pl', { weekday: 'long' });
  const d = new Date();
  let day = d.getDay();


      //_______________________Lesson
      let lessonDayNumber = day - 1;
      if (day == 6 || day == 0) {
        lessonDayNumber = 0;
      }
      const lessonOut = `Lekcje zaczynasz o ${lessonAll[lessonDayNumber][1]}, masz: ${lessonAll[lessonDayNumber][0]} kończysz o ${lessonAll[lessonDayNumber][2]} `;


//________________________Output
var text = `WItaj Łukasz, dziś jest ${dayName}. ${lessonOut}. Miłego dnia!`;


res.send(text)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
