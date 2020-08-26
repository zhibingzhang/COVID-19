import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/admin/login",
    method: "POST",
    data
  });
}

export function register(data) {
  return request({
    url: "/admin/register",
    method: "POST",
    data
  });
}

export function getInfo(token) {
  return request({
    url: "/patient/admin",
    method: "get",
    params: { token }
  });
}

export function logout() {
  return request({
    url: "/vue-element-admin/user/logout",
    method: "post"
  });
}
