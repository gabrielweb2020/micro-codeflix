import { makeStyles, Typography } from "@material-ui/core";
import logo from "../../static/img/logo.png";
import theme from "../../theme";

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
    },
    logo: {
        [theme.breakpoints.down("sm")]: {
            width: 100,
        },

        [theme.breakpoints.between("sm", "md")]: {
            width: 130,
        },

        [theme.breakpoints.up("md")]: {
            width: 170,
        },
    },
});

const Title: React.FunctionComponent = () => {
    const classes = useStyles();
    
    return (
        <Typography>
            <img src={logo} alt="CodeFlix" className={classes.logo}/>
        </Typography>
    );
};

export default Title;