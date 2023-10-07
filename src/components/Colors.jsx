import React from "react";
import {Grid, Button} from  "@mui/material"

export const Colors=()=>{
    return(
        <div>
            <h1>Material UI Grid</h1>
            {/* Row */}
            <Grid container spacing={3}>
                {/* column */}
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth>01</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth>02</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth>03</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth>04</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth>05</Button>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained" fullWidth color="warning">06</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth>07</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" fullWidth color="success">08</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success">09</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" fullWidth color="success" >10</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth>11</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth>12</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" fullWidth>13</Button>
                </Grid>
            </Grid>
        </div>
    );
}
