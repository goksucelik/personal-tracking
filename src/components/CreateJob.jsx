import React from "react";
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
import { Add } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/reducer";
function CreateJob() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { description: "", priority: "" },
    validationSchema: yup.object().shape({
      description: yup.string().required("Zorunlu alan"),
      priority: yup.number().required("Zorunlu alan"),
    }),
    onSubmit: (values) => {
      dispatch(addJob(values));
      formik.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box my={3}>
        <Typography variant="h6">Create New Job</Typography>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <TextField
                fullWidth
                variant="outlined"
                label="Job Name"
                value={formik.values.description}
                onChange={(e) =>
                  formik.setFieldValue("description", e.target.value)
                }
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>
            <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={2}>
              <Button
                variant="contained"
                startIcon={<Add />}
                color="primary"
                type="submit"
                fullWidth
                style={{ minHeight: "50px" }}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </form>
  );
}
export default CreateJob;
