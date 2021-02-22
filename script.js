// This allows the button to call the function
document.getElementById('click').addEventListener('click', checker)

// This function tells the user if they are eligible for the student discount
function checker () {
  // the lines below take the input and store them as variables
  const age = document.getElementById('age').value
  const date = document.getElementById('date').value
  /* The conditionals below will check if the day is tuesday or thursday or whether the user is between 12 and 21 */
  if ((date === 'tuesday') || (date === 'thursday') || (age >= 12 && age <= 21)) {
    document.getElementById('dis').innerHTML = 'you are eligible for the student pricing'
  } else {
    document.getElementById('dis').innerHTML = 'you are not eligible for the student pricing'
  }
}
