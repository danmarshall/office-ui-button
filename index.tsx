import * as React from "react";
import * as ReactDOM from "react-dom";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

import { loadTheme } from "office-ui-fabric-react/lib/Styling";

loadTheme({
  palette: {
    themePrimary: "#cc00cc",
    themeLighterAlt: "#eff6fc",
    themeLighter: "#deecf9",
    themeLight: "#c7e0f4",
    themeTertiary: "#71afe5",
    themeSecondary: "#2b88d8",
    themeDarkAlt: "#106ebe",
    themeDark: "#005a9e",
    themeDarker: "#004578",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#c2c2c2",
    neutralSecondary: "#858585",
    neutralPrimaryAlt: "#4b4b4b",
    neutralPrimary: "#333333",
    neutralDark: "#272727",
    black: "#1d1d1d",
    white: "#ffffff"
  }
});

ReactDOM.render(
  <PrimaryButton onClick={e => alert("clicked")}>I am a button.</PrimaryButton>,
  document.getElementById("app")
);
