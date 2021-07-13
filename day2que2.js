s = "madam arora teaches malayalam mom dad"
s= s+ " "
word = ""
revword = ""
for (k of s) {
    if (k != " ") {
        word = word + k
        revword = k + revword
    }
    else {

        if (revword == word) {
            console.log(word)
        }

        word = ""
        revword = ""
    }
}
