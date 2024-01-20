import axios from "axios";
import { toast } from "react-toastify";

export const http = axios.create();

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    // if (Auth.isValidSession()) {
    //     config.headers["Authorization"] = "Bearer " + Auth.getToken();
    // }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a request interceptor
http.interceptors.response.use(
  function (response) {
    notify(response.headers);
    return response;
  },
  function (error) {
    // Do something with request error
    let errorMsg = error.response.data.error;
    if (errorMsg) {
      toast.error(errorMsg);
    }
    return Promise.reject(error);
  }
);

const notify = (headers: any) => {
  if (headers["x-message-success"]) {
    toast.success(headers["x-message-success"]);
  }

  if (headers["x-message-info"]) {
    toast.info(headers["x-message-info"]);
  }

  if (headers["x-message-warning"]) {
    toast.warning(headers["x-message-warning"]);
  }
};
