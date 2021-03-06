import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { fade } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ReactComponent as SiLALogo } from "../assets/imgs/sila_logo.svg";
import {IconButton} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: "unset"
        },
        header: {
            width: "68%",
            marginLeft:"auto",
            marginRight:"auto",
        },
        silaLogo: {
            borderRadius: 0,
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block",
            },
            "& svg": {
                width: 48,
            }
        },

        search: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            "&:hover": {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(1),
                width: "auto",
            },
        },
        searchIcon: {
            width: theme.spacing(7),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        inputRoot: {
            color: "inherit",
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: 120,
                "&:focus": {
                    width: 200,
                },
            },
        },
    })
);

export default function Header() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">

                <Toolbar>
                    <div className={classes.header}>
                        <Button color="inherit" className={classes.title} component={Link} to={"/"}>
                            Home
                        </Button>
                        <Button color="inherit" className={classes.title} component={Link} to={"/features"}>
                            Features
                        </Button>
                    </div>
                    <IconButton
                        color="inherit"
                        className={classes.silaLogo}
                        href={"https://sila-standard.org"}
                        target={"_blank"}
                    >
                        <SiLALogo />
                    </IconButton>
                </Toolbar>

            </AppBar>
        </div>
    );
}
