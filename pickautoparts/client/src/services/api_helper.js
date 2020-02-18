import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

// AUTH

// LOGIN
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  console.log(resp);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  localStorage.setItem('name', resp.data.user.name);
  localStorage.setItem('email', resp.data.user.email);
  return resp.data.user;
}

// REGISTER
export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/signup', registerData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('email', resp.data.user.email);
    return resp.data.user;
  } catch(e) {
    console.log(e.response);
    if (e.response.status === 422) {
      return {errorMessage: "Email is already associated with a user, please login to continue"}
    }
  }
}

// VERIFY USER
export const verifyUser = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }
}

// ORDERS
// GET ALL ORDERS
export const indexOrders = async () => {
  const resp = await api.get('/orders');
  return resp.data;
}

//POST THE ORDER
export const postOrder = async (postData) => {
  const resp = await api.post('/orders', postData);
  return resp.data;
}

//PASSWORD FORGOT
export const forgotUser = async email => {
  const resp = await api.post(`password/forgot`, email);
  return resp.data;
};

//PASSWORD RESET 
export const resetUser = async resetData => {
  const resp = await api.post(`password/reset`, resetData);
  return resp.data;
};

// UPDATE ORDER
export const putOrder = async (id, postData) => {
  const resp = await api.put(`/orders/${id}`, postData);
  const order = {id: id, shipping_address: resp.data.data}
  return order;
}

//=============+AUTOPARTS============//

// GET ALL ORDERS
export const indexAutoparts = async () => {
  const resp = await api.get('/autoparts');
  return resp.data;
}

// GET ONE AUTOPART
export const showAutopart = async (id) => {
  console.log("Show ind autopart");
  const resp = await api.get(`/autoparts/single/${id}`);
  return resp.data;
}

//POST THE Autoparts
export const postAutopart = async (id, pid, postData) => {
  const resp = await api.post(`/orders/${id}/autoparts/${pid}`, postData);
  return resp.data;
}

// UPDATE Autoparts
export const putAutopart = async (id, pid, postData) => {
  const resp = await api.put(`/orders/${id}/autoparts/${pid}`, postData);
  const autopart = {id: id, obj: resp.data.data}
  return autopart;
}

