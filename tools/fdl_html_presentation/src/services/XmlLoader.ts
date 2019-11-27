import React from "react";
import ReactDOM from "react-dom";
import XmlJsxBuilder from "../modules/XmlToJsxGenerator";

export default class XmlLoader {
    element: HTMLDivElement;
    constructor(url: string, element: HTMLDivElement) {
        this.element = element;
        this.fetchXml(url).then(this.generateHtml);
    }

    generateHtml = (res: string) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(res, "text/xml");
        console.log(xmlDoc);
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
        throw Error(err);
    }

    handleResponse(res: Response) {
        if (!res.ok) {
            console.log(res);
            throw Error(res.statusText);
        }
        return res.text();
    }
}
