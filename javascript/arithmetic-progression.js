var canMakeArithmeticProgression = function(arr) {
    arrNew = [...arr]
    arrNew = arrNew.sort((a, b) => a - b)
    gap = 0
    gapOptional = 0
    result = false
    for ( let i = 0; i < arrNew.length - 1; i++){
        gap = gapOptional;
        gapOptional = arrNew[i+1] - arrNew[i];
        gapOptional = Math.abs(gapOptional);
        if(i!=0 && gap!=gapOptional){
            return false
        }
    }
    return true
};

canMakeArithmeticProgression([ 3,5,1 ]);
canMakeArithmeticProgression([ 1,2,4 ]);