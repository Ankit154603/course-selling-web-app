import { Button, Typography } from "@mui/material";

function Appbar() {
    return (
       <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
       }}>
        <div><Typography variant={"h6"}>Coursera</Typography></div>
        <div style={{
            display: "flex"
        }}>
        <div style={{marginRight:10}}>
            <Button 
            variant={"contained"}
            onClick={() => {
                window.location = "./signup"
            }}>
                Signup</Button></div>
        <div><Button 
        variant={"contained"}
        onClick={() => {
            window.location = "/Signin"
        }}
        >Signin</Button></div>
        </div>
       </div>
    )
}

export default Appbar;