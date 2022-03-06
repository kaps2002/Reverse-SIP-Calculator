function SIP(){
    var rate=(document.getElementById('rate').value)/1200;
    var time=(document.getElementById('time').value)*12;
    var amount=document.getElementById('amount').value;
    var a=1+rate;
    var b=Math.pow(a,time);
    var monthly= (amount*rate)/((b-1)*a);
    var r=Math.round(monthly);
    if (monthly<500){
        document.getElementById('cyellow').innerHTML="Monthly ";
        document.getElementById('invest').innerHTML="Investment- ₹" + 500 + "/-" ;
        document.getElementById('tyellow').innerHTML="Total ";
        document.getElementById('total').innerHTML="Investment- ₹" + 500*time + "/-" ;
    }
    else{
        document.getElementById('cyellow').innerHTML="Monthly ";
        document.getElementById('invest').innerHTML="Investment- ₹" + r + "/-" ;
        document.getElementById('tyellow').innerHTML="Total ";
        document.getElementById('total').innerHTML="Investment- ₹" + r*time + "/-" ;    
    }

}