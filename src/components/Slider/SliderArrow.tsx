import { IconButton, IconButtonProps, makeStyles } from "@material-ui/core";
import SliderArrowUnstyled from "./SliderArrowUnstyled";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: (props: SliderArrowProps) => {
        const style = {
            height: "100%",
            position: "absolute" as any,
        };
        if (props.dir === "right") {
            (style as any).right = 0;
            (style as any).top = 0;
        }
        return style;
    },
    arrow: {
        fontSize: 50,
        color: theme.palette.common.white,
        [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
            fontSize: 31,
        },
    },    
}));

interface SliderArrowProps {
    dir: 'left' | 'right',
};

const SliderArrow: React.FunctionComponent<SliderArrowProps> = (props) => {
    const { dir } = props;
    const classes = useStyles(props);
    return (
        <div className={clsx(classes.root, dir === "left" ? "slick-left" : "slick-right")}>
            <SliderArrowUnstyled dir={dir} IconButtonProps={{ disableTouchRipple: true }} classes={{ arrow: classes.arrow }}/>
        </div>
    );
};

export default SliderArrow;