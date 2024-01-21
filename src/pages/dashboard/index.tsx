// material-ui
import { Box, Tab, Tabs, Typography } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import DescriptionIcon from '@mui/icons-material/Description';
import React from "react";
import NoteCard from "../../components/notes/NoteCard";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
      <Typography variant="h5" color="primary" sx={{ mt: "4px", mb: "1rem" }}>
        Welcome
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab icon={<DescriptionIcon />} iconPosition="start" label="My Notes" {...a11yProps(0)} />
            <Tab icon={<FolderSharedIcon />} iconPosition="start" label="Shared Notes" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <NoteCard/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NoteCard/>
        </CustomTabPanel>
      </Box>
    </MainLayout>
  );
};

export default Dashboard;
