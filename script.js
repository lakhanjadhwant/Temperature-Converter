document.getElementById("Temperature").addEventListener("submit", function(event) {
  event.preventDefault(); 

 var unit = document.getElementById("cont").value;
  const temperature = parseFloat(document.getElementById("value").value);

 
  let result;
  if (unit === "celsius") {
    result = FtoC(temperature);
  } else if (unit === "fahrenheit") {
    result = CtoF(temperature);
  } 
  document.getElementById("result").textContent = result;
});


function FtoC(temp) {
  return (temp-32)* 5/9+"  °C";
}

function CtoF(temp) {
  return (temp * 9/5) + 32+"  °F";
}

