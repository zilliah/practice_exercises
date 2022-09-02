function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  let total = principal;
  while (total < desired) {
    let currInterest = total * interest;
    let currTax = currInterest * tax;
    total = total + currInterest - currTax;
    years++;
  }
  return years;
}