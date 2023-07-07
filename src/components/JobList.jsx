import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  IconButton,
  Grid,
} from "@mui/material";
import JobListToolbar from "./JobListToolbar";
import { Delete, Edit } from "@mui/icons-material";

function JobList() {
  const trackingList = useSelector((state) => state.appReducer.trackingList);
  return (
    <Box my={3}>
      <Typography variant="h6">Job List</Typography>
      <Box mt={2}>
        <TableContainer>
          <JobListToolbar />
          <Table size="small" aria-label="a dense table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell component="th" scope="row" style={{ width: "60%" }}>
                  Name
                </TableCell>
                <TableCell component="th" scope="row" style={{ width: "30%" }}>
                  Priority
                </TableCell>
                <TableCell component="th" scope="row" style={{ width: "10%" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trackingList.map((item) => (
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ width: "60%" }}
                  >
                    {item.description}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ width: "30%" }}
                  >
                    {item.priority}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ width: "10%" }}
                  >
                    {
                      <Grid container>
                        <Tooltip title="Edit">
                          <IconButton>
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton>
                            <Delete color="error"/>
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default JobList;
