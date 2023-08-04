const ipEl = document.getElementById('ip');
const countryEl = document.getElementById('country');
const cityEl= document.getElementById('city');


fetch('http://ip-api.com/json/?fields=61439')

.then((res)=>res.json())
// .then((res) => console.log(res))
.then((res)=> {ipEl.textContent = res.query ;
 countryEl.textContent = res.country;  
cityEl.textContent = res.city});









