//back-end
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]


var toPigLatin = function(word){
  if(word.length <= 1){
    if (word[0]==="a"|| word[0]==="i"){
      return word[0]+"way";
    }
  } else if(word.length >= 2){
      for(var i=0; i<= consonants.length; i++){
        if(word[0]===vowels[i]){
          return word+"ay";
        } else if(word[0] === consonants[i]){
          var somthing = word.replace(word[0],"")
          return somthing+word[0]+"ay"
        }else{
          //alert("doesnt begin with vowel")
        }
      }
    } else{
      //alert("not a word")
      }
}









//front-end
$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();

    var word = $("#word").val()

    var result = toPigLatin(word)
    $("ul").append("<li>"+result+"</li>")
  });
});
