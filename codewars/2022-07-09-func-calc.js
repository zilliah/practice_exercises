
function zero(f) {
  const n = 0;
	if (!f) return n;
	else return (f(n));
}


function one(f) {
  const n = 1;
  if (!f) return n;
	else return (f(n));
}

function two(f) {
	const n = 2;
	if (!f) return n;
	else return (f(n));
}

function three(f) {
  const n = 3;
	if (!f) return n;
	else return (f(n));
}
function four(f) {
  const n = 4;
	if (!f) return n;
	else return (f(n));
}
function five(f) {
  const n = 5;
	if (!f) return n;
	else return (f(n));
}
function six(f) {
  const n = 6;
	if (!f) return n;
	else return (f(n));
}
function seven(f) {
  const n = 7;
	if (!f) return n;
	else return (f(n));
}
function eight(f) {
  const n = 8;
	if (!f) return n;
	else return (f(n));
}
function nine(f) {
  const n = 9;
	if (!f) return n;
	else return (f(n));
}


function plus(m) {
	return function(n) {
		return n + m;
  }
}
function minus(m) {
	return function(n) {
		return n - m;
	}
}
function times(m) {
	return function(n) {
		return n * m;
	}
}
function dividedBy(m) {
	return function(n) {
		return Math.floor(n / m);
	}
}


//////////////////////////////tests///////////////

console.log(`adding one and one: ${one(plus(one()))}`)

console.log(`adding one and two: ${one(plus(two()))}`)
console.log(`subtracting two and one: ${one(minus(two()))}`)
console.log(one());
// console.log(one);
// console.log(one(plus(two())))