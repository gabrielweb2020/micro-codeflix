import Page from "../components/Page";
import VideoThumbnail from "../components/Video/VideoThumbnail";
import banner from "../static/img/banner.jpg";
import Slider, { Settings } from "react-slick";
import SliderArrow from "../components/Slider/SliderArrow";

const Home: React.FunctionComponent = (props) => {
    var settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: <SliderArrow dir="left"/>,
        nextArrow: <SliderArrow dir="right"/>,
    };
    return (
        <Page>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Slider>
            {/* <VideoThumbnail 
                ImgProps={{
                    src: banner,
                }}
            /> */}
        </Page>
    );
};

export default Home;