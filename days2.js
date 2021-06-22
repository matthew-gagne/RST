let mDays = [31,28,31,30,31,30,31,31,30,31,30,31]; // Month Array
document.getElementById('button').addEventListener('click', launcher); // Click listener

function launcher(){ // launches other functions
// initilize variables
let today = new Date();
let iDay = document.getElementById('day').value;
let iMonth = (document.getElementById('month').value) - 1;
let iYear = document.getElementById('year').value;
let iYear2 = parseInt(iYear) + 1;
//alert(iYear2);
//alert(iDay + ' ' + iMonth + ' ' + iYear)
let sYear = today.getFullYear();
let sDay = today.getDate();
let sMonth = today.getMonth();
let sDOY = 0;
let iDOY = 0;
let iDif = 0;
let days = 0;
let totalDays = 0;
//alert(isLeap(2019));
iDOY = dayOfYear(iMonth, iDay, iYear); // calc day of year for input
//alert('input DOY ' + iDOY);
sDOY = dayOfYear(sMonth, sDay, sYear); // calc day of year for system
//alert('System DOY ' + sDOY);
iDif = doyDif(iDOY, iYear); // calc how many days left in year for input
//alert('Input DIFF ' + iDif);
days = addYears(iYear2, sYear);//calc days in folowing years
//alert('Days from years ' + days);
totalDays = sumResults(sDOY, iDif, days);//calc total days
//alert('after SUM ' + totalDays);
writeHTML(totalDays); //prints to HTML

}

function isLeap(z){
  //alert(z)
  if ((z % 4) === 0 && (z % 100) !== 0 || (z % 400) === 0){
  return true;
  } else {
   return false;
 }
}

function doyDif(x, z){
  if (isLeap(z)) {
    count = 366 - parseInt(x);
    return count;
  } else {
    count = 365 - parseInt(x);
    return count;
  }
}

function dayOfYear(x, y, z){
  let count = 0;
 // alert(x > 1);
  if (x > 1) {
    if (isLeap(z)){        
      for (i = 0; i < x; i++){
        count = count + mDays[i];
        //alert(count);
      }
      count = (count + 1) + parseInt(y);
      //alert( 'True ' + count);
      return count;
    } else {
      for (i = 0; i < x; i++){
        count = (count + mDays[i]) ;
       // alert('False ' + count);
    }
    count = count + parseInt(y);
    return count;
  }
  } else {
      for (i = 0; i < x; i++){
          count = count + mDays[i];
      }
      count = count + parseInt(y);
      //alert('Less ' + count);
      return count;
  }
}

function addYears(z, y){
  let count = 0;
  for (z ; z < y; z++){
      //alert(isLeap(z));
    if (isLeap(z)){
      count = count + 366;
    } else {
      count = count + 365;
    }
  }
  return count;
}

function sumResults(x, y, z){
  //alert(x);
  let count = parseInt(x) + parseInt(y) + parseInt(z);
  //alert(count)
  return count;
}

function writeHTML(z){
  document.getElementById('d').innerHTML = (z);
}