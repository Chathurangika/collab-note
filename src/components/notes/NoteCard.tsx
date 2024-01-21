import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeader, IconButton } from "@mui/material";

import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ShareIcon from "@mui/icons-material/Share";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

const NoteCard: React.FC = () => {
    return (
        <Box sx={{ minWidth: 275, maxWidth: 345 }}>
            <Card variant="outlined">
                <CardHeader
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016 - Chathurangika"
                />
                <CardContent>
                    <Typography variant="body2" gutterBottom>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
                        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
                        fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                        <ReadMoreIcon />
                    </IconButton>
                   
                </CardActions>
            </Card>
        </Box>
    );
};

export default NoteCard;
