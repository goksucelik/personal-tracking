import React, { useEffect } from "react";
import {
  Grid,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { closeModal, updateJob } from "../redux/reducer";

function UpdateModal({ item }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      description: "",
      priority: "",
    },
    onSubmit: (values) => {
      dispatch(updateJob({ ...values, id: item.id }));
    },
  });
  const handleClose = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      description: item.description,
      priority: item.priority,
    });
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box my={3}>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Job Name"
                value={item.description}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                error={
                  formik.touched.priority && Boolean(formik.errors.priority)
                }
              >
                <InputLabel>Job Priority</InputLabel>
                <Select
                  value={formik.values.priority}
                  label="Job Priority"
                  variant="outlined"
                  onChange={(e) =>
                    formik.setFieldValue("priority", e.target.value)
                  }
                  error={
                    formik.touched.priority && Boolean(formik.errors.priority)
                  }
                >
                  <MenuItem value={1}>Urgent</MenuItem>
                  <MenuItem value={2}>Regular</MenuItem>
                  <MenuItem value={3}>Trivial</MenuItem>
                </Select>
                {formik.touched.priority && formik.errors.priority && (
                  <FormHelperText>Zorunlu Alan</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </Box>
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
              type="submit"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}

export default UpdateModal;
