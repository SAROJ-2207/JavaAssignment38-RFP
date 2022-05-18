function leapYear(year) {
if(((year%4==0) && (year%400==0)) || (year%100 != 0)){
    console.log(year+" Leap Year");
  }else{
      console.log(year+" It Is Not A leap Year");
  }
}
leapYear(1980);