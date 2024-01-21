import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import LoginForm from "../../components/auth/login";


const LoginPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        height: { xs: "100%", md: "100vh" },
        bgcolor: alpha(theme.palette.primary.main, 0.05),
        py: "2rem",
      }}
    >
      <Container>
        <Box
          sx={{
            p: { xs: "1rem", md: "1.2rem" },
            borderRadius: "25px",
            bgcolor: "#fff",
          }}
        >
          <Grid container justifyContent="center" spacing={2}>
            <Grid
              container
              item
              xs={12}
              md={6}
              justifyContent="center"
              sx={{ order: { xs: 1, md: 0 } }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  height: "40px",
                  display: { xs: "none", md: "flex" },
                  mb: { xs: "3rem", md: "-1rem" },
                }}
              >
                
              </Grid>

              <Grid
                item
                xs={12}
                sm={8}
                md={8}
                sx={{
                  mt: { xs: "0.8rem", sm: "1rem", md: "0rem" },
                  mb: { xs: "0.2rem", sm: "2rem", md: "0rem" },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "primary.dark",
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                    textTransform: "capitalize",
                  }}
                >
                 Login
                </Typography>

              
                <LoginForm />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ position: "relative", order: { xs: 0, md: 1 } }}
            >
              
              <Box
                component={"img"}
                alt="sign-in"
                src="https://t4.ftcdn.net/jpg/03/39/70/91/360_F_339709192_k6PWV7DqPCkhXBsmanByE5LTEwoJLstw.jpg"
                sx={{
                  width: "100%",
                  borderRadius: "15px",
                  minHeight: { xs: "200px", sm: "200px", md: "500px" },
                  height: { xs: "250px", md: "70vh" },
                  objectFit: "cover",
                  mb: "-8px",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
