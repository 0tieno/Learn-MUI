import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';


function App() {

  return (
    <>
      <Button startIcon={<SettingsIcon/>} variant="text">Text</Button>
      <Button disabled variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )

}

export default App
