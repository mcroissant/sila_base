import React, {Component} from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import VisibilitySensor from 'react-visibility-sensor';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme: any) => ({
    bar: {
        height: "10px",
        width: "100%",
        position: "sticky",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: "auto",
    }
});

class ProgressBar extends Component {
    state = {
        scrollPosition: 0,
        visible: false
    }

    listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
                this.calculateScrollDistance();
            });
        });
    }

    calculateScrollDistance = () => {
        if (this.state.visible) {
            this.setState({
                scrollPosition: 100,
            });
            return;
        }
        const scrollTop = window.pageYOffset; // how much the user has scrolled by
        const winHeight = window.innerHeight;
        const docHeight = this.getDocHeight();
        // @ts-ignore
        const totalDocScrollLength = docHeight - winHeight;
        const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100)

        this.setState({
            scrollPosition: scrollPosition,
        });
    }

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    componentDidMount() {
        this.calculateScrollDistance();
        this.listenToScrollEvent();
    }

    onComponentVisibilityChange = (isVisible: boolean) => {
        this.setState({visible: isVisible})
        this.calculateScrollDistance();
    }

    render() {
        // @ts-ignore
        const { classes } = this.props;
        return (
            <>
                <VisibilitySensor onChange={this.onComponentVisibilityChange}>
                    {/* Just so the viz sensor works and thinks there is something displayed */}
                    <div style={{visibility: "hidden", border: "transparent solid 1px"}}/>
                </VisibilitySensor>
                <LinearProgress className={classes.bar} value={this.state.scrollPosition} variant="determinate"/>

            </>
        );
    }
}

// @ts-ignore
export default withStyles(styles, { withTheme: true })(ProgressBar);
