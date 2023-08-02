const name=prompt("Adınızı giriniz: ");
const body=document.querySelector("body");
body.style.display="flex";
body.style.color="#dc831c";
body.style.width="100%";
body.style.height="100vh";
body.style.alignItems="center";
body.style.flexDirection="column";
const d = new Date();
let hour = d.getHours();
let second=d.getSeconds();
let minute=d.getMinutes();
let day=d.getDay();
days=["pazartesi","salı","çarşamba","perşembe","cuma","cumartesi","pazar"];
let newHour,newMinute,newSecond;

const h2=document.createElement("h2");
setInterval(function(){
    second++;
    if(second<10 && second>0){
        newSecond="0"+second;
    }
    else{
        newSecond=second;
    }

    if(second==59){
        second=0;
        minute++;
    }

    if(minute<10 && minute>0){
        newMinute="0"+minute;
    }
    else{
        newMinute=minute;
    }
    if(minute==59){
        minute=0;
        hour++;
    }

    if(hour==23){
        hour=0;
        day++;
        if(day==7) day=0;
    }
    if(hour<10 && hour>0){
        newHour="0"+hour;
    }
    else{
        newHour=+hour;
    }


    h2.innerHTML=`${newHour}:${newMinute}:${newSecond}  ${days[day-1]}`;
},1000);
body.innerHTML=`
<div>
<h1> KODLUYORUZ</h1>
<h3>Merhaba, ${name}! Hoşgeldin</h3>
</div>

`;
body.appendChild(h2);



