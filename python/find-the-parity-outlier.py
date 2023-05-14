def find_outlier(integers):
    if len(integers) >= 3 :
        count_odd = 0
        count_even = 0
        index_odd = 0
        index_even = 0
        for index, i in enumerate(integers) :
            
                if i%2 == 0 :
                    count_odd += 1
                    index_odd = int(index)
                else : 
                    count_even += 1
                    index_even = int(index)
                
        return integers[index_even] if count_odd > count_even else integers[index_odd]
    else:
        return "value out of range"
    
find_outlier([2, 4, 0, 100, 4, 11, 2602, 36])
find_outlier([160, 3, 1719, 19, 11, 13, -21])