import React from "react";
import {TextField, Button, Grid} from "@mui/material"

 export const Registration=()=>{
    return(
        <div className="sub">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Registration Form</h1>
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="first Name" fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="Middle Name" fullWidth />
                </Grid>
            </Grid>
        </div>
    );
}