import React from "react";
import NoSsr from "@material-ui/core/NoSsr";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";

// @ts-ignore
const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default function Theme(props: any) {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <CssBaseline>{props.children}</CssBaseline>
      </ThemeProvider>
    </NoSsr>
  );
}
