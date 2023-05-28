def solution(s):
    len_s = len(s)
    list_s = []

    if len_s % 2 == 0 :
        list_s = list(s)
    else:
        list_s = list(s)
        list_s.append("_")

    return [list_s[index-1]+''+list_s[index] for index, letter in enumerate(list_s) if index % 2 == 1 ]

solution('abc')
solution('abcdef')
