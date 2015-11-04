(function () {
    'use strict';
	var svg = d3.select('#graph')	// we need a drawing area
				.append('svg')
				.style({			// style is really matter, since its vector-based
					width: '100%',
					height: 500
				});

    var manually = function (data, x, y) {          // cahrt drawing function
        var colors, total, offset, arc, slice;

        data = data.sort(function (a, b) {
            return d3.descending(a.value, b.value);
        });
    
        colors = d3.scale.category20c();            // use 20 colors
        
        total = d3.sum(data.map(function (d) {      // totoal is used to determine how big the slide should be
            return d.value;
        }));
    
        offset = function (d, i) {
            return d3.sum(data.slice(0, i).map(function (d) {
                return 2*Math.PI*(d.value/total);   // angle is in radians
            }));
        };
        
        arc = d3.svg.arc()  // arg generator is used to build svg path definition for the slides
                .outerRadius(150)
                .startAngle(offset)
                .endAngle(function (d, i) {
                    return offset(d, i) + 2*Math.PI*(d.value/total);
                });
        
        slice = svg.selectAll('.slice') // create a group of elements for every slice
                    .data(data)
                    .enter()
                    .append('g')
                    .attr('transform', 'translate(' + x + ', ' + y +')');

        slice.append('path')
            .attr({
                d: arc,
                fill: function (d, i) { return colors(i); },
                title: function (d) { return d.label + ' (' + d.value + ')'; }
        });
    };
    
	d3.json('ufo-types.json', function (data) {
        manually(data, 300, 250);
        
        $('svg path').tooltip({
            container: 'body',
            placement: 'right'
        });
    });	// use .json() to load data, deal with data in data load callback
}());