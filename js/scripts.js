//back-end
var vowels = ["a", "e", "i", "o", "u"];



var toPigLatin = function(word){
  if(word.length <= 1){
    if (word[0]==="a"|| word[0]==="i"){
      return word[0]+"way";
    }
  } else if(word.length >= 2){
      for(var i=0; i<= vowels.length; i++){
        if(word[0]===vowels[i]){
          return word+"ay";
        } else{
          //alert("doesnt begin with vowel")
        }
      }
    } else{
      //alert("not a word")
      }
}

  // for(var i=0; i<= word.length; i++){
  //   if(word[0]===vowels[i]){
  //     return word+"ay";
  //   } else{
  //     alert("doesnt begin with vowel")
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
