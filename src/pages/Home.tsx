import { useMemo } from "react";
import { makeStyles } from "@material-ui/core";
import Page from "../components/Page";
import VideoThumbnail from "../components/Video/VideoThumbnail";
import banner from "../static/img/banner.jpg";
import bannerHalf from "../static/img/banner.jpg";
import SliderArrow from "../components/Slider/SliderArrow";
import Slider, { SliderProps } from "../components/Slider";
import useIsSmallWindow from "../hooks/useIsSmallWindow";
import Rating from "../components/Video/Rating";
import Category from "../components/Video/Category";

const useStyles = makeStyles((theme) => ({
    rootImage: {
        marginRight: "4px",
        "&:focus": {
            outlineColor: theme.palette.text.primary,
        },
    },
    image: {
        [theme.breakpoints.down(400)]: {
            width: "300px",
            height: "169px",
        },

        [theme.breakpoints.up(400)]: {
            width: "350px",
            height: "197px",
        },

        [theme.breakpoints.up(700)]: {
            width: "650px",
            height: "366px",
        },

        [theme.breakpoints.up(1200)]: {
            width: "1150px",
            height: "647px",
        },
    },
    get slider() {
        return Object.fromEntries(Object.entries(this.image).map((size) => [
            size[0], 
            {
                "& .slick-list, & .slick-track": {height: size[1].height}
            }
        ]));
    },
}));

const Home: React.FunctionComponent = (props) => {
    const classes = useStyles();
    const isSmallWindow = useIsSmallWindow();
    const sliderProps: SliderProps = useMemo(
        () => ({
            className: classes.slider,
            centerMode: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToScroll: 1,
            slidesToShow: 1,
            variableWidth: true,
            arrows: !isSmallWindow,
            prevArrow: <SliderArrow dir="left"/>,
            nextArrow: <SliderArrow dir="right"/>,
        }), 
        [isSmallWindow]  
    );
    const thumbnail = isSmallWindow ? bannerHalf : banner;
    return (
        <Page>
            <Rating rating="18" />
            <Category>Filme</Category>
            <Slider {...sliderProps}>
                <div>
                    <VideoThumbnail
                        classes={{ root: classes.rootImage, image: classes.image }}
                        ImgProps={{
                            src: thumbnail
                        }}
                    />
                </div>
                <div>
                    <VideoThumbnail
                        classes={{ root: classes.rootImage, image: classes.image }}
                        ImgProps={{
                            src: thumbnail
                        }}
                    />
                </div>
                <div>
                    <VideoThumbnail
                        classes={{ root: classes.rootImage, image: classes.image }}
                        ImgProps={{
                            src: thumbnail
                        }}
                    />
                </div>
                <div>
                    <VideoThumbnail
                        classes={{ root: classes.rootImage, image: classes.image }}
                        ImgProps={{
                            src: thumbnail
                        }}
                    />
                </div>
            </Slider>
        </Page>
    );
};

export default Home;