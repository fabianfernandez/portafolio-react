import { deleteRequest, getRequest, postRequest, putRequest } from "./api";

const apiUrl = process.env.REACT_APP_API_URL;

export const getMessages = () => getRequest(`${apiUrl}messages/`);

export const createMessage = (data) =>
  postRequest(`${apiUrl}messages/create/`, data);

export const deleteMessage = (id) =>
  deleteRequest(`${apiUrl}messages/delete/${id}/`);

export const editMessage = (id, data) =>
  putRequest(`${apiUrl}messages/update/${id}/`, data);
