import { Paper } from "@mui/material";
import { padding } from "@mui/system";
import Stack from '@mui/material/Stack';
import MenuToggle from "./MenuToggle";
import { HeaderProps } from "./types";



const Header = ({display, setDisplay}: HeaderProps) => {
    return (
        <Paper 
            sx={{padding: 10, marginLeft: 15, fontFamily: "Source Sans Pro, Helvetica, sans-serif"}} 
            elevation={0}
            >
            <Stack>
            <h4> Future Ancestors </h4>
            <p>voices of the past, listened to in the present, for the future</p>
            </Stack>
            <MenuToggle display={display} setDisplay={setDisplay}/>
        </Paper>
            
        
    )
}

export default Header;