function alphanumeric(string){
  return string != "" ? string.split("").every(x => /\d|[a-z]/.test(x.toLowerCase())) : false;
}