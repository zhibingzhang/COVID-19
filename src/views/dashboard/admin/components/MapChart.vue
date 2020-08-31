<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import { getbyAllProvince } from "@/api/article";
import echarts from "echarts";
require("echarts/theme/roma"); // echarts theme
require("echarts/map/js/china");
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "650px"
    },
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null,
      chartData: [
        { name: "北京", value: Math.round(Math.random() * 1000) },
        { name: "天津", value: Math.round(Math.random() * 1000) },
        { name: "上海", value: Math.round(Math.random() * 1000) },
        { name: "重庆", value: Math.round(Math.random() * 1000) },
        { name: "河北", value: Math.round(Math.random() * 1000) },
        { name: "河南", value: Math.round(Math.random() * 1000) },
        { name: "云南", value: Math.round(Math.random() * 1000) },
        { name: "辽宁", value: Math.round(Math.random() * 1000) },
        { name: "黑龙江", value: Math.round(Math.random() * 1000) },
        { name: "湖南", value: Math.round(Math.random() * 1000) },
        { name: "安徽", value: Math.round(Math.random() * 1000) },
        { name: "山东", value: Math.round(Math.random() * 1000) },
        { name: "新疆", value: Math.round(Math.random() * 1000) },
        { name: "江苏", value: Math.round(Math.random() * 1000) },
        { name: "浙江", value: Math.round(Math.random() * 1000) },
        { name: "江西", value: Math.round(Math.random() * 1000) },
        { name: "湖北", value: Math.round(Math.random() * 1000) },
        { name: "广西", value: Math.round(Math.random() * 1000) },
        { name: "甘肃", value: Math.round(Math.random() * 1000) },
        { name: "山西", value: Math.round(Math.random() * 1000) },
        { name: "内蒙古", value: Math.round(Math.random() * 1000) },
        { name: "陕西", value: Math.round(Math.random() * 1000) },
        { name: "吉林", value: Math.round(Math.random() * 1000) },
        { name: "福建", value: Math.round(Math.random() * 1000) },
        { name: "贵州", value: Math.round(Math.random() * 1000) },
        { name: "广东", value: Math.round(Math.random() * 1000) },
        { name: "青海", value: Math.round(Math.random() * 1000) },
        { name: "西藏", value: Math.round(Math.random() * 1000) },
        { name: "四川", value: Math.round(Math.random() * 1000) },
        { name: "宁夏", value: Math.round(Math.random() * 1000) },
        { name: "海南", value: Math.round(Math.random() * 1000) },
        { name: "台湾", value: Math.round(Math.random() * 1000) },
        { name: "香港", value: Math.round(Math.random() * 1000) },
        { name: "澳门", value: Math.round(Math.random() * 1000) }
      ]
    };
  },
  created() {
    this.getOptions();
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    },
    getOptions() {
      getbyAllProvince().then(response => {
        const { data } = response;
        this.chartData = data.map(item => {
          item.value = item.sum;
          return item;
        });
        this.initChart();
      });
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        title: {
          text: "全国新冠肺炎分布",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            return `${params.name}:${params.value}`;
          }
        },
        dataRange: {
          min: 0,
          max: 2500,
          x: "left",
          y: "bottom",
          text: ["高", "低"],
          calculable: true
        },
        toolbox: {
          show: true,
          orient: "vertical",
          x: "right",
          y: "center",
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        roamController: {
          show: true,
          x: "right",
          mapTypeControl: {
            china: true
          }
        },
        series: [
          {
            type: "map",
            mapType: "china",
            roam: false,
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } }
            },
            data: this.chartData
          }
        ]
      });
    }
  }
};
</script>
