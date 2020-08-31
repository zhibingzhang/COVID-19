<template>
  <div class="dashboard-editor-container">
    <el-row>
      <h2 style="text-align: center">每日数据</h2>
    </el-row>
    <el-row class="daily" :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <h2 style="color: #E83132;">确诊</h2>
          <p>{{ daily.detect || 18 }}</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <h2 style="color: #10AEB5;">治愈</h2>
          <p>{{ daily.cured || 11 }}</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <h2 style="color: #4D5054;">死亡</h2>
          <p>{{ daily.dead || 2 }}</p>
        </div>
      </el-col>
    </el-row>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <map-chart />
    </el-row>

    <el-row>
      <el-col
        :xs="24"
        :sm="24"
        :lg="11"
        style="background:#fff;padding:16px 16px 0;margin-bottom:32px;"
      >
        <h3>死亡病例的年龄分布</h3>
        <PieChart />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="2" style="height: 400px;"></el-col>
      <el-col
        style="background:#fff;padding:16px 16px 0;margin-bottom:32px;"
        :xs="24"
        :sm="24"
        :lg="11"
      >
        <h3>确诊病例的得男女比例</h3>
        <PieChart2 />
      </el-col>
    </el-row>

    <el-row>
      <el-col
        :xs="24"
        :sm="24"
        :lg="24"
        style="background:#fff;padding:16px 16px 0;margin-bottom:32px;"
      ></el-col
    ></el-row>
  </div>
</template>

<script>
import MapChart from "./components/MapChart";
import PieChart from "./components/PieChart";
import PieChart2 from "./components/PieChart2";

import { getbyAllDaily } from "@/api/article";
export default {
  name: "DashboardAdmin",
  components: {
    MapChart,
    PieChart,
    PieChart2
  },
  data() {
    return {
      daily: {
        cured: 0,
        dead: 0,
        detect: 0
      }
    };
  },
  mounted() {
    this.getDaily();
  },
  methods: {
    getDaily() {
      getbyAllDaily().then(response => {
        const { data } = response;
        this.daily = data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  .daily {
    text-align: center;
    .chart-wrapper {
      padding-bottom: 16px;
    }
  }
  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
