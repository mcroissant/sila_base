import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

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
