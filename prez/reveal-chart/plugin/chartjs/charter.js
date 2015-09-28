/*
    Reveal-chart - A plugin to integrate chartjs with revealjs
    Copyright (C) 2013-2015  Sagar DV <dvenkatsagar@gmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

(function(){
	// get default configuration of Reveal.
	var getDefaults = function(){

		// check if chart option is given or not
	 	var o = Reveal.getConfig().chart || {};
		o.items = o.items || [];
		for (var i = 0; i < o.items.length; i++){
			o.items[i].canvas = o.items[i].canvas || {};
			o.items[i].canvas.width = o.items[i].canvas.width || "250px";
			o.items[i].canvas.height = o.items[i].canvas.height || "150px";
		}
		return o;
	}

	// Get the chart item related to the iframe
	var getOptItem = function(opt,id){
		if (!opt.items){
			return null;
		}
		for (var j = 0; j < opt.items.length; j++){
			if(opt.items[j].selector.substring(1) == id){
				return opt.items[j];
			}
		}
	}

	var plotChart = function(item,id){
		// plot the appropriate graph
		switch(item.type){
			case "line":
				window.charts[id].item.Line(item.data,item.options);
				break;
			case "bar":
				window.charts[id].item.Bar(item.data,item.options);
				break;
			case "radar":
				window.charts[id].item.Radar(item.data,item.options);
				break;
			case "polararea":
				window.charts[id].item.PolarArea(item.data,item.options);
				break;
			case "pie":
				window.charts[id].item.Pie(item.data,item.options);
				break;
			case "doughnut":
				window.charts[id].item.Doughnut(item.data,item.options);
				break;
		}
	}

	// Load chart into iframe
	var loadChart = function(event){
		// Get all iframes
		var iframes = event.currentSlide.querySelectorAll("iframe");
		for (var i = 0; i < iframes.length; i++ ){

			// check if iframe has data-chart attribute
			if (iframes[i].hasAttribute("data-chart")){

				// load a blank page into iframe
				iframes[i].src = "about:blank";
				iframes[i].addEventListener("load",function load(e){

					// remove event listener after loading to that it doesnt fire multiple times
					e.target.removeEventListener("load",load,false);

					// get id of frame
					var id = e.target.getAttribute("id").replace("-","_").toString();

					// create charts object with id as property
					window.charts[id] = {};

					// get iframe document
					window.charts[id].doc = e.target.contentDocument || e.target.contentWindow.document;

					// write empty canvas as iframe contents
					window.charts[id].doc.open();
					window.charts[id].doc.write('<canvas></canvas>');
					window.charts[id].doc.close();

					// get iframe canvas
					window.charts[id].canvas = window.charts[id].doc.querySelector("canvas");

					// get canvas context
					window.charts[id].ctx = window.charts[id].canvas.getContext("2d");

					// create new chart with context
					window.charts[id].item = new Chart(window.charts[id].ctx);

					// get the appropriate item data
					var optitem = getOptItem(getDefaults(),e.target.getAttribute("id"));

					if (optitem != null){
						// change canvas size
						window.charts[id].canvas.style.width = optitem.canvas.width;
						window.charts[id].canvas.style.height = optitem.canvas.height;

						// plot chart
						plotChart(optitem,id);
					}
					console.log(window.charts);
				},false);
			}
		}
	}

	// main
	window.charts = {};
	Reveal.addEventListener("ready", function(event){
		loadChart(event);
		Reveal.addEventListener("slidechanged", loadChart,false);
	},false);
})();
