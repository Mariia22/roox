import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  try {
    const data = await axios.get(URL);
    return data.data;
  }
  catch (error) {
    console.log(error);
  }
}