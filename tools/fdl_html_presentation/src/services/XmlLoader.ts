import React from "react";
import ReactDOM from "react-dom";
import XmlJsxBuilder from "../modules/XmlToJsxGenerator";

export default class XmlLoader {
    onSuccess: VoidFunction;
    onError: VoidFunction;
    element: HTMLDivElement;
    constructor(
        url: string,
        element: HTMLDivElement,
        onProgress: VoidFunction = () => {},
        onSuccess: VoidFunction = () => {},
        onError: VoidFunction = () => {}
    ) {
        this.onSuccess = onSuccess;
        this.onError = onError;
        this.element = element;
        onProgress();
        this.fetchXml(url).then(this.generateHtml);
    }

    generateHtml = (res: string) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(res, "text/xml");
        Array.from(xmlDoc.childNodes).forEach((child) => {
            ReactDOM.render(React.createElement(XmlJsxBuilder, { content: child as Element }), this.element);
        });
    };

    fetchXml(url: string): Promise<any> {
        return fetch(url, { method: "GET" })
            .then(this.handleResponse.bind(this))
            .catch(this.handleError.bind(this));
    }

    handleError(err: string): void {
        this.onError();
        throw Error(err);
    }

    handleResponse(res: Response) {
        if (!res.ok) {
            this.onError();
            throw Error(res.statusText);
        }
        this.onSuccess();
        return res.text();
    }
}
