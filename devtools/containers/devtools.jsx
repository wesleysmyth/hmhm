const React = require("react");
const { createDevTools } = require("redux-devtools");
import LogMonitor from "redux-devtools-log-monitor";
const DockMonitor = require("redux-devtools-dock-monitor").default;
let theme = "solarized";

if (process.env.DEVTOOLS_THEME) {
    theme = process.env.DEVTOOLS_THEME;
}

window.DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme={ theme } />
    </DockMonitor>
);

module.exports = window.DevTools;
