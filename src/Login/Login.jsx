import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import { Link ,redirect ,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";


const Login = () => {
    const navigate=useNavigate()
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginFunc = () => {
/*
        https://rxprice.internal2.singlecare.com/backend/<endpoint>
*/
        /*http://172.32.5.209:8080
*/



        axios.post('https://rxprice.internal2.singlecare.com/backend/login',
            {
                username: username,
                password: password,
                    
            }

        )
            .then(response => response)
            .then(json => json?.data?.message === "Login successful" ? navigate("/dashboard/scenario") : navigate("/") )
        

      
 
    };

  return (
    <Box
      alignContent={"center"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      width={"100%"}
      //   bgcolor={"red"}
      height={"100vh"}
      //   overflow={"hidden"}
    >
      <Box position={"absolute"} top={0} width={"100vw"}>
        <Grid xs={12}>
          <Typography
            style={{
              backgroundColor: "#0058A6",
              color: "#ffffff",
              padding: "1rem",
            }}
          >
            Price Optimiser
          </Typography>
        </Grid>
      </Box>
      <Box position={"absolute"} top={120}>
        <Grid xs={12}>
          <Typography fontSize={"1.7rem"}>Log in to your account</Typography>
        </Grid>
      </Box>
      <Card
        style={{
          backgroundColor: "#E3E8EF",
          padding: "2rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <Box>
              <Typography>Email</Typography>

              <TextField
                id="email"
                label="enter your email"
                fullWidth
                style={{
                  backgroundColor: "#FFFFFF",
                  margin: "1rem 0 0 0",
                }}
                // color="red"
                // value={name}
                onChange={(e) => {
                     setUserName(event.target.value);
                }}
              />
            </Box>
          </Grid>
          <Grid xs={12} item>
            <Box>
              <Typography>Password</Typography>

              <TextField
                fullWidth
                id="password"
                label="enter your password"
                // value={name}
                              onChange={(e) => {
                                  setPassword(event.target.value);
                              }}
                style={{
                  backgroundColor: "#FFFFFF",
                  margin: "1rem 0 0 0",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
         {/*<Link to="/dashboard/overview">*/}
            <Button
                      style={{
                          width: "100%",
                          backgroundColor: "green",
                          color: "#ffffff",
                          margin: "1.5rem 0 1.5rem 0",
                      }}

                      onClick={() => loginFunc()}
            >
              Log In
            </Button>
          {/*</Link>*/}
        </Grid>
      </Card>
    </Box>
  );
};

export default Login;
