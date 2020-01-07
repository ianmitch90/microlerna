import { addParameters, configure, setAddon } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import JSXAddon from "storybook-addon-jsx";
import "@storybook/addon-console";

function loadStories() {
  const req = require.context("../src", true, /\.story\.(ts|tsx)$/);
  req.keys().forEach(filename => {
    return req(filename);
  });
}

addParameters({
  options: {
    isFullscreen: false,
    panelPosition: "right",
    showNav: true,
    showPanel: true,
    showSearchBox: false,
    sortStoriesByKind: true
  }
});

addParameters({
  viewports: {
    ...INITIAL_VIEWPORTS
  }
});

setAddon(JSXAddon);

configure(loadStories, module);
