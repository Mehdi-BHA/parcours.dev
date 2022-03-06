import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default:'#1B1F24'
        }
    },
    typography:{
        fontFamily:"'Raleway', sans-serif",
        body1:{
            fontSize:"20px"
        },
        body2:{
            fontSize:"18px"
        }

    }
})

export default theme