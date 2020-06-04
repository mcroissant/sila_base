import React, {useState} from "react";
import {Tabs, Divider, useMediaQuery, Theme} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import FeatureList, {FeatureMode} from "./FeatureList";

export default function FeaturesPage() {
    const [currentTab, setCurrentTab] = useState(() => FeatureMode.Core);
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    return (
        <>
            <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}
                  variant={matches ? "standard" : "fullWidth"} aria-label="simple tabs example">
                <Tab label="Core Features" value={FeatureMode.Core}/>
                <Tab label="All Features" value={FeatureMode.Alphabetical}/>
                <Tab label="Features by category" value={FeatureMode.Category}/>
            </Tabs>
            <Divider />
            {/* TODO add search bar to search features by name */}
            <FeatureList mode={currentTab}/>
        </>
    );
}
