const PATH_TO_DOC = "../../documentation/"
const PATH_TO_DEST = "src/documentation/"
const ncp = require('ncp').ncp;

ncp(PATH_TO_DOC, PATH_TO_DEST, {},function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('done!');
});
