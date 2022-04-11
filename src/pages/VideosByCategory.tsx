import { Grid } from "@material-ui/core";
import MenuGenre from "../components/MenuGenre";
import Page from "../components/Page";
import Title from "../components/Title";
import VideosList from "../components/Video/VideoList";

type Props = {};

const VideosByCategory = (props: Props) => {
    return (
        <Page margin="large">
            <Grid container>
                <Grid item xs={7} sm={9}>
                    <Title>Filme</Title>
                </Grid>
                <Grid xs={5} sm={3}>
                    <MenuGenre/>
                </Grid>
            </Grid>
            <VideosList videos={[]} />  
        </Page>
    );
};

export default VideosByCategory;