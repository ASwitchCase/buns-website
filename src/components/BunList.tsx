import { AppBar, Box, Button, Card, CardContent, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MyBun from './MyBun'
import FormDialog from './FormDialog'

const BunList = () => {
  const [data,setData] = useState([])

    const addBun = (newData : any) =>{
      fetch("http://localhost:3000/buns",{
        method:'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(newData)
      }).then(res => res.json())
      .then(res =>{
        console.log(res)
        setData([...data,res])
      })
    }

    const handleDelete = (id : string) => {
      fetch(`http://localhost:3000/buns/${id}`,{
        method:'DELETE',
        headers: {
          'Content-Type':'application/json',
        }
      }).then(()=>{
        const newList = data.filter(bun => bun.id !== id)
        setData(newList)
      })
    }

    useEffect(()=>{
        fetch("http://localhost:3000/buns",{
            method:'GET',
            headers: {
                'Content-Type':'application/json',
            }
        }).then(res => res.json())
        .then(l => {
            setData(l)
        })
    },[])

  return (
    <Box sx={{ 
        width:'800px',
        boxShadow:'0px 0px 1px gray',
        borderRadius:3,
    }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            My Buns
          </Typography>
          <FormDialog title="Add" action={addBun}></FormDialog>
        </Toolbar>
      </AppBar>
      <Box sx={{
        height:"600px",
        overflowY:'scroll'

      }}>
        {data.map(bun => <MyBun bun={bun} onDelete={handleDelete}/>)}
      </Box>
      
    </Box>
  )
}

export default BunList