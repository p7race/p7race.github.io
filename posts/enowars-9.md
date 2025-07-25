Last weekend I had a chance to practice with Team Serbia. I was chosen to be in the Extended National Team for Serbia and we participated in the Enowars 9 CTF, plus we did a bit of Jeopardy in the Tower of Hanoi CTF, which is what I'm going to talk about in today's post.

---

# Problem: Retromania

### Introduction to the Problem

> Hey guys. So, I was digging around in my basement and found this super old GBA game from when I was a kid. Total nostalgia trip. BUT, here's the problem: I can’t find the manual, and it had the instructions for the anti-piracy check. 😭 Tried to fire it up on my GBA, but it ain't budging. Anyone know how to get past this? I’ve got the ROM file here if anyone wants to take a look. Help an old gamer out!

This was the first challenge in the reverse engineering category.
You are given a GBA file that you have to crack. When opened in emulator you are presented with an anti-piracy screen with a genie that's asking you to input a code on one of the 8 pages that the game manual has. [18,19,21,23,25,33,34,35]
Knowing that you have 8 pages it shouldn't be too hard right? WRONG! You have the sequence of 7 symbols you have to input in order for the game to unlock itself. Knowing that each page has a different symbol sequence and you do not know the pages content you have to crack it. You choose to just scroll up to see all of the symbols and find out you have 26 symbols. So that's 26^7, we can just bruteforce it, and the problem is solved. Wrong again! You'd need to do it 8031810176 times. Which isn't really time saving you'll agree.

### The Plan

My initial plan was to:

1.  **Look around the code for vulnerable spots**
2.  **Find those vulnerable spots, analyze them and abuse them**
3.  **Get the flag home**

### How It Was Done

Looking around the code I found two interesting functions that explained the utility of the sequence checker and the sequence checker logic.

### Flag

`toh{th3_p4ssw0rd_f0r_the_x1zzle_club_is_bucket}`
