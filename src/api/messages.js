import { getRequest, postRequest } from "./api";

export const getMessages = () => getRequest("http://127.0.0.1:8000/messages/");

export const createMessage = (data) => postRequest("message/create/", data);
