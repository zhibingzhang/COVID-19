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
    url: "/admin/register",
    method: "post",
    data
  });
}

export function updatePatient(data) {
  return request({
    url: "/admin",
    method: "put",
    data
  });
}

export function deletePatient(data) {
  return request({
    url: "/admin",
    method: "DELETE",
    data
  });
}
