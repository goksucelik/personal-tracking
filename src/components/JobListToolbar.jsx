import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { updateFilters } from "../redux/reducer";

function JobListToolbar() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    description: "",
    priority: 0,
  });

  useEffect(() => {
    dispatch(
      updateFilters({
        ...formData,
        priority: formData.priority ? formData.priority : null,
      })
    );
  }, [formData]);

  return (
    <Grid container spacing={2} className="toolbarGrid">
      <Grid item xs={12} md={7}>
        <TextField
          fullWidth
          variant="outlined"
          label="Job Name"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="toolbarItem"
        />
      </Grid>
      <Grid item xs={12} md={5}>
          <FormControl fullWidth>
            <InputLabel>Job Priority</InputLabel>
            <Select
              label="Job Priority"
              variant="outlined"
              className="toolbarItem"
              value={formData.priority}
              onChange={(e) =>
                setFormData({ ...formData, priority: e.target.value })
              }
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={1}>Urgent</MenuItem>
              <MenuItem value={2}>Regular</MenuItem>
              <MenuItem value={3}>Trivial</MenuItem>
            </Select>
          </FormControl>
      </Grid>
    </Grid>
  );
}

export default JobListToolbar;
