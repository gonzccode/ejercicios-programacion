function toCamelCase(str){
    arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == "-" || arr[i] == "_"){
        arr[i+1] = arr[i+1].toUpperCase()
        arr.splice(i,1)
      }
    }
    str = arr.join('')
    return str
  }

toCamelCase("I-am-a-programmer")
toCamelCase("the_stealth_warrior")
toCamelCase("The-Stealth-Warrior")