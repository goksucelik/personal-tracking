import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from "@mui/material";

function JobListToolbar() {
  return (
    <Grid container className="toolbarGrid">
      <Grid item xs={12} md={7}>
        <TextField
          fullWidth
          variant="outlined"
          label="Job Name"
          // onChange={(e) =>
          //   formik.setFieldValue("description", e.target.value)
          // }
          className="toolbarItem"
        />
      </Grid>
        <Grid item xs={12} md={5}>
      <Box ml={2}>
          <FormControl fullWidth>
            <InputLabel>Job Priority</InputLabel>
            <Select
              label="Job Priority"
              variant="outlined"
              className="toolbarItem"
              // onChange={(e) => formik.setFieldValue("priority", e.target.value)}
            >
              <MenuItem value={1}>Urgent</MenuItem>
              <MenuItem value={2}>Regular</MenuItem>
              <MenuItem value={3}>Trivial</MenuItem>
            </Select>
          </FormControl>
      </Box>
        </Grid>
    </Grid>
  );
}

export default JobListToolbar;
