---
layout:     post
title:      Reveal-Chart
date:       2015-10-15 19:15:00
summary:    A plugin that integrates Chart.js with Reveal.js.
categories:
 - projects
 - web
 - reveal
author:     Sagar D.V
thumbnail:  pie-chart
tags:
 - Reveal.js
 - Chart.js
 - Plugin
 - Javascript
 - HTML5
 - CSS3
---

## Reveal.js

Reveal is a javascript framework for creating solid and beautiful presentations on the browser using HTML and CSS. It supports some really good features and has a lot of plug-ins. The interesting thing is that, it has a *speaker* view which gives an overview of all the slides in the presentation. It also shows the speaker the notes that he/she has written for each slide along with the timer. There are other features like exporting to PDF, Markdown support, nested slides, etc.

Here is a live demo taken from the project page :

<iframe src="https://lab.hakim.se/reveal-js/#/" style="width:100%; height:500px;border:1px solid black;"></iframe>

## Chart.js

Chart.js is a small library that is capable of drawing different types of interactive charts on the HTML5 Canvas. There are currently 6 charts available which can extended using the API. Here is a simple example taken from the documentation :

<canvas id="chart1" style="width:250px; height:250px; margin:auto; display:block;"></canvas>
<p style="text-align:center;"><small>Hover over the chart for more information</small></p>
<script src="{{ site.baseurl }}/lib/js/Chart.min.js"></script>
<script type='text/javascript'>
  var data = [
    {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Turquoise"
    },
    {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
    }
  ];

  var options = {};

  var ctx = document.getElementById("chart1").getContext("2d");
  var chart1 = new Chart(ctx).Doughnut(data,options);
</script>

And here is the sample code :

{% highlight html %}
<!-- Create a Canvas  -->
<canvas id="chart1" style="width:250px; height:250px; margin:auto; display:block;"></canvas>

<!-- Load the Chart.js Library -->
<script src="Chart.min.js"></script>
<script type='text/javascript'>
// Set the data
  var data = [
    {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Turquoise"
    },
    {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
    }
  ];

// Set individual options for the chart
  var options = {};

// Get the canvas context
  var ctx = document.getElementById("chart1").getContext("2d");

// Call the chart
  var chart1 = new Chart(ctx).Doughnut(data,options);
</script>
{% endhighlight %}

It has neat documentation and is very easy to understand. There are other alternatives to this library that you can checkout, like [highcharts.js](https://www.highcharts.com/), [canvas.js](https://www.canvasjs.com), [d3.js](https://www.d3js.org/) which can visualize more complex data but what you will find is that, some of them are free for only non-commercial use and are a little bit difficult to setup.

## The Plug-in

When I was developing a presentation using reveal.js, there was a requirement where I had to add some charts to the slides. I searched online and found out about chart.js. Unfortunately, for some reason, when trying to add a chart by following the given documentation, it just doesn't work. So I fiddled around with it and was able to make it work by only adding an *iframe*. The results were favorable but wasn't consistent when looking at it from different devices. As this method worked, I started experimenting with it and kinda developed a plug-in that integrates the two libraries.

Here is a presentation with the detailed documentation on how to install and use it :

<iframe src="https://dvenkatsagar.github.io/prez/reveal-chart.html#/" style="width:100%; height:500px;border:1px solid black;"></iframe>

## Resources

- Reveal-Chart : [https://gitlab.com/dvenkatsagar/reveal-chart](https://gitlab.com/dvenkatsagar/reveal-chart)
- Reveal.js : [https://github.com/hakimel/reveal.js/](https://github.com/hakimel/reveal.js/)
- Chart.js : [www.chartjs.org](http://www.chartjs.org)
