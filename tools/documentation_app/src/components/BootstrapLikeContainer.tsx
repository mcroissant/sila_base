import React from "react";
import { Grid } from "@material-ui/core";

const BootstrapContainerGrid: React.FunctionComponent = (props) => {
    return (
        <Grid container style={{ marginTop: "3em" }}>
            <Grid item lg={2} md={2} sm={1} xs={false} />
            <Grid item lg={8} md={8} sm={10} xs={12}>
                {props.children}
            </Grid>
            <Grid item lg={2} md={2} sm={1} xs={false} />
        </Grid>
    );
};
export default BootstrapContainerGrid;
