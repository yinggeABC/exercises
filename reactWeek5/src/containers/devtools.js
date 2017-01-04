/**
 * Created by weimin on 17-1-4.
 */
import React from "react"

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

 let DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
changePositionKey  ='ctrl-q'>
    <LogMonitor theme='tomorrow' />
    </DockMonitor>
)
export default DevTools;