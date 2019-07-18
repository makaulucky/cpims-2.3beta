function columnChart(elementId,the_title,the_x_axis,the_series){

    Highcharts.chart(elementId, {
        chart: {
            type: 'bar'
        },
        title: {
            text: the_title
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: the_x_axis,
            title: {
                text: ''
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            formatter: function() {
                return ''+
                    this.series.name +': '+ this.y +' ';
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black'
                }
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -100,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        colors: [
            '#F2784B',
            '#1BA39C',
            '#913D88',
            '#4d79ff',
            '#80ff00',
            '#ff8000',
            '#00ffff',
            '#ff4000'
        ],
        series: the_series
    });
    

}
