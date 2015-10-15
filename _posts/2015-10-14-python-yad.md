---
layout:     post
title:      Python-yad
date:       2015-10-14 13:53:00
summary:    Python-yad is a interface for the yad program which can be used to create simple dialogs on the screen.
categories:
 - projects
 - python
 - python-yad
author:     Sagar D.V
thumbnail:  flask
tags:
 - Python
 - Yad
 - Pexpect
 - Interface
---

## The Yad-Dialog

Yad is Linux program that allows the user to create simple GUI Dialogs on the screen using shell scripts. Its a fork of [Zenity](https://help.gnome.org/users/zenity/stable/) with a lot of extended features. For example, a calendar dialog can be bought up by opening the terminal and typing in the following command (assuming yad is installed in the system):

```bash
yad --calendar --day 14 --month 10 --year 2015
```

And you will get something like this:

<img style="margin:auto;display:block" src="{{ site.baseurl }}/lib/media/yad-calendar.png" height="auto"/>

You should check its `man-pages` for more options:

```bash
man yad
```

## The Python Interface

I created a python interface for this program. It depends on the `yad`, and the `pexpect` module. You can pretty much achieve the same results as the original. So, to get the calendar dialog as in the previous example, what you got to do is:

- Create a python script or enter the python shell in the terminal.
- Import the python-yad module and call the `YAD()` class.
- And finally call the calendar as `yad.Calendar()`

Here is the sample python code:

```python
#!/usr/bin/env python
from yad import YAD
yad = YAD()
dates = yad.Calendar(day="14", month="10", year="2015")
```

It will return either the *date* that were selected in the dialog or `none`. I made a clear documentation and its very easy to understand. You got to check out the `YAD` class for the parameters and examples.

The working of the interface is very simple. It generates a string with the appropriate parameters when the function is called. This string is then passed to a subprocess that is created with the `pexpect` module and then executed.

So, if you are doing a small project in python on linux and you need a simple GUI interaction, then yad is the best bet, in my opinion. The installation and usage instructions are given in the links below.

## Resources

- Python-yad : [https://pypi.python.org/pypi/yad/](https://pypi.python.org/pypi/yad/)
- Yad-Dialog : [http://sourceforge.net/projects/yad-dialog/](http://sourceforge.net/projects/yad-dialog/)
- Zenity : [https://help.gnome.org/users/zenity/stable/](https://help.gnome.org/users/zenity/stable/)
