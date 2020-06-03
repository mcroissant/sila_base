import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React from "react";
import { ReactComponent as SiLALogo } from "../assets/imgs/sila_logo.svg";
import ProgressBar from "./ProgressBar";
import ScrollTopTop from "./ScrollToTop";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: "#fff",
            backgroundColor: "#3f51b5",
            maxWidth: "100%",
            width: "100%",
            flexGrow: 1,
            boxShadow: "0px -2px 4px 1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)",
            padding: "10px",
        },
        silaLogo: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block",
            },
        },
        footer: {
            marginTop: "auto",
            width: "68%",
            display: "table",
            tableLayout: "fixed",
            marginLeft:"auto",
            marginRight:"auto",
        },
        footerSidebar: {
            display: "table-cell",
            verticalAlign: "top",
            paddingRight: "10px",
        },
        menuItem: {
            listStyle: "none",
        },
        toolBar: {
            display: "table"
        },
        menu: {
            padding: 0,
            listStyleType: "none",
        },
        link: {
            color: "#fff",
        },
    })
);

export default function Footer() {
    const classes = useStyles();

    return (
        <>
            <ScrollTopTop/>
            <ProgressBar/>
            <div className={classes.root}>
                <div className={classes.footer}>
                    <div id="footer-sidebar-left" className={classes.footerSidebar}>
                        <div>
                            <h2>Association</h2>
                            <div>
                                <ul id="menu-association" className={classes.menu}>
                                    <li id="menu-item-663" className={classes.menuItem}>
                                        <a className={classes.link} href="https://sila-standard.com/standards/">Standards</a>
                                    </li>
                                    <li id="menu-item-52637" className={classes.menuItem}>
                                        <a className={classes.link} href="https://sila-standard.com/initiatives/">Initiatives</a>
                                    </li>
                                    <li id="menu-item-38" className={classes.menuItem}>
                                        <a className={classes.link} href="https://sila-standard.com/product-store/">Products &amp; Drivers</a></li>
                                    <li id="menu-item-664" className={classes.menuItem}>
                                        <a className={classes.link} href="https://sila-standard.com/about-us/">About Us</a>
                                    </li>
                                    <li id="menu-item-52553" className={classes.menuItem}>
                                        <a className={classes.link} href="https://sila-standard.com/join-us/">Join Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="footer-sidebar-center" className={classes.footerSidebar}>
                        <div>
                            <h2>Resources</h2>
                            <div>
                                <ul id="menu-resources" className={classes.menu}>
                                    <li id="menu-item-1045" className={classes.menuItem}>
                                        <a className={classes.link} href="https://sila-standard.com/news-and-events/">News &amp; Events</a>
                                    </li>
                                    <li id="menu-item-52647" className={classes.menuItem}>
                                        <a className={classes.link} href="https://sila-standard.com/training/">Training</a>
                                    </li>
                                    <li id="menu-item-665" className={classes.menuItem}>
                                        <a className={classes.link} href="https://sila-standard.com/certification/">Certification</a>
                                    </li>
                                    <li id="menu-item-53616" className={classes.menuItem}>
                                        <a className={classes.link} href="https://sila-standard.com/faq/">FAQ</a></li>
                                    <li id="menu-item-52806" className={classes.menuItem}>
                                        <a className={classes.link} href="https://sila-standard.com/downloads/">Downloads</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="footer-sidebar-right-1" className={classes.footerSidebar}>
                        <div><h2>Contact us</h2>
                            <div>
                                <p>
                                    Spinnereistrasse 38<br/>
                                    CH-8645 Rapperswill-Jona<br/>
                                    Switzerland<br/>
                                    +41 (0)55 210 01 19
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="footer-sidebar-right-2" className={classes.footerSidebar}>
                        <div>
                            <h2>
                                Join our community!
                            </h2>
                            <div>
                                <p>Our team is happy to answer any of your questions.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <a className={classes.link} href="https://sila-standard.com/join-us/">
                                        Join us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footerSidebar}>
                        <h2>
                            <Button color="inherit" className={classes.silaLogo} >
                                <a href={"https://sila-standard.com/"} target={"_blank"}>
                                    <SiLALogo width={56} padding-right={5} />
                                </a>
                            </Button>
                        </h2>
                        <p>© SiLA 2020. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
