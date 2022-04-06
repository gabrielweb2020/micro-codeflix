import { makeStyles } from "@material-ui/core";
import { AddCircleOutline, Info, PlayCircleOutline } from "@material-ui/icons";
import VideoLink from "../../../../components/Video/VideoLink";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
    },
});

interface VideoActionsProps {}

const VideoActions: React.FunctionComponent<VideoActionsProps> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <VideoLink>
                <PlayCircleOutline/>
                Play
            </VideoLink>
            <VideoLink>
                <AddCircleOutline/>
                Minha Lista
            </VideoLink>
            <VideoLink>
                <Info/>
                Info
            </VideoLink>
        </div>
    );
};

export default VideoActions;