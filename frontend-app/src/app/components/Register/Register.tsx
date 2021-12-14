import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './styles.css';
export function Register() {
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

  return (
    <div>
      <form className="center">
        <h1>Registration</h1>
        <TextField helperText="Please enter your name" label="First name" />
        <br></br>
        <TextField helperText="Please enter your last name" label="Last name" />
        <br></br>

        <TextField helperText=" Please enter your username" label="Username" />
        <br></br>

        <TextField
          helperText=" Please enter your password"
          label="Password"
          type="password"
        />
        <br></br>

        <TextField
          helperText=" Please enter your email"
          label="Email"
          type="email"
        />
        <br></br>

        <TextField
          helperText=" Please enter your phone number"
          label="Phone number"
          type="number"
        />
        <br></br>
        <Box sx={{ display: 'flex' }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Gender</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} name="male" />}
                label="male"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} name="female" />}
                label="female"
              />
            </FormGroup>
          </FormControl>
        </Box>
        <br></br>

        <TextField label="Age" helperText=" Please enter your age" />
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
