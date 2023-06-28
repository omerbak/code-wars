function domainName(url) {
  return url.replace(/www.|https?:\/\/|\..*/g, "");
}
