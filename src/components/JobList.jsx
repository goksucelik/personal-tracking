import React, { useMemo } from "react";
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
  Chip,
} from "@mui/material";
import JobListToolbar from "./JobListToolbar";
import { Delete, Edit } from "@mui/icons-material";
import { openModal } from "../redux/reducer";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

function JobList() {
  const dispatch = useDispatch();
  const trackingList = useSelector((state) => state.appReducer.trackingList);
  const trackingListFilters = useSelector(
    (state) => state.appReducer.trackingListFilters
  );

  const openDeleteConfirmModal = (id) => {
    dispatch(
      openModal({
        open: true,
        id: id,
        content: <DeleteModal id={id} />,
      })
    );
  };

  const filteredTrackingList = useMemo(() => {
    const sortArray = (arr) => {
      return arr.sort((a, b) => a.priority - b.priority);
    };
    if (trackingListFilters.description || trackingListFilters.priority) {
      const filtered = trackingList.filter(
        (item) =>
          item.description
            .toLowerCase()
            .includes(trackingListFilters.description.toLowerCase()) &&
          (trackingListFilters.priority == null ||
            item.priority == trackingListFilters.priority)
      );
      const arr = [...filtered];
      return sortArray(arr);
    } else {
      const arr = [...trackingList];
      return sortArray(arr);
    }
  }, [trackingListFilters, trackingList]);

  const openUpdateModal = (id, item) => {
    dispatch(
      openModal({
        open: true,
        id: id,
        content: <UpdateModal item={item} />,
      })
    );
  };

  const chips = (priority) => {
    switch (priority) {
      case 1:
        return <Chip label="Urgent" color="error" />;
      case 2:
        return <Chip label="Regular" color="warning" />;
      case 3:
        return <Chip label="Trivial" color="primary" />;
      default:
        return <Chip label="Urgent" color="error" />;
    }
  };

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
              {filteredTrackingList.map((item, i) => (
                <TableRow key={i}>
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
                    {chips(item.priority)}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ width: "10%" }}
                  >
                    {
                      <Grid container>
                        <Tooltip title="Edit">
                          <IconButton
                            onClick={() => openUpdateModal(item.id, item)}
                          >
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => openDeleteConfirmModal(item.id)}
                          >
                            <Delete color="error" />
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
