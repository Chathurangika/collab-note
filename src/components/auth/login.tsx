
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from '@mui/material';

import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ILoginInputs } from '../../services/auth/interface';
import { authService } from '../../services';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';


const schema = yup
  .object({
    email: yup
      .string()
      .required("The email field is required.")
      .email("Please enter your email address."),
    password: yup
      .string()
      .required("The password field is required.")
      .min(6, "The password must be 6 to 20 characters.")
      .max(20, "The password must be 6 to 20 characters."),
  })
  .required();


const LoginForm: React.FC = () => {

  const { login: authLogin } = useAuth();
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ILoginInputs>({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: { email: "", password: "" },
  })
  const onSubmit: SubmitHandler<ILoginInputs> = async (data) => {
    try {
      const {
        data: { data: authData },
      } = await authService.login({
        email: data.email,
        password: data.password,
      });

      authLogin(authData);
      reset();

      window.location.reload();
    } catch (error: any) {
      console.error(errors);
      setIsError(true);
      setError(error.response.data.data.message);
    }
  };

  return (
    <>
      {isError && (
        <Alert severity="error" sx={{ margin: "9px" }}>
          {error}
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={4}>
          <Grid item xs={12}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.email?.message}
                  label="Email address"
                  placeholder="Enter your Email address"
                  helperText={errors.email?.message}
                  fullWidth
                  focused
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.password?.message}
                  label="Password"
                  placeholder="Enter your Password"
                  helperText={errors.password?.message}
                  type="password"
                  fullWidth
                  focused
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              sx={{ minHeight: "45px" }}
            >
              {isSubmitting ? <CircularProgress /> : "Login"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )

}

export default LoginForm;
