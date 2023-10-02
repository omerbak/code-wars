function alphanumeric(string) {
  const regex = /^[a-zA-Z\d]{1,}$/;
  return regex.test(string);
}
