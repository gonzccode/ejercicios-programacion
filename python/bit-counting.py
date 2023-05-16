def count_bits(n):
    list_n = []
    count = 0
    if n > 0 : 
        residue = 0
        aware = int(n)
        
        while aware != 1:
            residue = int(aware % 2)
            aware = int(aware / 2)
            list_n.insert(0, residue)

        list_n.insert(0, 1)
        count = list_n.count(1)
        return count
    elif n == 0:
        return 0
    else: 
        return "value out of range"

count_bits(9)
count_bits(26)
count_bits(3811)  
count_bits(77231418)
