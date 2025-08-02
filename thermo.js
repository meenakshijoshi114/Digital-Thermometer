const input=document.getElementById("tempInput")
const button=document.getElementById("convertBtn")
const output=document.getElementById("output")
const stats=document.getElementById("status")
const warning=document.getElementById("warning")

button.addEventListener("click",()=>{
    const celsius=input.value.trim();

if(celsius==="" || isNaN(celsius)){
    warning.classList.remove("hidden");
    output.textContent="_ _ _";
     stats.textContent="stats";
     stats.className="status-box";
     alert("Please enter a value!")
}
warning.classList.add("hidden");

const fahrenheit=(parseFloat(celsius)*9/5+32).toFixed(2);
output.textContent=fahrenheit;

const tempC=parseFloat(celsius);
if(tempC<10){
    stats.textContent="Cold❄️"
    stats.className="status-box cold";
}else if(tempC>=10 && tempC<30){
    stats.textContent="Normal 🌤️"
    stats.className="status-box normal";
}else{
   stats.textContent="Hot🔥"
    stats.className="status-box Hot"; 
}
input.value="";
});


