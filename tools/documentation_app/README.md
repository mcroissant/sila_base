# SiLA2 Base Feature Definitions explorer

## Implementation Note

-   The markdown can be injected using `react-markdown` npm module, but we must keep an eye to the following development decision: If the `*.md` file is to contain feature definition links, then we will need to transform all the links from that `*.md` file with `Unitilities.transformLinkUri` method. That means we cannot use this method for normal links. For such link we should use a new file and add it after, as we see in `IndexPage.tsx`:

```typescript jsx
<ReactMarkdown renderers={Utilities.MDRenderers} transformLinkUri={Utilities.transformLinkUri} source={markdown} />
<ReactMarkdown renderers={Utilities.MDRenderers} source={markdownBottom} />
```

-   Also keep aware that the `renderers` are changing the component of the `links` from `<a href=...>` to an internal `react-router-dom` `Link` component. This avoids page refresh and keeps routes in react Single Page Application. 

## <a name="setup-and-build"></a>Setup and build

1. Install node in your system. There are plenty of resources online about that.
2. Go to `tools/documentation_app`
3. Install `npm install` or if you prefer yarn: `yarn install`
4. Build `npm build` or `yarn build`
5. A new `build` folder has appeared. Here you can try your new web app by serving this `build` folder

## Development

1. Follow steps 1 to 3 from section [Setup and build](setup-and-build).
2. `npm start` or `yarn start`
3. Follow terminal instructions if your default browser didn't automatically opened the new web app.
4. Update any `jsx` file to se the changes in real time (hot reload) 

## Roadmap

1. Get the list of features from gitLab API, for example: [Recursive tree list call](https://gitlab.com/api/v4/projects/5508183/repository/tree?recursive=1)

    And using that list to generate all content in react. This would automatize the maintenance of the documentation and would allow us to filter, search and operate on the FTD array directly.

2. Have a search input in the header to filter FTDs by name
