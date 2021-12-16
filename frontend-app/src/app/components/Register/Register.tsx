import * as React from 'react';
import { useForm } from 'react-hook-form';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './styles.css';
import { registerUser } from '../../services/UserService';
export function Register() {
  const { register, handleSubmit } = useForm();
  const [m, setMale] = React.useState({});
  const [f, setFemale] = React.useState({});
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMale({
      ...m,
      [event.target.name]: event.target.checked,
    });
    setFemale({
      ...f,
      [event.target.name]: event.target.checked,
    });
  };
  const onSubmit = data => {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const username = data.username;
    const password = data.password;
    const email = data.email;
    const gender = data.gender;
    const age = data.age;
    console.log(data);
    signUp(username, password, lastName, firstName, email, age);
  };
  const signUp = async (
    username,
    password,
    lastName,
    firstName,
    email,
    age,
  ) => {
    const addedUser = await registerUser(
      username,
      password,
      lastName,
      firstName,
      email,
      age,
    );
    return addedUser;
  };
  return (
    <div>
      <form className="center" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration</h1>
        <TextField
          helperText="Please enter your name"
          {...register('firstName')}
          label="First name"
        />
        <br></br>
        <TextField
          helperText="Please enter your last name"
          {...register('lastName')}
          label="Last name"
        />
        <br></br>

        <TextField
          helperText=" Please enter your username"
          {...register('username')}
          label="Username"
        />
        <br></br>

        <TextField
          helperText=" Please enter your password"
          label="Password"
          {...register('password')}
          type="password"
        />
        <br></br>

        <TextField
          helperText=" Please enter your email"
          label="Email"
          {...register('email')}
          type="email"
        />
        <br></br>
        <Box sx={{ display: 'flex' }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Gender</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox {...register('male')} name="male" />}
                label="male"
              />
              <FormControlLabel
                control={<Checkbox {...register('female')} name="female" />}
                label="female"
              />
            </FormGroup>
          </FormControl>
        </Box>
        <br></br>

        <TextField
          label="Age"
          {...register('age')}
          helperText=" Please enter your age"
        />
        <div>
          <Button variant="contained">Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}
