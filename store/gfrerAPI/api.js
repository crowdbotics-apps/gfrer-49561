import axios from "axios"
const gfrerAPI = axios.create({
  baseURL: "https://gfrer-49561.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return gfrerAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return gfrerAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return gfrerAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_tcdvb_list(payload) {
  return gfrerAPI.get(`/api/v1/tcdvb/`)
}
function api_v1_tcdvb_create(payload) {
  return gfrerAPI.post(`/api/v1/tcdvb/`, payload)
}
function api_v1_tcdvb_retrieve(payload) {
  return gfrerAPI.get(`/api/v1/tcdvb/${payload.id}/`)
}
function api_v1_tcdvb_update(payload) {
  return gfrerAPI.put(`/api/v1/tcdvb/${payload.id}/`, payload)
}
function api_v1_tcdvb_partial_update(payload) {
  return gfrerAPI.patch(`/api/v1/tcdvb/${payload.id}/`, payload)
}
function api_v1_tcdvb_destroy(payload) {
  return gfrerAPI.delete(`/api/v1/tcdvb/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return gfrerAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return gfrerAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return gfrerAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return gfrerAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return gfrerAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return gfrerAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return gfrerAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return gfrerAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return gfrerAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return gfrerAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return gfrerAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_tcdvb_list,
  api_v1_tcdvb_create,
  api_v1_tcdvb_retrieve,
  api_v1_tcdvb_update,
  api_v1_tcdvb_partial_update,
  api_v1_tcdvb_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
