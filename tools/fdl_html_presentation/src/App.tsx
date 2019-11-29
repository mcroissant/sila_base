import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Box from "@material-ui/core/Box/Box";
import Header from "./components/Header";
import IndexPage from "./components/IndexPage";
import Feature from "./components/Feature";
import Notfound from "./components/NotFound";
import FeatureList from "./components/FeatureList";
import style from "./app.module.scss";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { MuiThemeProvider } from "@material-ui/core";

/**
 * Material UI Theme
 */
const customTypography = {
    h1: { fontFamily: "Roboto, sans-serif", fontWeight: "lighter" as "lighter", fontSize: 40 },
    h2: { fontFamily: "Roboto, sans-serif", fontWeight: "lighter" as "lighter", fontSize: 35 },
    h3: { fontFamily: "Roboto, sans-serif", fontWeight: "lighter" as "lighter", fontSize: 30 },
    h4: { fontFamily: "Roboto, sans-serif", fontWeight: "lighter" as "lighter", fontSize: 25 },
    h5: { fontFamily: "Roboto, sans-serif", fontWeight: "lighter" as "lighter", fontSize: 22.5 },
    h6: { fontFamily: "Roboto, sans-serif", fontWeight: "lighter" as "lighter", fontSize: 20 },
    button: { fontFamily: "Oswald, sans-serif" },
    fontFamily: "Raleway, sans-serif",
};
export const defaultMaterialTheme = createMuiTheme({ typography: customTypography });

const App: React.FunctionComponent = () => (
    <Router basename={`${process.env.PUBLIC_URL}`}>
        <div className={style.gridWrapper}>
            <CssBaseline />
            <Header />
            <MuiThemeProvider theme={defaultMaterialTheme}>
                <Container>
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
                            <Route component={Notfound} />
                        </Switch>
                    </Box>
                </Container>
            </MuiThemeProvider>
        </div>
    </Router>
);

export default App;
