/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { BsShieldSlashFill, BsFillShieldFill } from 'react-icons/bs';

export default function DisableDialog({ id, name, isEnabled = true }) {
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
                className="flex self-end justify-center items-center gap-2 py-3 px-1 text-white m-3 rounded-md bg-yellow-500"
                onClick={handleClickOpen('paper')}
            >
                {
                    isEnabled ? "Disable" : "Enable"
                }
                <span>{isEnabled ?
                    <BsShieldSlashFill /> :
                    <BsFillShieldFill />
                }
                </span>
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{name}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        Are you sure you want to 
                        {
                            isEnabled ? " Disable " : " Enable "
                        } the item with ID: {id}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        style={{ backgroundColor: 'red', color: 'white' }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => { /* handle confirm delete */ }}
                        style={{ backgroundColor: 'green', color: 'white' }}
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
