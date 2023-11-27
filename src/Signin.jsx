import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card, Typography} from '@mui/material';


function Signin(){
    return <div>
        <div style={{
            paddingTop: 50,
            marginBottom:10,
            display: 'flex',
            justifyContent: "center"
        }}>
            <h3>
            Welcome back. Signin below
            </h3>
          </div>
        <div style={{display:"flex", justifyContent: "center"}}>
        <Card varint={"outlined"} style={{width:400, padding:20}}>
        <TextField 
        fullWidth = {true}
        id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        />
         <br /><br />
         <TextField 
        fullWidth = {true}
        id="outlined-basic" 
        label="Password"
        variant="outlined"
        type={"password"}
        />
        <br /><br />
        <Button  size={"large"} variant="contained">Signin</Button>
        </Card>
        </div>
    </div>
    
}

export default Signin;