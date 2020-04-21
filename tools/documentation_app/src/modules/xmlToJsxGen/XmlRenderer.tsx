import React, { useEffect, useState } from "react";
import { createStyles, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Collapse from "@material-ui/core/Collapse";
import XmlLoader from "./XmlLoader";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
        },
        button: {
            margin: theme.spacing(2),
        },
    })
);

interface IXmlRendererProps {
    url: string;
    onProgress?: VoidFunction;
    onSuccess?: VoidFunction;
    onError?: VoidFunction;
}
const XmlRenderer: React.FunctionComponent<IXmlRendererProps> = ({ url, onProgress, onSuccess, onError }) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    const showLoader = () => setLoading(true);
    const closeLoader = () => setLoading(false);

    const [content, setContent] = useState<React.ReactNodeArray>();

    const [prevUrl, setPrevUrl] = useState<string | null>();
    const [fetched, setFetched] = useState(false);
    useEffect(() => {
        if (fetched && url === prevUrl) {
            return;
        }

        const xmlLoader = new XmlLoader(
            () => {
                showLoader();
                if (onProgress) {
                    onProgress();
                }
            },
            (newContent: React.ReactNodeArray) => {
                closeLoader();
                if (onSuccess) {
                    onSuccess();
                }
                setContent(newContent);
            },
            () => {
                closeLoader();
                if (onError) {
                    onError();
                }
            }
        );
        xmlLoader.init(url);
        setFetched(true);
        setPrevUrl(url);
    }, [url, prevUrl, fetched, onProgress, onSuccess, onError]);

    return (
        <div className={classes.root}>
            <div style={{ textAlign: "center" }}>
                <Collapse
                    in={loading}
                    style={{
                        transitionDelay: loading ? "1000ms" : "0ms",
                    }}
                    unmountOnExit
                >
                    <CircularProgress />
                </Collapse>
            </div>
            <div>{content}</div>
        </div>
    );
};
const skipRender = (prevProps: IXmlRendererProps, nextProps: IXmlRendererProps): boolean => {
    if (prevProps === undefined || nextProps === undefined) return false;
    if (prevProps.url !== nextProps.url) return false;
    return true;
};
export default React.memo(XmlRenderer, skipRender);
