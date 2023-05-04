function isValidWalk(walk) {
  
    if(walk.length === 10) {
        let directionS = 0
        let directionN = 0
        let directionW = 0
        let directionE = 0
        for (let i = 0; i < walk.length; i++){
          if(walk[i]=='n'){
            directionN += 1
          } else if (walk[i]=='s'){
            directionS += 1
          } else if (walk[i]=='w'){
            directionW += 1
          } else if (walk[i]=='e'){
            directionE += 1
          }
        }
      if(directionN == directionS && directionW == directionE) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

isValidWalk(['n','s','n','s','n','s','n','s','n','s','n','s'])
isValidWalk(['n','s','n','s','n','s','n','s','n','s','n','s','e','w','e','w','e','w','e','w'])