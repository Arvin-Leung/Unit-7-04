document.getElementById('click').addEventListener('click', checker)

function checker () {
  let age = document.getElementById('age').value;
  let date = document.getElementById('date').value;
  if ((date == 'tuesday' ) || (date == 'thursday') || (age > 12 && age < 21))
    document.getElementById('dis').innerHTML = 'you are eligible for student pricing'
  else {
    document.getElementById('dis').innerHTML = 'you are not eligible for student pricing'
  }
}
