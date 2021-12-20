import axios from 'axios';
import { ResponseError } from 'utils/request';
export const registerUser = async (
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string,
  age: number,
  gender: string,
) => {
  return await axios
    .post('http://localhost:5000/api/users', {
      username,
      password,
      firstName,
      lastName,
      email,
      gender,
      age,
    })
    .then(response => {
      return response.data;
    });
};

export async function sendFriendRequest(userId: number, reciverId: number): Promise<{} | { err: ResponseError }> {
  const res = await axios.post(`http://localhost:5000/api/friendship/${userId}/${reciverId}`);
  return res.data;
}

export const getMe = async (username: string) => {
  return await axios
    .post('http://localhost:5000/api/users/me', {
      username,
    })
    .then(response => {
      return response.data;
    });
}
