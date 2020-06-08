import React from "react";
import ReactMarkdown from "react-markdown";
import markdown from "../documentation/mainpage/mainpage.md";
import Utilities from "../services/Utilities";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        markdown: {
            width: "68%",
        },

    })
);

const IndexPage: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <>
            {/* Just transform the links of the features with the Utilities.transformLinkUri*/}
            <ReactMarkdown
                renderers={Utilities.MDRenderers}
                transformLinkUri={Utilities.transformLinkUri}
                source={markdown}
                className={classes.markdown}
            />
        </>
    );
}

export default IndexPage;
