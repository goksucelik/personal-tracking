import React, { useState, useEffect } from "react";
import { Box, Modal } from "@mui/material";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  '@media (max-width: 500px)': {
    width: 300
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function AppModal() {
  const [open, setOpen] = useState(false);
  const openModalData = useSelector((state) => state.appReducer.openModalData);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setOpen(openModalData.open);
  }, [openModalData]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{openModalData.content}</Box>
      </Modal>
    </div>
  );
}

export default AppModal;
