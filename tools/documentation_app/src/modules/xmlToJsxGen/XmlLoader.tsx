import React from "react";
import XmlToJsxGenerator from "./XmlToJsxGenerator";

export default class XmlLoader {
    onProgress: VoidFunction;
    onSuccess: (newContent: React.ReactNodeArray) => void | VoidFunction;
    onError: VoidFunction;

    constructor(
        onProgress: VoidFunction = () => {},
        onSuccess: (newContent: React.ReactNodeArray) => void | VoidFunction = () => {},
        onError: VoidFunction = () => {}
    ) {
        this.onProgress = onProgress;
        this.onSuccess = onSuccess;
        this.onError = onError;
    }

    init = (url: string) => {
        this.onProgress();
        this.fetchXml(url).then(this.generateHtml);
    };

    generateHtml = (res: string) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(res, "text/xml");
        let newContent: React.ReactNodeArray = [];
        Array.from(xmlDoc.childNodes).forEach((child, index) =>
            newContent.push(<XmlToJsxGenerator key={index} content={child as Element} />)
        );
        this.onSuccess(newContent);
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
        return res.text();
    }
}
