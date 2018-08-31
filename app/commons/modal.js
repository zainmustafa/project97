import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
const Modal = ({
  isModalOpen,
  closeModal,
  title,
  changeHandler,
  submitModal,
  type
}) => (
  <Dialog
    open={isModalOpen}
    onClose={closeModal}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        onChange={e => changeHandler(e)}
        id="name"
        label={`${type} Name`}
        name="name"
        type="name"
        fullWidth
      />
      <Button color="primary"  variant="contained" onClick={() => submitModal()}>Add {type}</Button>
    </DialogContent>
  </Dialog>
);

export default Modal;
