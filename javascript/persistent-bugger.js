function persistence(num) {
    if(num.toString().length > 1) {
      let count = 0
      let numString = num.toString()
      while (numString.length != 1) {
       count += 1
       numString = numString.split('').reduce((n,s) => s*Number(n), 1).toString()
      }
      return count
      
    } else {
      return 0
    }
 }

persistence(39)
persistence(4)
persistence(25)
persistence(999)