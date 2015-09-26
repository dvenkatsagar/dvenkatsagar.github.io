(function(){
	var options = Reveal.getConfig().chart || {};
	options.items = options.items || [];
	var charts = {};
	var iframes = null;

	/*
	Idea is every iframe has 1 chart in it.
	List of charts. Must be a array of objects as follows :
		[{
			selector : null, // The iframe to be used to insert the chart.
			type : null, // Type of chart, can be of the following values : line, bar, radar, polararea, pie, doughnut.
			options : {}, // The individual options of each chart. check chartjs documentation.
			data : []/{}, // The data of the chart. check chartjs documentation.
		},
		. . .]
	*/
	Reveal.addEventListener("ready", function(event){
		chartLoad(event);
		window.charts = charts;
	});
	Reveal.addEventListener("slidechanged", function(event){
		chartLoad(event);
		window.charts = charts;
	});

	function chartLoad(event){
		// Select all iframes
		iframes = event.currentSlide.querySelectorAll("iframe");
		for (var i = 0; i < iframes.length; i++ ){
			// check if the iframe has data-chart attribute
			if (iframes[i].hasAttribute("data-chart")){
				// Load a blank page in it
				iframes[i].src = "about:blank";
				// After the page loads
				iframes[i].addEventListener("load",function(i){
					// Get iframe document
					var doc = this.contentDocument || this.contentWindow.document;
					// write the canvas tag
					doc.open(); doc.write('<canvas></canvas>'); doc.close();
					// select the canvas tag
					var canvas = doc.querySelector("canvas");
					// set the width and height of the canvas
					canvas.style.width = (parseInt(this.style.width.slice(0,-2))*90/100).toString() +"px" ||"250px";
					canvas.style.height = (parseInt(this.style.height.slice(0,-2))*90/100).toString() + "px"||"250px";
					// get 2d context of canvas
					ctx = canvas.getContext("2d");
					// get id of iframe
					var id = this.getAttribute("id").replace("-","_");
					// create chart object
					charts[id] = new Chart(ctx);
					// if there are any options given in Reveal.initialize
					if (options.items){
						// parse options and get informations of the charts to insert
						for (var j = 0; j < options.items.length; j++){
							// check the selector
							if(options.items[j].selector.substring(1) == this.getAttribute("id")){
								// plot the appropriate graph
								switch(options.items[j].type){
									case "line":
										charts[id].Line(options.items[j].data,options.items[j].options);
										break;
									case "bar":
										charts[id].Bar(options.items[j].data,options.items[j].options);
										break;
									case "radar":
										charts[id].Radar(options.items[j].data,options.items[j].options);
										break;
									case "polararea":
										charts[id].PolarArea(options.items[j].data,options.items[j].options);
										break;
									case "pie":
										charts[id].Pie(options.items[j].data,options.items[j].options);
										break;
									case "doughnut":
										charts[id].Doughnut(options.items[j].data,options.items[j].options);
										break;
								}
							}
						}
					}
				});
			}
		}
	}
})();
