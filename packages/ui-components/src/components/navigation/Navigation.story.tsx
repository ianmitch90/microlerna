import React from "react";
import { storiesOf } from "@storybook/react";

import Navigation from "./index";

storiesOf("Navigation", module).add("Default", () => (
  <React.Fragment>
    <Navigation />
  </React.Fragment>
));
