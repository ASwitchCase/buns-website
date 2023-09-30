import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import BunList from '../components/BunList';
import { Box } from '@mui/material';

function HomePage() {
  return (
    <div>
      <Box sx={{
        width:'100%',
        display:'flex',
        justifyContent:'center'
      }}>
        <BunList></BunList>
      </Box>
        
    </div>
  )
}

export default HomePage