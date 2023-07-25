function validPhoneNumber(phoneNumber) {
  console.log(phoneNumber);
  return /^\(\d{3}\)\s{1}\d{3}-\d{4}$/.test(phoneNumber);
}
