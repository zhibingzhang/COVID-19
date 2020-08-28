<template>
  <div class="app-container">
    <el-button class="add-user" type="success" @click="handleCreate('create')">
      添加新患者
    </el-button>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="姓名" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年龄">
        <template slot-scope="{ row }">
          <span>{{ row.age }}</span>
        </template>
      </el-table-column>
      <el-table-column label="家庭住址">
        <template slot-scope="{ row }">
          <span>{{ row.diaProvince }} / {{ row.diaCity }}</span>
        </template>
      </el-table-column>
      <el-table-column label="发现时间">
        <template slot-scope="{ row }">
          <span>{{ row.symDate.substring(0, 10) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="诊断说明">
        <template slot-scope="{ row }">
          <span>{{ row.symptom }}</span>
        </template>
      </el-table-column>
      <el-table-column label="确认时间">
        <template slot-scope="{ row }">
          <span>{{ row.detecDate.substring(0, 10) }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="Actions"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row, $index }">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            Edit
          </el-button>
          <el-button
            v-if="row.status != 'deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row, $index)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :model="temp"
        label-position="left"
        label-width="80px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="姓名">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="temp.sex" label="男">男</el-radio>
          <el-radio v-model="temp.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="temp.age" />
        </el-form-item>
        <el-form-item label="所在省">
          <el-input v-model="temp.diaProvince" />
        </el-form-item>
        <el-form-item label="所在市">
          <el-input v-model="temp.diaCity" />
        </el-form-item>
        <el-form-item label="发现时间">
          <el-date-picker
            v-model="temp.symDate"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="诊断说明"
          ><el-input
            v-model="temp.symptom"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
        /></el-form-item>
        <el-form-item label="确诊时间">
          <el-date-picker
            v-model="temp.detecDate"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button
          type="primary"
          @click="dialogStatus === 'create' ? createData() : updateData()"
        >
          Confirm
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  fetchListPatient,
  createPatient,
  updatePatient,
  deletePatient
} from "@/api/article";
export default {
  name: "PagePermission",
  data() {
    return {
      list: null, //表格数据源
      listLoading: true, //加载数据
      tableKey: 0, // 表格key
      dialogFormVisible: false, //弹框
      dialogStatus: "", //弹框类型
      textMap: {
        //弹框类型
        update: "Edit",
        create: "Create"
      },
      temp: {
        //弹框数据
        name: "",
        set: "",
        age: "",
        diaProvince: "",
        diaCity: "",
        symDate: "",
        symptom: "",
        detecDate: ""
      }
    };
  },
  components: {},
  created() {
    this.getList();
  },
  methods: {
    getList() {
      //获取用户列表数据
      this.listLoading = true;
      fetchListPatient({ pageSizes: 999 }).then(response => {
        const { records } = response.data;
        console.log(response);
        this.list = records;
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    handleCreate() {
      // 添加新用户
      this.temp = {
        //弹框数据
        name: "",
        set: "",
        age: "",
        diaProvince: "",
        diaCity: "",
        symDate: "",
        symptom: "",
        detecDate: ""
      };
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
    },
    handleUpdate(row) {
      //更新用户信息
      this.temp = Object.assign({}, row); // copy obj
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          const tempData = Object.assign({}, this.temp);
          updateArticle(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.temp.id);
            this.list.splice(index, 1, this.temp);
            this.dialogFormVisible = false;
            this.$notify({
              title: "Success",
              message: "Update Successfully",
              type: "success",
              duration: 2000
            });
          });
        }
      });
    },
    createData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          createPatient(this.temp).then(() => {
            this.list.unshift(this.temp);
            this.dialogFormVisible = false;
            this.$notify({
              title: "Success",
              message: "Created Successfully",
              type: "success",
              duration: 2000
            });
          });
        }
      });
    },
    handleDelete(row, index) {
      //删除用户信息
      deleteArticle([row.id]).then(() => {
        this.$notify({
          title: "Success",
          message: "Delete Successfully",
          type: "success",
          duration: 2000
        });
        this.list.splice(index, 1);
      });
    },
    sortChange(data) {
      const { prop, order } = data;
      if (prop === "id") {
        this.sortByID(order);
      }
    }
  }
};
</script>

<style lang="scss">
.app-container {
  .el-dialog {
    width: 600px;
  }
  .add-user {
    margin-bottom: 20px;
  }
}
</style>
