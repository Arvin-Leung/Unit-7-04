document.getElementById('click').addEventListener('click', checker)

function checker () {
  let age = document.getElementById('age').value;
  let date = document.getElementById('date').value;
  if ((date == 'tuesday' ) || (date == 'thursday') || (age > 12 && age < 21))
    alert("you are eligible for student pricing")
  else {
    alert("you are not eligible for student pricing")
  }
}
