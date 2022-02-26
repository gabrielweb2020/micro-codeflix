import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Title from "./Title";
import Notifications from "./Notifications";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const Navbar: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    {/* {Menu de Categorias} */}
                    <Title />
                    <Notifications />
                    {/* {Busca, notificações e menu da conta} */}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;