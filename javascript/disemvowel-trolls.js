function disemvowel(str) {
    let arrayLetters = []
    for (let v of str) {
      if(!(['a','e','i','o','u'].includes(v.toLowerCase().toString()))){
        arrayLetters.push(v)
      }
    }
    str = arrayLetters.join('')
    return str;
  }

disemvowel("This website is for losers LOL!")
disemvowel("No offense but,\nYour writing is among the worst I've ever read")
disemvowel("What are you, a communist?")