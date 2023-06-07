function clearForm() {
  document.getElementById("campaign-form").reset();
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// validate age
function validateAge(ageText) {
  const regex = /^(?:1[0-1][0-9]|120|[1-9][0-9]?)$/;
  return regex.test(ageText);
}

// validate zipcode
function validateZipCode(zipcodeText) {
  const regex = /^[0-9]{5}$/;
  return regex.test(zipcodeText);
}
