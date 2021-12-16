import axios from 'axios';
export const registerUser = async (
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string,
  age: number,
) => {
  const gender = 'm';
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
