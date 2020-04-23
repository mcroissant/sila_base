import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { IconButton } from "@material-ui/core";

const styles = (theme: any) => ({
    scroll: {
        backgroundColor: "#dcdcdc8c",
        width: "40px",
        height: "40px",
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: 3
    }
});

class ScrollTopTop extends Component {
    state = {
        intervalId: 0
    };

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), 16);
        this.setState({ intervalId: intervalId });
    }

    render () {
        // @ts-ignore
        const { classes } = this.props;
        return (
            <IconButton title="Back to top"
                        style={{width: '72px', height: '72px', padding: '18px', color: "#3f51b5"}}
                        className={classes.scroll}
                        onClick={() => { this.scrollToTop();}}
            >
                <ArrowDropUpIcon style={{width: '72px', height: '72px', paddingBottom: '36px'}}/>
            </IconButton>
        );
    }
}

// @ts-ignore
export default withStyles(styles, { withTheme: true })(ScrollTopTop);
