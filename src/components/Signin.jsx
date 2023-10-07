import React, { useState } from "react";
import { Grid, Button, Card, CardContent,Text, TextField} from "@mui/material";

export const Signin=()=>{
    //JavaScript
    const [username, setUsername]=useState('');
    const [email, setEmail]=useState('');
    const [mobile, setMobile]=useState('');
    const [password,setPassword]=useState('');
    const [confirmp,setConfirmp]=useState('');

    const handleClear=()=>{
        setUsername('')
        setEmail('')
        setMobile('')
        setPassword('')
        setConfirmp('')
    }
    return(
        //html
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Card >
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <h2>SignIn</h2>
                            </Grid>
                            <Grid item xs={12}>
                             <TextField value={username} variant="outlined" label="username" fullWidth onChange={(e)=>setUsername(e.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                             <TextField value={email} variant="outlined" label="email id" fullWidth onChange={(e)=>setEmail(e.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                             <TextField value={mobile} variant="outlined" label="mobile no" fullWidth onChange={(e)=>setMobile(e.target.value)} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={password} variant="outlined" label="password" fullWidth onChange={(e)=>setPassword(e.target.value)} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={confirmp} variant="outlined" label="confirm password" fullWidth onChange={(e)=>setConfirmp(e.target.value)} />
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" fullWidth>SignIn</Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button onClick={handleClear} variant="contained" color="warning" fullWidth>Cancel</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={8}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={4}><h3>User Name :</h3></Grid>
                            <Grid item xs={8}><h3>{username}</h3></Grid>
                            <Grid item xs={4}><h3>Email Id :</h3></Grid>
                            <Grid item xs={8}><h3>{email}</h3></Grid>
                            <Grid item xs={4}><h3>Mobile No :</h3></Grid>
                            <Grid item xs={8}><h3>{mobile}</h3></Grid>
                            <Grid item xs={4}><h3>Password :</h3></Grid>
                            <Grid item xs={8}><h3>{password}</h3></Grid>
                            <Grid item xs={4}><h3>ConfirmPassword :</h3></Grid>
                            <Grid item xs={8}><h3>{confirmp}</h3></Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}