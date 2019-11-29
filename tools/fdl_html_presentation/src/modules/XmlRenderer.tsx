import React, { useEffect, useState } from "react";
import { createStyles, Fade, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import XmlLoader from "../services/XmlLoader";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        button: {
            margin: theme.spacing(2),
        },
        placeholder: {
            height: 40,
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
    const renderEl = React.createRef<HTMLDivElement>();

    const showLoader = () => setLoading(true);
    const closeLoader = () => setLoading(false);

    const _onProgress = () => {
        showLoader();
        if (onProgress) {
            onProgress();
        }
    };
    const _onSuccess = () => {
        closeLoader();
        if (onSuccess) {
            onSuccess();
        }
    };
    const _onError = () => {
        closeLoader();
        if (onError) {
            onError();
        }
    };

    const [fetched, setFetched] = useState(false);
    useEffect(() => {
        if (renderEl && renderEl.current && !fetched) {
            new XmlLoader(url, renderEl.current, _onProgress, _onSuccess, _onError);
            setFetched(true)
        }
    }, [renderEl, fetched]);

    return (
        <div className={classes.root}>
            <div className={classes.placeholder}>
                <Collapse
                    in={loading}
                    style={{
                        transitionDelay: loading ? "800ms" : "0ms",
                    }}
                    unmountOnExit
                >
                    <CircularProgress />
                </Collapse>
                <div ref={renderEl}/>
            </div>
        </div>
    );
};
const skipRender = (prevProps: IXmlRendererProps, nextProps: IXmlRendererProps): boolean => {
    if (prevProps === undefined || nextProps === undefined) return false;
    if (prevProps.url !== nextProps.url) return false;
    return true;
};
export default React.memo(XmlRenderer, skipRender);
