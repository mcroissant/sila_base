const updateUrl = (path: string) =>
    "https://gitlab.com/api/v4/projects/5508183/repository/files/" + encodeURIComponent(path) + "/raw?ref=master";

const Utilities = {
    updateUrl,
};
export default Utilities;
