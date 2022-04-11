import { Link } from "react-router-dom";
import { Video } from "../../utils/model";
import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import VideoThumbnail from "./VideoThumbnail";
import banner from "../../static/img/banner.jpg";
import bannerHalf from "../../static/img/banner.jpg";
import bannerThumb from "../../static/img/banner.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        gridColumnGap: theme.spacing(1),
    },
}));

interface VideosListProps {
    videos: Video[];    
};

const VideosList: React.FunctionComponent<VideosListProps> = (props) => {
    const { videos } = props;
    const classes = useStyles();
    const theme = useTheme();
    const isDown1200 = useMediaQuery(theme.breakpoints.down(1200));
    const thumbnail = isDown1200 ? bannerThumb : banner;

    return ( 
        <Grid className={classes.root} container justify="center">
            {Array.from(new Array(6).keys())
                .map(() => thumbnail)
                .map((v, index) => {
                return (
                    <Link to={`/videos/1/details`} key={index}>
                        <VideoThumbnail
                            // classes={{ root: classes.videoThumbnailRoot }}
                            ImgProps={{
                                src: thumbnail
                            }}
                        />
                    </Link>
                )
            })}
        </Grid>
    );
};

export default VideosList;