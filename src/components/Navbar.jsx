import styled from "@emotion/styled"
import { AppBar, Toolbar, Typography } from "@mui/material"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
})


const Navbar = () => {

  return (
    <AppBar position="sticky">
      <StyledToolbar>
       <Typography variant="h6">Social</Typography> 
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar