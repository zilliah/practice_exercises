function DNAStrand(dna){
  const left = "ATGC";
  const right = "TACG"
  return dna.split("").map(x => right[left.indexOf(x)]).join("");
}