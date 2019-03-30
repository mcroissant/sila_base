// Fügen Sie Ihren Code hier ein.
function getListOfFeature(git) {
    gitBranch = xml.responseXML;
}

function ViewFeatureDefinition(xml) {
    xmlDoc = xml.responseXML;
    xmlChilds = xmlDoc.children[0].children;

    table = '';

    Feature = '<div class=\'FDLevel1\' >';
    for (i = 0; i < xmlChilds.length; i++) {
        if (xmlChilds[i].children.length === 0) {
            Feature += '<button type="button" class="btn">' + xmlChilds[i].localName + ': </button><button type="button" class="btn FeatureInfo">' + xmlChilds[i].innerHTML + '</button><br />';
        }
        else {// If more then one element is included (e.g. Command / Response / SEE)
            // get the child element of the current child
            xmlChildChild = xmlChilds[i].children;
            // Button for collapse and uncollapse
            Feature += '<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#collapse' + i + '">' + xmlChilds[i].localName + ': </button><br />';
            // beginn of new collapse
            Feature += '<div id="collapse' + i + '" class="collapse FDLevel2">';
            if (xmlChilds[i].children.length === 0) {
                Feature += '<button type="button" class="btn">' + xmlChildChild[j].localName + ': </button><button type="button" class="btn FeatureInfo">' + xmlChildChild[j].innerHTML + '</button><br />';
            }
            else {
                for (j = 0; j < xmlChildChild.length; j++) {
                    if (xmlChildChild[j].children.length === 0) {
                        Feature += '<button type="button" class="btn">' + xmlChildChild[j].localName + ': </button><button type="button" class="btn FeatureInfo">' + xmlChildChild[j].innerHTML + '</button><br />';
                    }
                    else {
                        Feature += '<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#collapse' + i + j + '">' + xmlChildChild[j].localName + ': </button><br />';
                        // beginn of new panel
                        Feature += '<div id="collapse' + i + j + '" class="collapse FDLevel3">';
                        xmlChildChildChild = xmlChildChild[j].children;
                        for (k = 0; k < xmlChildChildChild.length; k++) {
                            Feature += '<button type="button" class="btn">' + xmlChildChildChild[k].localName + ': </button><button type="button" class="btn FeatureInfo">' + xmlChildChildChild[k].innerHTML + '</button><br />';
                        }
                        Feature += '</div>';   
                    }
                }
            }
            Feature += '</div>';       
        }
    }
    Feature += '</div>';
    document.getElementById('SiLAFeature').innerHTML = Feature;
}