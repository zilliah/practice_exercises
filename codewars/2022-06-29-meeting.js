function meeting(s) {
  return `(${s.split(";").map(x => x.toUpperCase().split(":").reverse().join(", ")).sort().join(")(")})`;
}