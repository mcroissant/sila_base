import React, {ChangeEvent, Component} from "react";
import {Tabs} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import FeatureList, {FeatureMode} from "./FeatureList";
import AutoCompleteSearch from "./AutoCompleteSearch";

class FeaturesPage extends Component {
    state = {
        currentTab: FeatureMode.Core,
    }
    value: FeatureMode = FeatureMode.Core;

    handleChange = (event: ChangeEvent<{}>, newValue: FeatureMode) => {
        this.setState({
            currentTab: newValue
        });
    };

    // todo make active tab
    render(): React.ReactNode {
        return (
            <>
                <Tabs value={this.value} onChange={this.handleChange} aria-label="simple tabs example">
                    <Tab label="Core Features" value={FeatureMode.Core}/>
                    <Tab label="All Features" value={FeatureMode.Alphabetical}/>
                    <Tab label="Features by category" value={FeatureMode.Category}/>
                </Tabs>
                <AutoCompleteSearch></AutoCompleteSearch>
                <FeatureList mode={this.state.currentTab}/>
            </>
        );
    }
}

export default FeaturesPage;
