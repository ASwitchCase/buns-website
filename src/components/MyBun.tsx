import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const MyBun = (props) => {
  return (
    <Card sx={{
      minWidth:270,
      margin:"10px",
      display:"flex",
      justifyContent:"space-between"
      }}>
        <CardContent>
            <Typography variant='h5' color="text.secondary" gutterBottom>
              {props.bun.name}
            </Typography>

            <Typography variant='h6' color="text.secondary" gutterBottom>
              Rating:{props.bun.rate}
            </Typography>

            <Typography variant='h7' color="text.secondary" gutterBottom>
              {props.bun.description}
            </Typography>
        </CardContent>
        <CardContent>
          <Button onClick={ () => props.onDelete(props.bun.id)} variant='contained' color='error'>Delete</Button>
        </CardContent>
    </Card>
  )
}

export default MyBun