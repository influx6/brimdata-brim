/* @flow */

import {createSelector} from "reselect"

import type {Cluster, ClustersState} from "../Clusters/types"
import type {DateTuple} from "../../lib/TimeWindow"
import type {Space, SpacesState} from "../Spaces/types"
import type {SpanArgs} from "../Search/types"
import type {State} from "../types"
import type {TabState} from "./types"
import Chart from "../Chart"
import Clusters from "../Clusters"
import History from "../History"
import Spaces from "../Spaces"
import Tabs from "../Tabs"
import Viewer from "../Viewer"
import activeTabSelect from "./activeTabSelect"
import brim, {type Span} from "../../brim"

const clusterId = activeTabSelect((tab) => tab.search.clusterId)

const cluster = createSelector<State, void, ?Cluster, string, ClustersState>(
  clusterId,
  Clusters.raw,
  (id, obj) => obj[id]
)

const space = createSelector<State, void, ?Space, TabState, SpacesState>(
  Tabs.getActiveTab,
  Spaces.raw,
  (tab, spaces) => {
    let list = spaces[tab.search.clusterId]
    if (list) return list[tab.search.space]
    else return null
  }
)

export function tabIsFetching(tab: TabState) {
  return Viewer.isFetching(tab) || Chart.isFetching(tab)
}

const getSpan = createSelector<State, void, Span, TabState>(
  Tabs.getActiveTab,
  (tab) => tab.search.span
)

const getSpanFocus = createSelector<State, void, ?Span, TabState>(
  Tabs.getActiveTab,
  (tab) => tab.search.spanFocus
)

const getSpanArgs = createSelector<State, void, SpanArgs, TabState>(
  Tabs.getActiveTab,
  (tab) => tab.search.spanArgs
)

const getComputedSpan = createSelector<State, void, Span, SpanArgs>(
  getSpanArgs,
  (args) => {
    return brim.span(args).toSpan()
  }
)

const getSpanAsDates = createSelector<State, void, DateTuple, Span>(
  getSpan,
  (span) => brim.span(span).toDateTuple()
)

const getSpanFocusAsDates = createSelector<State, void, ?DateTuple, ?Span>(
  getSpanFocus,
  (focus) => {
    if (focus) {
      let [from, to] = focus
      return [brim.time(from).toDate(), brim.time(to).toDate()]
    } else {
      return null
    }
  }
)

export default {
  clusterId,
  cluster,
  spaceName: activeTabSelect((tab) => tab.search.space),
  space,
  currentEntry: activeTabSelect(History.current),
  canGoBack: activeTabSelect(History.canGoBack),
  canGoForward: activeTabSelect(History.canGoForward),
  isFetching: activeTabSelect<boolean>(tabIsFetching),
  getSpan,
  getSpanAsDates,
  getSpanFocus,
  getSpanFocusAsDates,
  getSpanArgs,
  getComputedSpan
}
