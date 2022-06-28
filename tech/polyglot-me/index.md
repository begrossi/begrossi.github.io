# Poliglot, Me?



## Polyglot, me? — Bruno E. Grossi

I’m studying English again but serious now.

Although I studied English when was young and have already worked with teams abroad, my current job as a Software Architect at Ci&T is the first one where I really need English. And the company is actually helping me intending to be fluent in English. But I need to confess: it’s a painful process for me, as I don’t like English. I prefer to learn Italian, the beautiful language of my ancestors (si, ho già studiato italiano). But English is necessary and useful in all aspects. So, let’s practice it. Writing, speaking, and thinking in English is part of my job and responsibilities, and I’m committed to it. And writing is a good exercise.

Meantime, I remembered that I’m already fluent in a lot of languages: programming languages. Some years ago, Barack Obama [made a speech](https://www.youtube.com/watch?v=6XvmhE1J9PY) asking Americans to learn computer programming (and [became the first American president to write a computer program](https://www.wired.com/2014/12/obama-becomes-first-president-write-computer-program/)). More recently, Apple’s Tim Cook said that [coding is better than learning English](https://qz.com/1099791/apples-tim-cook-says-coding-is-better-than-learning-english-as-a-second-language/). So, I decided to list and review my story with the programming languages.

I learned to program when I was 8. Nowadays, we have a lot of programming schools focused on children, but I was an 8-year-old boy in 1980s’ Brazil. We didn’t use to have Personal Computers in stores before the 1990s here. But anyway, my parents always believed computers would be the future, and borrowed a TK-8000 computer that only executes **MS Basic** codes. And then, my brothers and I wrote our first lines of code that, I suppose, were like these:

```basic
10 INPUT "What is your name?", NAME$ 
20 INPUT "Input a number ", A 
30 FOR I=1 TO A 
40 PRINT "Hello "; NAME$ 
50 NEXT I
```

In Basic, all lines start with a number that is used to indicate the order to execute. If you want to edit a line, you only send a new line with the same number, and it will be replaced (you can try this code online [here](https://yohan.es/swbasic/)). TK-8000 didn’t have a storage option. I did a lot of code and small, simple games on it — and copy all lines to a paper to rewrite after I started again.

When my parents finally bought our first Personal Computer, a PC XT from a national manufacturer, it cames with **Quick Basic**, a new version of MS Basic, and floppy disks to save the code.

With new options (wow, there was an operational system!), I understood that Basic was not the only existing programming language, and what a compiler is. So I discovered **Assembly** language that was used only by professionals at that time. I didn’t write so much code on it but understand their codes and hack some of them (like change Assembly codes to change Game behaviors).

An example of Assembly code is (try it online [here](https://www.tutorialspoint.com/compile_assembly_online.php)):

```asm
section .text
    global _start ;must be declared for using gcc
_start: ;tell linker entry point
    mov edx, len ;message length
    mov ecx, msg ;message to write
    mov ebx, 1 ;file descriptor (stdout)
    mov eax, 4 ;system call number (sys_write)
    int 0x80 ;call kernel
    mov eax, 1 ;system call number (sys_exit)
    int 0x80 ;call kernel
section .data
msg db 'Hello, world!',0xa ;our dear string
len equ $ - msg ;length of our dear string
```

And then, we got Windows 3.1, the last version before the so popular Windows 95. With graphical options, we’ve got **Visual Basic 1.0**. It’s a new paradigm for the same Basic language, now with a graphical user interface (GUI). With Visual Basic, I made my first money with programming. It was a simple phone book written for a friend for a small charge (thank you, my friend, for encouraging me).

With the modem and Boletim Board Systems (BBS) era, nearly 1993, I learned about **scripts** and **C** language. My first contact with Linux and shell scripts was at that time too.

In Brazil, the rise of the internet, nearly 1994, brought us **mIRC scripts**, and **HTML** (which is not exactly a programming language). And then, CGIs on the server-side, using the **Perl** language, that I used for a long time. **PHP** was a natural evolution, and I wrote a lot of modularized code for some professional projects. At that point, I had learned database systems and the **SQL language**.

I started to use **JavaScript** in 1995 to “blink some fun things” [on HTML pages](https://medium.com/@benastontweet/lesson-1a-the-history-of-javascript-8c1ce3bffb17). JavaScript was straightforward and at an early stage at that time. But I loved it.

In 1995 or 1996, I started to create Windows applications with Borland’s **Delphi**, a visual programming environment that uses a version of Pascal as its language. Delphi was a great evolution compared to MS Visual Basic at that time.

Between 1996 and 1997, I had my first contact with **Java**. I didn’t understand at that moment what OOP was but used Java for some code experiments with the MySQL database.

Only in 1999, at 18 years old, I started formal education in Computer Science at Federal University of Ouro Preto. Then I could practice and understand more about **Pascal**, **C/C++**, and **Java** (with OOP, finally!). I learned how programming languages are created and that I could create my own language! (it didn’t happen, yet!)

I choose Java as my favorite language on college, and the most promising, due to its open nature and the *write once run everywhere* promise. So I took my first certification in Java and decided that it will be my focus to start my career. Although I had a lot of contact with C / C ++ in the master’s degree, I worked with Java for a long time (and helped to create the MGJUG — Minas Gerais Java User Group) until 2012. I’ve participated as a JCP member helping with some decisions and votings about language evolution.

In 2013, after a fast experiment with **Groovy**, I decided to use more non-static languages. And finally had an opportunity to develop a big data analytics system using **Python**. Python is a great language and one of my favorites until now.

NodeJS was a great surprise to me in the 2016’s. I was back to the **JavaScript** language, but now working on full-stack with it. Mobile, Web, Backend APIs, and scripts… you can use it everywhere. It’s incredible. I learned a lot about **CSS** too. (One note here: Sun Microsystems and Google already tried to use Java as a Web language with [JavaFX](https://www.toptal.com/front-end/javascript-front-ends-in-java-with-gwt) and [GWT](https://www.toptal.com/front-end/javascript-front-ends-in-java-with-gwt), but they failed miserably.)

**Ruby** I learned when working at [Catarse](https://catarse.me). It’s a very interesting language that evolves many Python features with a modern “implement by exception” feature created to its core Rails framework. It was one of the hardest languages to learn for me. You can see their code [here](https://github.com/common-group). I really want to code more in Ruby someday.

Some years ago I had a fast experience with C#, but I didn’t like it. It looked, for me, like a copy of Java with a lot of dependency on Microsoft frameworks. But in 2019 I was involved in some projects using **C#** and .Net framework (and after the .Net Core) and, to my surprise, it evolved a lot as a language. C# 8 has a lot of modern language features to reduce verbosity, improve productivity, and become more versatile and assertive. I hope that Java will have these features in the future.

Now, at Ci&T, I’m back to **Java** programming after a long time. A lot has changed on the Java ecosystem but the language is essentially the same. We didn’t have an “ [Elvis operator](https://en.wikipedia.org/wiki/Elvis_operator)” yet! And we still use Maven, Log4j, jUnit, and Spring (that has a lot of more components now). My favorite language is evolving faster in the last years under Oracle’s new [JCP 2](https://jcp.org/en/procedures/jcp2) program. That’s great. And I think that I have a lot to learn yet. Including other JVM languages, like the incredible **Kotlin**.

What to learn now? What should be my next programming language? **Rust** and **Go** are my favorite candidates, but **Kotlin** is in on the road. Which one do you suggest to me?

*Originally published at [https://brunogrossi.com](https://brunogrossi.com/tech/polyglot-me/) on September 1, 2020.*

