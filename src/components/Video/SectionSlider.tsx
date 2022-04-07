import { useMemo } from "react";
import { makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Slider, { SliderProps } from "../Slider";
import { Video } from "../../utils/model";
import banner from "../../static/img/banner.jpg";
import bannerHalf from "../../static/img/banner.jpg";
import bannerThumb from "../../static/img/banner.jpg";
import VideoThumbnail from "./VideoThumbnail";
import SliderArrow from "../Slider/SliderArrow";
import useIsSmallWindow from "../../hooks/useIsSmallWindow";

const useSectionTitleStyles = makeStyles((theme) => ({
    root: {
        fontSize: '1.4em',
        fontWeight: 600,
        textTransform: "uppercase", 
        borderBottom: `1px solid ${theme.palette.text.secondary}`,
        margin: theme.spacing(3, 3),

        [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
            margin: theme.spacing(2, 1),
        },
    },
}));

export const SectionTitle: React.FunctionComponent = (props) => {
    const classes = useSectionTitleStyles(props);
    return (
        <Typography className={classes.root} component="h2" color={"textSecondary"}>
            {props.children}
        </Typography>
    );
};

const useSectionSliderStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0, 3), 

        [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
            margin: theme.spacing(0, 1),
        },       
    },
    videoThumbnailRoot: {
        marginRight: '4px', 
        "&:focus": {
            outlineColor: theme.palette.text.primary,
        },
    },
}));

interface SectionSliderProps {
    title: string;
    videos: Video[];
};

const SectionSlider: React.FunctionComponent<SectionSliderProps> = (props) => {
    const { title } = props;
    const classes = useSectionSliderStyles();
    const isSmallWindow = useIsSmallWindow();
    const sliderProps: SliderProps = useMemo(
        () => ({
            //className: classSlider,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToScroll: 3,
            variableWidth: true,
            arrows: !isSmallWindow,
            prevArrow: <SliderArrow dir="left"/>,
            nextArrow: <SliderArrow dir="right"/>,
        }), 
        [isSmallWindow]  
    );
    const theme = useTheme();
    const isDown1200 = useMediaQuery(theme.breakpoints.down(1200));
    const thumbnail = isDown1200 ? bannerThumb : banner;

    return (
        <div>
            <SectionTitle>{title}</SectionTitle>
            <div className={classes.root}>
                <Slider {...sliderProps}>
                    {Array.from(new Array(6).keys())
                        .map(() => thumbnail)
                        .map((v, index) => {
                            return (
                                <VideoThumbnail
                                    classes={{ root: classes.videoThumbnailRoot }}
                                    ImgProps={{
                                        src: thumbnail
                                    }}
                                />
                            )
                        })}
                </Slider>
            </div>
        </div>
    );
};

export default SectionSlider;