import {TypeDefs, zed} from "@brimdata/zealot"
import {ScrollPosition} from "../../types"
import {SearchStatus} from "../../types/searches"

export type ViewerStatus =
  | "INIT"
  | "FETCHING"
  | "INCOMPLETE"
  | "COMPLETE"
  | "LIMIT"

export type ViewerSelectionData = {
  rows: {
    [key: number]: boolean
  }
  currentRange: [number, number]
}
export type ViewerState = {
  records: zed.Record[]
  columns: TypeDefs
  endStatus: ViewerStatus
  status: SearchStatus
  searchKey: string
  scrollPos: ScrollPosition
  selection: ViewerSelectionData
}

export type ViewerAction =
  | VIEWER_CLEAR
  | VIEWER_SPLICE
  | VIEWER_STATUS
  | VIEWER_RECORDS
  | VIEWER_SET_RECORDS
  | VIEWER_COLUMNS
  | VIEWER_SET_COLUMNS
  | VIEWER_SET_SEARCH_KEY
  | VIEWER_END_STATUS
  | VIEWER_SCROLL
  | VIEWER_SELECT
  | VIEWER_SELECT_MULTI
  | VIEWER_SELECT_RANGE
  | VIEWER_SELECT_NEXT
  | VIEWER_SELECT_PREV
  | VIEWER_SELECT_RANGE_NEXT
  | VIEWER_SELECT_RANGE_PREV
  | VIEWER_SELECT_ALL

export type VIEWER_RECORDS = {
  type: "VIEWER_RECORDS"
  records: zed.Value[]
  tabId: string | null | undefined
}

export type VIEWER_SET_RECORDS = {
  type: "VIEWER_SET_RECORDS"
  records: zed.Value[]
  tabId?: string
}

export type VIEWER_CLEAR = {
  type: "VIEWER_CLEAR"
  tabId?: string
}

export type VIEWER_SPLICE = {
  type: "VIEWER_SPLICE"
  index: number
  tabId: string
}

export type VIEWER_END_STATUS = {
  type: "VIEWER_END_STATUS"
  status: ViewerStatus
  tabId: string
}

export type VIEWER_STATUS = {
  type: "VIEWER_STATUS"
  status: SearchStatus
  tabId: string
}

export type VIEWER_COLUMNS = {
  type: "VIEWER_COLUMNS"
  columns: TypeDefs
  tabId: string
}

export type VIEWER_SET_COLUMNS = {
  type: "VIEWER_SET_COLUMNS"
  columns: TypeDefs
  tabId: string
}

export type VIEWER_SCROLL = {
  type: "VIEWER_SCROLL"
  scrollPos: ScrollPosition
}

export type VIEWER_SELECT = {
  type: "VIEWER_SELECT"
  index: number
}

export type VIEWER_SELECT_MULTI = {
  type: "VIEWER_SELECT_MULTI"
  index: number
}

export type VIEWER_SELECT_RANGE = {
  type: "VIEWER_SELECT_RANGE"
  index: number
}

export type VIEWER_SELECT_NEXT = {
  type: "VIEWER_SELECT_NEXT"
}

export type VIEWER_SELECT_PREV = {
  type: "VIEWER_SELECT_PREV"
}

export type VIEWER_SELECT_RANGE_NEXT = {
  type: "VIEWER_SELECT_RANGE_NEXT"
}

export type VIEWER_SELECT_RANGE_PREV = {
  type: "VIEWER_SELECT_RANGE_PREV"
}

export type VIEWER_SELECT_ALL = {
  type: "VIEWER_SELECT_ALL"
}

export type VIEWER_SET_SEARCH_KEY = {
  type: "VIEWER_SET_SEARCH_KEY"
  tabId: string
  key: string
}
