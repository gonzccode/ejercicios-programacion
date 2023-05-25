def spin_words(sentence):
    list_words = sentence.split(" ")
    for index, word in enumerate(list_words):
        if len(word)>=5:
            word_reverse = word[::-1]
            list_words[index] = word_reverse
    new_sentence = " ".join(list_words)
    return new_sentence

spin_words("Hey fellow warriors")
spin_words("This sentence is a sentence")