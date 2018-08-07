import React from 'react'
import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor changePositionKey='ctrl-q'
               changeMonitorKey='ctrl-m'
               toggleVisibilityKey='ctrl-h'>
    <LogMonitor/>
  </DockMonitor>
)