def duplicate_encode(word):
    word = word.lower()
    unique = []
    repeat = []
    lenWord = len(word)
    convertWord = []
    
    for w in word:
        if w not in unique:
            unique.append(w)
        else: 
            if w not in repeat:
                repeat.append(w)
                
    
    for c in range(0, lenWord):
     convertWord.insert(c, '(')
     
    for r in repeat:
      for index, w in enumerate(word):
        if r == w:
          convertWord[index] = ')'
          
    newWord = ''.join(convertWord)
     
    return newWord

duplicate_encode("Success")
duplicate_encode("CodeWarrior")
duplicate_encode("Supralapsarian")