// Write a JavaScript function to find whether or not the date is in daylights savings time.   
// Test Data :
// dt = new Date();
// console.log(daylights_savings(dt));
// 1

function daylights_savings(dt) 
{ 
  var dst = null;
  for (var i = 0; i < 12; ++i) 
    {
      var d = new Date(dt.getFullYear(), i, 1);
      var offset = dt.getTimezoneOffset();

      if (dst === null) 
        dst = offset;
      else if (offset < dst) 
         {
           dst = offset; 
           break;
         } 
      else if (offset > dst) 
        break;
         }
return (dt.getTimezoneOffset() == dst) | 0;
}
dt = new Date(); 
console.log(daylights_savings(dt)); 
dt = new Date(1989, 10, 1); 
console.log(daylights_savings(dt));


// Write a JavaScript function to get difference to Greenwich time (GMT) in hours.   
// Test Data :
// dt = new Date();
// console.log(diff_to_GMT(dt));
// "+05.500"

function diff_to_GMT(dt) 
{ 
    return (-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}

dt = new Date(); 
console.log(diff_to_GMT(dt)); 
dt = new Date(1989, 10, 1); 
console.log(diff_to_GMT(dt));

// Write a JavaScript function to get timezone offset in seconds.   
// Note : The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.
// Test Data :
// dt = new Date();
// console.log(timezone_offset_in_seconds(dt));
// 19800


function timezone_offset_in_seconds(dt) 
{ 
   return -dt.getTimezoneOffset() * 60;
}

dt = new Date(); 
console.log(timezone_offset_in_seconds(dt)); 

dt = new Date(1989, 10, 1); 
console.log(timezone_offset_in_seconds(dt));


// Write a JavaScript function to add specified years to a date.   
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_years(dt, 10).toString());
// Output :
// "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"


function add_years(dt,n) 
 {
 return new Date(dt.setFullYear(dt.getFullYear() + n));      
 }

dt = new Date();
console.log(add_years(dt, 10).toString());  

dt = new Date(2014,10,2);
console.log(add_years(dt, 10).toString());


// Write a JavaScript function to add specified weeks to a date.   
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_weeks(dt, 10).toString());
// Output :
// "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"

function add_weeks(dt, n) 
 {
 return new Date(dt.setDate(dt.getDate() + (n * 7)));      
 }

dt = new Date();
console.log(add_weeks(dt, 10).toString());  
dt = new Date(2014,10,2);
console.log(add_weeks(dt, 10).toString());

// Write a JavaScript function to add specified months to a date.   
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_months(dt, 10).toString());
// Output :
// "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"

function add_months(dt, n) 
 {

   return new Date(dt.setMonth(dt.getMonth() + n));      
 }

dt = new Date();
console.log(add_months(dt, 10).toString());  
dt = new Date(2014,10,2);
console.log(add_months(dt, 10).toString());


// Write a JavaScript function to get time differences in minutes between two dates.   
// Test Data :
// dt1 = new Date("October 13, 2014 11:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_minutes(dt1, dt2));
// 2

function diff_minutes(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_minutes(dt1, dt2));

// Write a JavaScript function to get time differences in hours between two dates.   
// Test Data :
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_hours(dt1, dt2));
// 3

function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_hours(dt1, dt2));

dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));


// Write a JavaScript function to get time differences in days between two dates.   
// Test Data :
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_days(dt1, dt2));
// 6

function diff_days(dt2, dt1) 
 {
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,6);
console.log(diff_days(dt1, dt2));
dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2));



// Write a JavaScript function to get time differences in weeks between two dates.   
// Test Data :
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_weeks(dt1, dt2));
// 18

function diff_weeks(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24 * 7);
  return Math.abs(Math.round(diff));
  
 }
dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_weeks(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2));


// Write a JavaScript function to get time differences in months between two dates.   
// Test Data :
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_months(dt1, dt2));
// 5

function diff_months(dt2, dt1) 
 {
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.round(diff));
  
 }
dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_months(dt1, dt2));
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2));




// Write a JavaScript function to get time differences in years between two dates.   
// Test Data :
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2017 11:13:00");
// console.log(diff_years(dt1, dt2));
// 3


function diff_years(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
   
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_years(dt1, dt2));
dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2));





// Write a JavaScript function to get the week start date.  

function startOfWeek(date)
  {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
  
    return new Date(date.setDate(diff));
 
  }

dt = new Date(); 

console.log(startOfWeek(dt).toString());




// Write a JavaScript function to get the week end date.  

function endOfWeek(date)
  {
     
    var lastday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastday));
 
  }
dt = new Date(); 

console.log(endOfWeek(dt).toString());



// Write a JavaScript function to get the month start date.

function startOfMonth(date)
  {
     
   return new Date(date.getFullYear(), date.getMonth(), 1);
 
  }

dt = new Date(); 

console.log(startOfMonth(dt).toString());




// Write a JavaScript function to get the month end date.  

function endOfMonth(date)
  {
     
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
 
  }

dt = new Date(); 

console.log(endOfMonth(dt).toString());
