
The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3


~The program adds "way" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iway

The program adds "way" to all words beginning with a vowel.
Example Input: away
Example Output: awayway

for words beginning with "y" treat "y" as a consonant
Example Input: your
Example Output: ouryay

For words beginning with one consonants, move the first consonant to the end, and add "ay".
Example Input: latin
Example Output: atinlay

For words beginning with two consonants, move all of the first consecutive consonants to the end, and add "ay".
Example Input: when
Example Output: enwhay

For words beginning with three consonants, move all of the first consecutive consonants to the end, and add "ay".
Example Input: three
Example Output: eethray

If the first consonants include "qu", move the "u" along with the "q"
Example Input: squeal
Example Output: ealsquay

'y' acts as a vowel as long as its not the first consonant
Example Input: style
Example Output: ylestay

recognize caps and non caps
Example Input: DinGo
Example Output: inGoDay
