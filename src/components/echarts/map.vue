<template>
  <div id="map" ref="map" />
</template>

<script>
export default {
  data() {
    return {
      mapList: []
    }
  },
  mounted() {
    this.axios.get('/getchartsmap').then(res => {
      this.mapList = res.data.range
      this.initMap(this.mapList)
    })
  },
  created() {

  },
  methods: {
    initMap() {
      const charts = this.$echarts.init(this.$refs.map)
      const options = {
        title: {
          text: '未来一周气温变化', // 图表顶部的标题
          subtext: '纯属虚构' // 副标题
        },
        tooltip: { // 鼠标悬浮框的提示文字
          trigger: 'axis'
        },
        legend: {
          data: ['最高气温', '最低气温']
        },
        xAxis: [{ // x轴坐标数据
          type: 'category',
          boundaryGap: false,
          data: this.mapList
        }],
        yAxis: [{ // y轴坐标数据
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        }],
        series: [ // 驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
          {
            name: '最高气温',
            type: 'line', // pie->饼状图  line->折线图  bar->柱状图
            data: this.mapList
          },
          {
            name: '最低气温',
            type: 'line', // pie->饼状图  line->折线图  bar->柱状图
            data: [1, -2, 2, 5, 3, 2, 0]
          }
        ] }

      charts.setOption(options)
    }
  }
}
</script>

<style lang='less' scoped>
#map{
    width: 100%;
    height: 100%;
}
</style>
