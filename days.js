let mDays = [31,28,31,30,31,30,31,31,30,31,30,31]
let days = 0
let totalDays = 0
let today = new Date()
document.getElementById('button').addEventListener('click', launcher)

function launcher(){ // launches other functions
// initilize variables
let iDay = document.getElementById('day').value
let iMonth = (document.getElementById('month').value) - 1
let iYear = document.getElementById('year').value
let iYear2 = iYear + 1
//alert(iDay + ' ' + iMonth + ' ' + iYear)
let sYear = today.getFullYear()
let sDay = today.getDate()
let sMonth = today.getMonth()
let sDOY = 0
let iDOY = 0
let iDif = 0
iDOY = dayOfYear(iMonth, iDay, iYear) // calc day of year for input
sDOY = dayOfYear(sMonth, sDay, sYear) // calc day of year for system
iDif = doyDif(iDOY, iYear) // calc how many days left in year for input
days = addYears(iYear2, sYear)//calc days in folowing years
totalDays = sumResults(sDOY, iDif, days)//calc total days 
writeHTML(totalDays)//prints to HTML

}

function isLeap(z){
  //alert(z)
  if ((z % 4) == 0 && (z % 100) != 0 || (z % 400) == 0){
  return true
  } else {
   return false
 }
}

function doyDif(x, z){
  let count = 0
  if (isLeap(z)) {
    count = 366 - x
    return count
  } else {
    count = 365 - x
    return count
  }
}

function dayOfYear(x, y, z){
  let count = 0
  if (x > 1) {
    if (isLeap(z)){
      for (i = 0; i < x; i++){
        count = count + mDays[i]
      }
      count = count + y + 1
      return count
    } else {
      for (i = 0; i < x; i++){
        count = (count + mDays[i] + y)
    }
    return count
  }
  } 
}

function addYears(z, y){
  let count = 0
  for (i = (z + 1); i < y; i++){
    if (isLeap(i)){
      count = count + 366
    } else {
      count = count + 365
    }
  }
  return count
}

function sumResults(x, y, z){
  alert(x)
  let count = x + y + z
  //alert(count)
  return count
}

function writeHTML(z){
  document.getElementById('d').innerHTML = (z)
}
