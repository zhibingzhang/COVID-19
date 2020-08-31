<template>
  <div class="app-container">
    <el-row>
      <el-col :span="4">
        <el-button
          class="add-user"
          type="success"
          @click="handleCreate('create')"
        >
          添加新患者
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-input @input="inputChange" v-model="queryValue" />
      </el-col>
      <el-col :span="14">
        <el-button class="add-user" type="success" @click="handleQuery()">
          查询
        </el-button>
      </el-col>
    </el-row>
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
          <span>{{ row.sex == 10 ? "男" : "女" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年龄">
        <template slot-scope="{ row }">
          <span>{{ row.age }}</span>
        </template>
      </el-table-column>
      <el-table-column label="就诊医院">
        <template slot-scope="{ row }">
          <span>{{ row.diaHospital }}</span>
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
        width="150px"
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
    <!-- 分页器 -->
    <div class="pagination" v-if="list">
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="20"
      >
      </el-pagination>
    </div>
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
          <el-radio v-model="temp.sex" label="10">男</el-radio>
          <el-radio v-model="temp.sex" label="20">女</el-radio>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="temp.age" />
        </el-form-item>

        <el-form-item label="就诊医院">
          <el-input v-model="temp.diaHospital" />
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
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          >
            >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="诊断说明">
          <el-input
            v-model="temp.symptom"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
          />
        </el-form-item>
        <el-form-item label="确诊时间">
          <el-date-picker
            v-model="temp.detecDate"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          >
            >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="死亡时间">
          <el-date-picker
            v-model="temp.dieDate"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          >
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
  deletePatient,
  queryName
} from "@/api/article";
export default {
  name: "PagePermission",
  components: {},
  data() {
    return {
      list: null, // 表格数据源
      newList: null, //临时数据
      listLoading: true, // 加载数据
      tableKey: 0, // 表格key
      dialogFormVisible: false, // 弹框
      dialogStatus: "", // 弹框类型
      total: 0, //总条数
      currentPage: 1, //第几页
      textMap: {
        // 弹框类型
        update: "Edit",
        create: "Create"
      },
      temp: {},
      queryValue: ""
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      // 获取用户列表数据
      this.listLoading = true;
      fetchListPatient({ pageSizes: 20, currentPage: this.currentPage }).then(
        response => {
          const { records, total } = response.data;
          this.list = records;
          this.newList = records;
          this.total = total;
          // Just to simulate the time of the request
          setTimeout(() => {
            this.listLoading = false;
          }, 1.5 * 1000);
        }
      );
    },
    handleCreate() {
      // 添加新用户
      this.temp = {
        age: "",
        detecDate: "",
        diaCity: "",
        diaHospital: "",
        diaProvince: "",
        diagDate: "2020-08-05",
        isDoc: true,
        name: "",
        sex: null,
        symDate: "",
        symptom: ""
      };
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
    },
    handleUpdate(row) {
      // 更新用户信息
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
          console.log(tempData);
          updatePatient(tempData).then(() => {
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
          console.log(this.temp);
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
      // 删除用户信息
      deletePatient([row.id]).then(() => {
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
    },
    inputChange() {
      if (!this.queryValue) {
        this.list = this.newList;
      }
    },
    handleQuery() {
      if (this.queryValue) {
        this.list = this.newList.filter(item => {
          return item.name.indexOf(this.queryValue) > -1;
        });
      } else {
        this.list = this.newList;
      }
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    }
  }
};
</script>

<style lang="scss">
.app-container {
  .pagination {
    text-align: center;
    margin: 20px 0;
  }
  .el-dialog {
    width: 600px;
  }
  .add-user {
    margin-bottom: 20px;
  }
}
</style>
