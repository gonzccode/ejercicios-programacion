function DNAStrand(dna){
    let arrayDna = dna.split('')
    for (let i = 0; i < arrayDna.length; i++){
      if(arrayDna[i] == 'A') {
        arrayDna[i] = 'T'
      } else if (arrayDna[i] == 'T') {
        arrayDna[i] = 'A'
      }  else if (arrayDna[i] == 'C') {
        arrayDna[i] = 'G'
      } else if (arrayDna[i] == 'G') {
        arrayDna[i] = 'C'
      } 
    }
    dna = arrayDna.join('')
    return dna
  }

DNAStrand("AAAA")
DNAStrand("ATTGC")
DNAStrand("ATTGC")
DNAStrand("GTAT")