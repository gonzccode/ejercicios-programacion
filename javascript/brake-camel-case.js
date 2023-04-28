function solution(string) {
    let arrayString = string.split('')
    let wordsString = []
    let initial = 0
    for (let i = 0; i < arrayString.length; i++){
      if(arrayString[i] == arrayString[i].toUpperCase()){
        wordsString.push(arrayString.slice(initial, i).join(''))
        initial = i
      }
    }
    wordsString.push(arrayString.slice(initial, arrayString.length).join(''))
    return wordsString.join(' ')
}

solution('camelCasing')
solution('camelCasingTest')