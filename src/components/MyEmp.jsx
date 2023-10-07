import React from "react";
import{TextField, Button, Grid} from "@mui/material"

export const MyEmp=()=>{
    return(
        <div className="sub">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="First Name" fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="Last Name" fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" label="City" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" fullWidth>Submit</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" fullWidth color="error">Cancel</Button>
                </Grid>
            </Grid>
        </div>
    );
}