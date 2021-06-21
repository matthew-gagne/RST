//varibles
let month = 0
let mDays = [31,28,31,30,31,30,31,31,30,31,30,31]
let day = 0
let year = 0
let m = 0
let d = 0
let y = 0
let mm = 6
let dd = 21
let yy = 2021
let isLeap = false
let today = new Date()
//button
document.getElementById('button').addEventListener('click', calculate)

function calculate () {
  month = document.getElementById('month').value - 1 // -1 to match array order (it stats at 0 not 1)
  day = document.getElementById('day').value
  year = document.getElementById('year').value
  mm = today.getMonth()
  dd = today.getDate()
  yy = today.getFullYear()
  if (year > yy) {
    alert ('please input past date')
  } else {
    //start of leapyear code
    //caluclation if it is a leap year
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
      isLeap = true 
    } else {isLeap = false}
    //will run only if the month is less than or = to 1 (feb)and leap year is true
    if (month <= 1 && isLeap == true){
      //loop to add days of the month starting with the month provided
      for (i = month ; i < 12 ; i++){
        if (i == 1){//
          d = d + 29//
        } else {
          d = d + mDays[i]
        }
      } d = d - day
    }
  }
}
