//back-end
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]


function toPigLatin(word){
  if(word.length <= 1){
    if (word[0]==="a"|| word[0]==="i"){
      return word[0]+"way";
    }
  } else if(word.length >= 2){
      for(var i=0; i<= consonants.length; i++){
        if(word[0]===vowels[i]){
          return word+"ay";
        }else if(word[1] === consonants[i]){
          alert("works");
          var twoConsonant = word.replace(word[0],"").replace(word[1],"");
          return twoConsonant+word[0]+word[1]+"ay";

        }else if(word[0] === consonants[i]){
          //alert("um workss");
          var noConsonant = word.replace(word[0],"");
          return noConsonant+word[0]+"ay";
        }else{
          //alert("doesnt begin with vowel")
        }
      }
    } else{
      //alert("not a word")
      }
}

// for (var i = 0; i < word.length; i++) {
//   if (is word[i] a consonant) {
//     add to string StuffWereGOnnaMoveLater
//     keep track of how long StuffWereGOnnaMoveLater is
//   } else {
//     break;
//   }
// }








//front-end
$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();

    var word = $("#word").val()

    var result = toPigLatin(word)
    $("ul").append("<li>"+result+"</li>")
  });
});
