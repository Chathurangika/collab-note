import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeader, IconButton } from "@mui/material";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ShareIcon from "@mui/icons-material/Share";
import { Owner } from "../../services/note/interface";

interface NoteCardProps {
    title: string;
    createdAt: string;
    owner: Owner;
    content: string;
    noteId: string;
}
const NoteCard: React.FC<NoteCardProps> = ({
    title,
    createdAt,
    owner ,
    content,
    noteId,
}) => {
    return (
        <Box sx={{ minWidth: 275, maxWidth: 345 }}>
            <Card variant="outlined">
                <CardHeader
                    title={title}
                    subheader={owner.fullName}
                />
                <CardContent>
                    <Typography variant="body2" gutterBottom>
                        {content}
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
