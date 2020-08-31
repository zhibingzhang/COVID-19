import request from "@/utils/request";

/**
 * 管理员接口
 * @param {option}} query
 */

export function fetchList(query) {
  return request({
    url: "/admin",
    method: "get",
    params: query
  });
}
export function createArticle(data) {
  return request({
    url: "/admin/register",
    method: "post",
    data
  });
}

export function updateArticle(data) {
  return request({
    url: "/admin",
    method: "put",
    data
  });
}

export function deleteArticle(data) {
  return request({
    url: "/admin",
    method: "DELETE",
    data
  });
}

/**
 * ============================================
 * 患者用户接口
 */

export function fetchListPatient(query) {
  return request({
    url: "/patient/admin",
    method: "get",
    params: query
  });
}

export function createPatient(data) {
  return request({
    url: "/patient/admin",
    method: "post",
    data
  });
}

export function updatePatient(data) {
  return request({
    url: "/patient/admin",
    method: "put",
    data
  });
}

export function deletePatient(data) {
  return request({
    url: "/patient/admin",
    method: "DELETE",
    data
  });
}

// 武汉中心医院患者

export function fetchListPatmet(query) {
  return request({
    url: "/patient/pat-med/byHospital",
    method: "get",
    params: query
  });
}

export function createPatmet(data) {
  return request({
    url: "/patient/admin",
    method: "post",
    data
  });
}

export function updatePatmet(data) {
  return request({
    url: "/patient/admin",
    method: "put",
    data
  });
}

export function deletePatmet(data) {
  return request({
    url: "/patient/admin",
    method: "DELETE",
    data
  });
}

// 各省市病例数据分布
export function getbyAllProvince() {
  return request({
    url: "/patient/admin/byAllProvince",
    method: "get"
  });
}

// 查询每日痊愈-死亡-累计人数
export function getbyAllDaily() {
  return request({
    url: "/patient/admin/daily",
    method: "get"
  });
}

//按名称查询
export function queryName() {
  return request({
    url: "/patient/admin/byname",
    method: "get"
  });
}
