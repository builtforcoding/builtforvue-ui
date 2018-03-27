<script>
import { Line, mixins } from 'vue-chartjs'
import Chart from 'chart.js'
export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data () {
    return {
      options: {
        showAllTooltips: false,
        title: {
          display: false
        },
        tooltips: {
          intersect: false,
          mode: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
          backgroundColor: 'transparent',
          bodyFontFamily: 'Poppins'
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: true,
        hover: {
          mode: 'index'
        },
        scales: {
          xAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        },
        elements: {
          line: {
            tension: 0.19
          },
          point: {
            radius: 4,
            borderWidth: 12
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 0
          }
        }
      }
    }
  },
  mounted () {
    this.addPlugin({
      beforeRender: function (chart) {
        if (chart.config.options.showAllTooltips) {
          // create an array of tooltips
          // we can't use the chart tooltip because there is only one tooltip per chart
          chart.pluginTooltips = []
          chart.config.data.datasets.forEach(function (dataset, i) {
            chart.getDatasetMeta(i).data.forEach(function (sector, j) {
              chart.pluginTooltips.push(new Chart.Tooltip({
                _chart: chart.chart,
                _chartInstance: chart,
                _data: chart.data,
                _options: chart.options.tooltips,
                _active: [sector]
              }, chart))
            })
          })

          // turn off normal tooltips
          chart.options.tooltips.enabled = false
        }
      },
      afterDraw: function (chart, easing) {
        if (chart.config.options.showAllTooltips) {
          // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
          if (!chart.allTooltipsOnce) {
            if (easing !== 1) { return }
            chart.allTooltipsOnce = true
          }

          // turn on tooltips
          chart.options.tooltips.enabled = true
          Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
            tooltip.initialize()
            tooltip.update()
            // we don't actually need this since we are not animating tooltips
            tooltip.pivot()
            tooltip.transition(easing).draw()
          })
          chart.options.tooltips.enabled = false
        }
      }
    })
    this.renderChart(this.data, this.options)
  }
}
</script>
