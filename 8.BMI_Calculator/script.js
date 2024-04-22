let form = document.querySelector("Form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);

  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid heigth ${height}`;
  }else
  if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid heigth ${weight}`;
  }
  else{
    let bmi = (weight / ((height*height)/10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>`
  }
});
