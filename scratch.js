var sentence = "The word of the day is appear. How many!! times! do! do. do? the words word appear? We shall see."
console.log(wordCount(sentence))
function wordCount(string){
  return (string.toLowerCase().replace(/[^a-z|' ']/g,'').split(' ').reduce((t,w)=>{
    t[w] = (t[w]||0) + 1
    return t
  },{}))
}
