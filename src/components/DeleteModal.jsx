import { Grid, Button, Typography, Box } from "@mui/material";
import React from "react";
import { WarningAmber } from "@mui/icons-material";
import { closeModal, deleteJob } from "../redux/reducer";
import { useDispatch } from "react-redux";

function DeleteModal({ id }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Grid container justifyContent="center" spacing={2}>
        <WarningAmber color="error" fontSize="large" />
      </Grid>
      <Box mt={2}>
        <Grid>
          <Typography>Are you sure you want to delete it?</Typography>
        </Grid>
      </Box>
      <Box mt={2}>
        <Grid container justifyContent="flex-end">
          <Grid item xs={4} md={3}>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={4} md={3}>
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch(deleteJob({id}))}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default DeleteModal;
