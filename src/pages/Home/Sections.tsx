import { makeStyles } from "@material-ui/core";
import SectionSlider from "../../components/Video/SectionSlider";

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
}));


const Sections: React.FunctionComponent = (props) => {
    const classes = useStyles(props);
    return (
        <div>
            <SectionSlider title={"Documentário"} videos={[]}/>     
            <SectionSlider title={"Comédia"} videos={[]}/>     
            <SectionSlider title={"Ação"} videos={[]}/>     
            <SectionSlider title={"Drama"} videos={[]}/>     
            <SectionSlider title={"Suspense"} videos={[]}/>     
        </div>
    );
};

export default Sections;
