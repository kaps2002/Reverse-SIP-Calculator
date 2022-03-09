function SIP(){
    var s=document.getElementById('check').value;
    if(s=="NO"){
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
    else if(s=="YES"){ 
        var rate=(document.getElementById('rate').value)/100;
        var time=document.getElementById('time').value;
        var amount=document.getElementById('amount').value;
        var a=1+rate;
        var b=Math.pow(a,time);
        var lump= amount/b;
        var l=Math.round(lump);
        document.getElementById('cyellow').innerHTML="Total ";
        document.getElementById('invest').innerHTML="Investment- ₹" + l + "/-" ;    
    }
}