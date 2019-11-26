import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Box from "@material-ui/core/Box/Box";
import Header from "./components/Header";
import IndexPage from "./components/IndexPage";
import Feature from "./components/Feature";
import Notfound from "./components/NotFound";
import style from "./app.module.scss";
import FeatureList from "./components/FeatureList";

const App: React.FunctionComponent = () => (
    <Router>
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
);

export default App;
