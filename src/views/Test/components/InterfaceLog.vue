<template >
  <div id="InterfaceLog">
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue'
import { result as res } from '../Log.json'
// console.log(LOG);
// let res = []
console.log(res);
console.log(echarts);
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('InterfaceLog'));
  var option;
  var legend_data = []
  var xAxis_data = []
  var series_data = []
  if (res.length) {
    const { log_data } = res[0]
    legend_data = log_data.map(item => item.name)
    console.log(legend_data);
    xAxis_data = res.map(item => item.log_date)
    series_data = legend_data.map(item => {
      return {
        name: item
      }
    })
    series_data.forEach((item, idx) => {

      var _data_ = []
      res.forEach(item => {
        _data_.push(item['log_data'][idx]['request'])
      })
      item['type'] = 'line'
      item['stack'] = 'Total'
      item['data'] = _data_
    })
  }
  console.log(series_data,'series_data');

  option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: legend_data,
      top: 40
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      height: '80%'
    },
    toolbox: {
      feature: {
       dataZoom: {
         yAxisIndex: "none"
       },
       dataView: {
         readOnly: false
       },
       magicType: {
         type: ["line", "bar"]
       },
       restore: {},
       saveAsImage: {}
     },
     orient: "vertical"
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxis_data
    },
    yAxis: {
      type: 'value'
    },
    series: series_data
  };

  option && myChart.setOption(option);
})
</script>

<style lang="scss">
#InterfaceLog{
  width:100vw;
  height:100vh;
}
</style>
