import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props : any) {
  const [open, setOpen] = React.useState(false);
  const [name,setName] = React.useState("")
  const [rate,setRate] = React.useState("")
  const [description,setDescription] = React.useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () =>{
    const data = {
        name : name,
        rate : rate,
        description : description
    }
    props.action(data)
    handleClose()
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Bun</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Info for new Bun
          </DialogContentText>
          <TextField
            onChange={(e) => setName(e.target.value)}
            autoFocus
            margin="dense"
            id="bunName"
            label="Name of bun"
            type="name"
            fullWidth
            variant="standard"
          />

          <TextField
            onChange={(e) => setRate(e.target.value)}
            autoFocus
            margin="dense"
            id="rate"
            label="Rate of bun"
            type="name"
            fullWidth
            variant="standard"
          />

          <TextField
            onChange={(e) => setDescription(e.target.value)}
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add bun</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}