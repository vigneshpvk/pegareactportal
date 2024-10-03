import Header from "../components/Header/Header";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { tokens } from "../themes";
import { useTheme } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { mockDataTeam } from "../data/mockData";
import "./pages.css";

const Mywork = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState("mycases");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Defining columns

  const columns = [
    {
      field: "id",
      headerName: "Case ID",
      flex: 0.4,
      headerAlign: "center",
    },
    { field: "task", headerName: "Task", flex: 0.8, headerAlign: "center" },
    {
      field: "casetype",
      headerName: "Case Type",
      flex: 0.7,
      headerAlign: "center",
    },

    {
      field: "status",
      headerName: "Case Status",
      flex: 0.8,
      headerAlign: "center",
    },
    {
      field: "duedate",
      headerName: "Due Date",
      flex: 0.5,
      headerAlign: "center",
    },
    {
      field: "caseurgency",
      headerName: "Urgency",
      flex: 0.4,
      headerAlign: "center",
    },
    {
      field: "action",
      headerName: "Action",
      flex: 0.5,
      headerAlign: "center",
      renderCell: () => {
        return (
          <strong>
            <Button
              variant="contained"
              color="success"
              endIcon={<PlayArrowIcon />}
            >
              Open
            </Button>
          </strong>
        );
      },
    },
  ];

  //defining rows
  const rows = [];
  // iterate mockData
  mockDataTeam.map((value, index) => {
    const temp = {
      id: value.id,
      task: value.id,
      casetype: value.access,
      status: value.email,
      duedate: value.id,
      caseurgency: value.id,
    };
    rows.push(temp);
  });

  return (
    <Box display="flex" flexDirection="column">
      <Header title="My work" subtitle="List of Pending works" />
      <Box
        sx={{
          mt: "10px",
          backgroundColor: colors.primary[400],
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="mycases" label="My cases" />
          <Tab value="myapproval" label="My approval" />
        </Tabs>
      </Box>
      <Box
        height="70vh"
        mt={2}
        width="98%"
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.purple[400],
          },
          "& .MuiDataGrid-cell ": {
            fontSize: "14px",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontSize: "14px",
            fontWeight: "bolder",
          },
          "& .MuiButton-sizeSmall": {
            color: colors.blueAccent[400],
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default Mywork;
