import { BottomNavigation, BottomNavigationAction, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { AddCircleOutline, Info, PlayCircleOutline } from "@material-ui/icons";
import { BANNER_VIDEO_ACTIONS_MEDIA_QUERY } from "../../../../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "inherit",
    },
    navigationAction: {
        color: theme.palette.text.primary,
    },
}));

interface VideoActionsMobileProps {};

const VideoActionsMobile: React.FunctionComponent<VideoActionsMobileProps> = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isDown700 = useMediaQuery(theme.breakpoints.down(BANNER_VIDEO_ACTIONS_MEDIA_QUERY));

    return isDown700 ? (
        <BottomNavigation className={classes.root} showLabels>
            <BottomNavigationAction className={classes.navigationAction} label="Play" icon={<PlayCircleOutline/>}/>
            <BottomNavigationAction className={classes.navigationAction} label="Minha Lista" icon={<AddCircleOutline/>}/>
            <BottomNavigationAction className={classes.navigationAction} label="Info" icon={<Info/>}/>
        </BottomNavigation>
    ) : null;
};

export default VideoActionsMobile;