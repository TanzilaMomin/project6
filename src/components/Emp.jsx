import React from "react";
import{TextField,Button } from "@mui/material" ;

export const Emp=()=>{
    return(
        <div className="sub">
            <TextField variant="outlined" label="First Name" />
            <TextField variant="outlined" label="Last Name" />
            <TextField variant="outlined" label="city" />
            <Button variant="contained">Submit</Button>
            <Button variant="contained">Cancel</Button>
        </div>
    );
}