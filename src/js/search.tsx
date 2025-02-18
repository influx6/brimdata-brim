import {BrimProvider} from "src/app/core/context"
import {ipcRenderer} from "electron"
import "regenerator-runtime/runtime"
import App from "./components/App"
import StartupError from "./components/StartupError"
import deletePartialPools from "./flows/deletePartialPools"
import initialize from "./initializers/initialize"
import lib from "./lib"
import {getPersistedState} from "./state/getPersistable"
import TabHistories from "./state/TabHistories"
import React from "react"
import {createRoot} from "react-dom/client"

initialize()
  .then(({store, api, pluginManager}) => {
    window.onbeforeunload = () => {
      // This runs during reload
      // Visit initIpcListeners.ts#prepareClose for closing window
      api.abortables.abortAll()
      pluginManager.deactivate()
      store.dispatch(deletePartialPools())
      store.dispatch(TabHistories.save(global.tabHistories.serialize()))
      ipcRenderer.send(
        "windows:updateState",
        global.windowId,
        getPersistedState(store.getState())
      )
    }
    const container = lib.doc.id("app-root")
    const root = createRoot(container!)
    root.render(
      <BrimProvider store={store} api={api}>
        <App />
      </BrimProvider>
    )
  })
  .catch((e) => {
    console.error(e)
    const container = lib.doc.id("app-root")
    const root = createRoot(container!)
    root.render(<StartupError error={e} />)
  })
