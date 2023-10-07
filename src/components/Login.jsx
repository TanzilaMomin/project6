import React from "react";
import { Grid,TextField, Button,Card ,CardContent } from "@mui/material";


export const Login=()=>{
    return(
        <Grid container spacing={2} sx={{backgroundColor:"lightblue"}}>
            <Grid item xs={4.5}></Grid>
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{color:"blue"}}>
                                <h2>Login</h2>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label="Email" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label="Password" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth>Login</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <p>Not a Member ?   <span style={{color:"blue", textDecoration:"underline"}}>Signup now</span></p>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4.5}></Grid>
        </Grid>
    );
}