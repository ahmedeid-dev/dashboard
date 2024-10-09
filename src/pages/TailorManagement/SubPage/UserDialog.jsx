/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAndLabel from '../../../components/inputAndLabel/InputAndLabel';
import ComboBox from '../../../components/SelectMenu/SelectMenu';
import { FaEdit, FaPlus } from 'react-icons/fa';

export default function ScrollDialog({ label, action }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      
      <button 
      className="flex self-end justify-center items-center gap-2 py-3 px-1 text-white m-3 rounded-md bg-green-500"
      onClick={handleClickOpen('paper')}
      >
        {label} <span>{action=='add'?<FaPlus/>:<FaEdit/>}</span></button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{label}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* الاسم */}
            <InputAndLabel
            error=''
            label='name'
            type='text'
            />
            {/* Email */}
            <InputAndLabel
            error=''
            label='Email'
            type='email'
            />
            {/* password */}
            <InputAndLabel
            error=''
            see={true}
            label='password'
            type='password'
            />
            <ComboBox label='type' />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
