import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ExtendingStyles from "../src/ExtendingStyles";
import { Div } from "glamorous";

storiesOf("Button", module).add("with some emoji", () => <ExtendingStyles />);
