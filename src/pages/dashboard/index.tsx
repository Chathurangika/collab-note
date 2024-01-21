import { Box, Button, Divider, Tab, Tabs, Typography } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import DescriptionIcon from "@mui/icons-material/Description";
import React, { useEffect } from "react";
import NoteCard from "../../components/notes/NoteCard";
import { useAuth } from "../../context/AuthContext";
import { useAppDispatch, useAppSelector } from "../../slices/hooks";
import { noteService } from "../../services";
import { setUserNotes, setUserShareNotes } from "../../slices/noteSlice";
import {
  findAllUserNotes,
  findAllUserSharedNotes,
} from "../../services/note/note.service";
import AddIcon from "@mui/icons-material/Add";
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const [value, setValue] = React.useState(0);
  const { authenticated } = useAuth();
  const dispatch = useAppDispatch();

  const username = useAppSelector((state) => state.app.userFullName);
  // const userId = useAppSelector((state) => state.app.userId);

  const allUserNotes = useAppSelector((state) => state.note.userNotes);
  const allSharedNotes = useAppSelector((state) => state.note.sharedNotes);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getUserAllNotes = async () => {
    findAllUserNotes().then((response) => {
      dispatch(setUserNotes(response.data.data));
    });
    findAllUserSharedNotes().then((response) => {
      dispatch(setUserShareNotes(response.data.data));
    });
  };
  useEffect(() => {
    getUserAllNotes();

  }, []);

  return (
    <MainLayout>
      <Typography variant="h5" color="primary" sx={{ mt: "4px", mb: "1rem" }}>
        Welcome -{username}
      </Typography>
      {authenticated && (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                icon={<DescriptionIcon />}
                iconPosition="start"
                label="My Notes"
                {...a11yProps(0)}
              />
              <Tab
                icon={<FolderSharedIcon />}
                iconPosition="start"
                label="Shared Notes"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Box sx={{ p: 2 }}>
              <Button variant="outlined" startIcon={<AddIcon />}>
                Add Note
              </Button>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
              {allUserNotes.length > 0 &&
                allUserNotes.map((note) => (
                  <Box sx={{ p: 2, display: 'inline-block' }} key={`${note._id}-${note.createdAt}`}>
                    <NoteCard
                      title={note.title}
                      createdAt={note.createdAt}
                      owner={note.owner}
                      content={note.contentUpdates[0].content}
                      noteId={note._id}
                    />
                  </Box>
                ))}
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {allSharedNotes.length > 0 &&
              allSharedNotes.map((note) => (
                <Box sx={{ p: 2, display: 'inline-block' }} key={`${note._id}-${note.createdAt}`}>
                <NoteCard
                  key={`${note._id}-${note.createdAt}`}
                  title={note.title}
                  createdAt={note.createdAt}
                  owner={note.owner}
                  content={note.contentUpdates[0].content}
                  noteId={note._id}
                />
                </Box>
              ))}
          </CustomTabPanel>
        </Box>
      )}
    </MainLayout>
  );
};

export default Dashboard;
