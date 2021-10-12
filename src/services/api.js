import axios from "axios";
const config = {
  header: {
    "content-Type": "application/json",
  },
};
const Url = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    await axios.post(`${Url}/add`, data, config);
  } catch (error) {
    console.log("error while adding user");
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${Url}/users`, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error while getting users");
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${Url}/conversation/add`, data, config);
  } catch (error) {
    console.log(" error while calling setConversation");
  }
};

export const getConversation = async (data) => {
  try {
    const response = await axios.post(`${Url}/conversation/get`, data, config);
    return response.data;
  } catch (error) {
    console.log(" error while getting Conversation");
  }
};

export const newMessage = async (data) => {
  try {
    const response = await axios.post(`${Url}/message/add`, data, config);
    return response.data;
  } catch (error) {
    console.log(" error while adding Conmessageversation");
  }
};

export const getMessages = async (id) => {
  try {
    return await axios.get(`${Url}/message/get/${id}`);
  } catch (error) {
    console.log(" error while getting messgae");
  }
};
