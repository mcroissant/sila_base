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
    h1: { fontFamily: "Roboto, sans-serif", fontSize: 45 },
    h2: { fontFamily: "Roboto, sans-serif", fontSize: 37 },
    h3: { fontFamily: "Roboto, sans-serif", fontSize: 32 },
    h4: { fontFamily: "Roboto, sans-serif", fontSize: 28 },
    h5: { fontFamily: "Roboto, sans-serif", fontSize: 24 },
    h6: { fontFamily: "Roboto, sans-serif", fontSize: 20 },
    button: { fontFamily: "Roboto, sans-serif", fontSize: 16 },
    fontSize: 14,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    lineHeight: 1.5,
};
export const defaultMaterialTheme = createMuiTheme({ typography: customTypography });

const App: React.FunctionComponent = () => (
    <MuiThemeProvider theme={defaultMaterialTheme}>
        <Router basename={`${process.env.PUBLIC_URL}`}>
            <div className={style.gridWrapper}>
                <CssBaseline />
                <Header />

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
            </div>
        </Router>
    </MuiThemeProvider>
);

export default App;
