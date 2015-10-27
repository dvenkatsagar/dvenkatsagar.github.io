---
layout:     post
title:      Speech to Program Editor
date:       2015-10-16 22:28:00
summary:    A text editor that takes in voice commands and gives out programmatic blocks.
categories:
 - projects
 - web
 - speech-recognition
author:     Sagar D.V
thumbnail:  pencil-square-o
tags:
 - Speech Recognition
 - Browser
 - Mobile
 - Editor
 - HTML5
 - CSS3
 - Javascript
---

## Introduction

The speech to program editor is a small experiment that was done as a group project during my Masters. The idea was to make an editor that takes in a voice command or a speech input and convert that into a programmatic block. For example, if the user/developer says a command like "Add a html tag", then the editor should be able to process the command and show some Html form or modal for the user to select a tag and insert it. We made this editor with developers in mind and wanted to see if we could develop programs on the mobile without any keyboard input. We used basic HTML5, CSS3 and javascript to achieve this. Currently, the editor works on Google-Chrome as it has the webkit-speech API.

## The Concept

The concept behind the voice commands is similar to snippets. Snippets are basically small pieces of code that get inserted when you type a keyword. In the same manner, what we did was, we "linked" the pre-formated snippets with the voice commands by using a library known as *annyang.js*. Here is a small example on how to set a voice command :

{% highlight html %}
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.0.0/annyang.min.js"></script>
<script>
if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': function() { alert('Hello world!'); }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
</script>
{% endhighlight %}

In this manner we were able to get the editor working, and currently support the HTML language only.

## Limits and Observations

- Supports the chrome browser but the exception is for the Mac OS and Iphone.
- Speech is not properly recognized when there is noise in the background.
- Requires a Internet connection as the Speech API interacts with Google servers.
- There is a bit of lag when processing some voice commands.

I've upload a live demo of the editor. If you are interested, please do check it out and hope you find it useful.

## Resources

- Live Demo : [https://dvenkatsagar.github.io/proj/stp](https://dvenkatsagar.github.io/proj/stp)
- Source Repository : [https://gitlab.com/dvenkatsagar/speech-editor](https://gitlab.com/dvenkatsagar/speech-editor)
- Annyang.js : [https://www.talater.com/annyang/](https://www.talater.com/annyang/)
