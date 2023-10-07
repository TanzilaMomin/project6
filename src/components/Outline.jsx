import React from "react";
import{Grid, Button}from "@mui/material"

export const Outline=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Button variant="outline" fullWidth sx={{border:"1px solid black"}}>ITEM 3</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outline" fullWidth sx={{border:"1px solid black"}}>ITEM 4</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" fullWidth color="secondary">ITEM 5</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="outlined" fullWidth color="warning">ITEM 1</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="outlined" fullWidth color="warning" >ITEM 2</Button>
            </Grid>
            <Grid item xs={8}>
                <Button variant="outlined" fullWidth color="secondary">ITEM 6</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" fullWidth color="warning">ITEM 7</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="outline" fullWidth sx={{border:"1px solid black"}}>ITEM 10</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="outline" fullWidth sx={{border:"1px solid black"}}>ITEM 11</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="outline" fullWidth sx={{border:"1px solid black"}}>ITEM 12</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="outline" fullWidth sx={{border:"1px solid black"}}>ITEM 13</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" fullWidth color="success">ITEM 8</Button>
            </Grid>
            <Grid item xs={8}>
                <Button variant="outlined" fullWidth color="success">ITEM 9</Button>
            </Grid>
        </Grid>
    );
}