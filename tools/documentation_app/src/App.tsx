import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Box from "@material-ui/core/Box/Box";
import Header from "./components/Header";
import IndexPage from "./components/IndexPage";
import Feature from "./modules/features/Feature";
import Notfound from "./components/NotFound";
import FeatureList from "./components/FeatureList";
import style from "./app.module.scss";
import { MuiThemeProvider } from "@material-ui/core";
import { defaultMaterialTheme } from "./services/styles";
import BootstrapContainerGrid from "./components/BootstrapLikeContainer";
import MarkDownRoute from "./components/MarkDownRoute";
import Wiki from "./docs";

const App: React.FunctionComponent = () => (
    <MuiThemeProvider theme={defaultMaterialTheme}>
        <Router basename={`${process.env.PUBLIC_URL}`}>
            <div className={style.gridWrapper}>
                <CssBaseline />
                <Header />

                <BootstrapContainerGrid>
                    <Box p={2}>
                        <Switch>
                            <Route exact path={"/"} component={IndexPage} />
                            <Route path={"/feature"} component={Feature} />
                            <Route
                                path={"/feature-definitions/list/alphabetical"}
                                component={() => <FeatureList mode={"alphabet"} />}
                            />
                            <Route
                                path={"/feature-definitions/list/categories"}
                                component={() => <FeatureList mode={"category"} />}
                            />
                            {Wiki.map((p, i) => (
                                <MarkDownRoute key={i} {...p} />
                            ))}
                            <Route component={Notfound} />
                        </Switch>
                    </Box>
                </BootstrapContainerGrid>
            </div>
        </Router>
    </MuiThemeProvider>
);

export default App;
