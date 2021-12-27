import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { editUser } from 'app/services/UserService';
import { Helmet } from 'react-helmet-async';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../LoginPage/slice/selectors';
import './styles.css';
import { Radio, RadioGroup } from '@mui/material';
import { useCurrentUserSlice } from '../LoginPage/slice';

export function EditProfilePage() {
  const currentUser = useSelector(selectUser);

  const { actions } = useCurrentUserSlice();

  const dispatch = useDispatch();

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      password: currentUser?.password,
      username: currentUser?.username,
      email: currentUser?.email,
      age: currentUser?.age,
      file: currentUser?.image,
      gender: currentUser?.gender,
    },
  });

  const onSubmit = data => {
    const formData = new FormData();
    for (const prop in data) {
      formData.append(prop, data[prop]);
    }
    formData.append('id', currentUser?.id + '');

    if (data['file']) formData.append('file', data['file'][0]);
    else if (currentUser?.image)
      formData.append('image', currentUser?.image + '');
    else formData.append('image', '');
    editUser(formData).then(freshUser => {
      dispatch(actions.changeUser(freshUser));
    });
  };

  return (
    <>
      <Helmet>Edit profile</Helmet>
      <div>
        <form className="center" onSubmit={handleSubmit(onSubmit)}>
          <h1>Edit pofile</h1>
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

          <TextField
            label="Age"
            {...register('age')}
            helperText=" Please enter your age"
          />
          <br></br>
          {currentUser?.image ? (
            <img src={currentUser?.image + ''} width="100px" height="100px" />
          ) : (
            <></>
          )}

          <br />
          <br />

          <Button variant="contained" component="label">
            Change image
            <input type="file" {...register('file')} hidden />
          </Button>
          <br />
          <br />

          <Box sx={{ display: 'flex' }} className="box">
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <Controller
                control={control}
                name="gender"
                render={({ field }) => {
                  return (
                    <RadioGroup row {...field}>
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  );
                }}
              />
            </FormControl>
          </Box>

          <div>
            <Button type="submit" variant="contained" color="primary">
              Edit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
