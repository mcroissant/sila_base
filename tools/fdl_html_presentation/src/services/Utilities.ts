import { GITLAB_API_FILES_PATH } from "../constants";

const updateUrl = (path: string) =>
    GITLAB_API_FILES_PATH + "/" + encodeURIComponent(path) + "/raw?ref=master";

const changeMarkdownUrls = (uri: string) => `${process.env.PUBLIC_URL}/feature?f=${uri}`;

const Utilities = {
    updateUrl,
    changeMarkdownUrls,
};
export default Utilities;
