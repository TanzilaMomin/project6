import React from "react";
import {Button, Grid} from "@mui/material"

export const Item=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Button variant="contained" fullWidth color="error">ITEM 1</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" fullWidth color="error">ITEM 2</Button>
            </Grid>
            <Grid item xs={4}>
               <Button variant="contained" fullWidth color="inherit">ITEM 3</Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" fullWidth color="inherit">ITEM 4</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth color="secondary">ITEM 5</Button>
            </Grid>
            <Grid item xs={8}>
                <Button variant="contained" fullWidth color="secondary">ITEM 6</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth color="warning">ITEM 7</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth color="success">ITEM 8</Button>
            </Grid>
            <Grid item xs={8}>
                <Button variant="contained" fullWidth color="success">ITEM 9</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" fullWidth color="inherit">ITEM 10</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" fullWidth color="inherit">ITEM 11</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" fullWidth color="inherit">ITEM 12</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="text" fullWidth color="inherit">ITEM 13</Button>
            </Grid>
        </Grid>
    );
}