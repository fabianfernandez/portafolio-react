import { deleteRequest, getRequest, postRequest, putRequest } from "./api";

export const getMessages = () => getRequest("http://127.0.0.1:8000/messages/");

export const createMessage = (data) =>
  postRequest("http://127.0.0.1:8000/messages/create/", data);

export const deleteMessage = (id) =>
  deleteRequest(`http://127.0.0.1:8000/messages/delete/${id}/`);

export const editMessage = (id, data) =>
  putRequest(`http://127.0.0.1:8000/messages/update/${id}/`, data);
