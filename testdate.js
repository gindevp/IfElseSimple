var year = parseInt(prompt("Enter a year:"))
var isLeapYear= false;
var isDivi4= year%4==0
if(isDivi4){
    var isDivisi100= year %100==0;
    if(isDivisi100){
        var isDisivi400 = year %400==0
        if (isDisivi400){
            isLeapYear= true;
        }
    }else {
        isLeapYear = true;

    }
}
if (isLeapYear){
    alert((year+"is a leap year"))
}else{
    alert(year+"is not a leap")
}