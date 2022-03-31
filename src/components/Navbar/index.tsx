import { useCallback, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Title from "./Title";
import Notifications from "./Notifications";
import MenuCategories from "./menus/MenuCategories";
import MenuAccount from "./menus/MenuAccount";
import InputSearch from "../InputSearch";
import useIsSmallWindow from "../../hooks/useIsSmallWindow";
import DialogSearchContext from "../DialogSearch/DialogSearchContext";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HideOnScroll from "./HidoOnScroll";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const Navbar: React.FunctionComponent = () => {
    const classes = useStyles();
    const isSmallWindow = useIsSmallWindow();
    const dialogContext = useContext(DialogSearchContext);

    const handleOpen = useCallback(() => {
        dialogContext.show();
    }, [dialogContext]);

    return (
        <div className={classes.root}>
            <HideOnScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        {!isSmallWindow && <MenuCategories />}
                        <Title />
                        {!isSmallWindow && (
                            <>
                                <Grid container justify="center">
                                    <Grid item xs={8} lg={7}>
                                        <InputSearch />
                                    </Grid>    
                                </Grid>
                                <Notifications />
                                <MenuAccount />
                            </>
                        )}
                        {isSmallWindow && (
                            <Grid container justify="flex-end">
                                <IconButton onClick={handleOpen}>
                                    <SearchIcon />
                                </IconButton>
                            </Grid>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
};

export default Navbar;