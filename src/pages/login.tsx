
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';

import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login: React.FC = () => {

  return (
    <form noValidate>
      <FormControl fullWidth>
        <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email-login"
          type="email"
          name="email"
          label="Email Address / Username"
          inputProps={{}}
        />
      </FormControl>

      <FormControl
        fullWidth

      >
        <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password-login"
          type='password'
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                size="large"
              >
                <VisibilityOff />
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          inputProps={{}}
        />

      </FormControl>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              // onChange={(event) => setChecked(event.target.checked)}
              name="checked"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
          Forgot Password?
        </Typography>
      </Stack>


      <Box sx={{ mt: 2 }}>

        <Button
          disableElevation
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Sign in
        </Button>

      </Box>
    </form>
  )

}

export default Login;
