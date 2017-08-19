# Hangman-game

Assignment
http://gw.bootcampcontent.com/GW-Coding-Boot-Camp/07-31-2017-GW-Arlington-Class-Repository-FSF/blob/master/Week-3/Homework/homework-instructions.md

Link to Github
https://rcintron1.github.io/Hangman-game

I will create a variable with random words for now.
If time permits I will figure out using an external resource.

HTML is using bootstrap (saving time)

Select Word
	select a random word from list
	count the characters in the word
	write x many of "_" where x is the character count of word

Ask user for a character
	save character
	compare character to random word
	if letter exist
		replace "_" with letter
	if letter doesn't exit
		count as a miss (and start drawing figure)

If word is spelled out 1 Win
If user misses 8 times, 1 Loss

