import React, { useEffect } from "react";
import XmlLoader from "../services/XmlLoader";

const XmlRenderer: React.FunctionComponent<{ url: string }> = ({ url }) => {
    const renderEl = React.createRef<HTMLDivElement>();

    useEffect(() => {
        if (renderEl && renderEl.current) {
            new XmlLoader(url, renderEl.current);
        }
    }, [renderEl, url]);

    return <div ref={renderEl} />;
};
export default XmlRenderer;
