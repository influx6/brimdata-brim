import {zed} from "@brimdata/zealot"
import {dispatch} from "d3"
import Editor from "src/js/state/Editor"
import brim from "../../brim"
import {onlyWhitespace} from "../../lib/Str"
import SearchBar from "../../state/SearchBar"
import {
  getSearchBar,
  getSearchBarInputValue,
} from "../../state/SearchBar/selectors"
import {Thunk} from "../../state/types"

const changeTo = (value) => (dispatch) => {
  dispatch(SearchBar.changeSearchBarInput(value))
  dispatch(Editor.setValue(value))
}

export function appendQueryInclude(field: zed.Field): Thunk {
  return function (dispatch, getState) {
    dispatch(
      changeTo(
        brim.program(getSearchBarInputValue(getState())).include(field).string()
      )
    )
  }
}

export function appendQueryExclude(field: zed.Field): Thunk {
  return function (dispatch, getState) {
    dispatch(
      changeTo(
        brim.program(getSearchBarInputValue(getState())).exclude(field).string()
      )
    )
  }
}

export function appendQueryCountBy(field: zed.Field): Thunk {
  return function (dispatch, getState) {
    const {current, pinned} = getSearchBar(getState())
    const query = [...pinned, current].join(" ")
    const program = onlyWhitespace(query) ? "*" : current

    dispatch(changeTo(brim.program(program).countBy(field).string()))
  }
}

export function appendQuerySortBy(
  name: string | string[],
  direction: "asc" | "desc"
): Thunk {
  return function (dispatch, getState) {
    const {current, pinned} = getSearchBar(getState())
    const query = [...pinned, current].join(" ")
    const program = onlyWhitespace(query) ? "*" : current

    dispatch(changeTo(brim.program(program).sortBy(name, direction).string()))
  }
}

export function appendQueryIn(field: zed.Field, value: zed.Value): Thunk {
  return function (dispatch, getState) {
    dispatch(
      changeTo(
        brim
          .program(getSearchBarInputValue(getState()))
          .in(field, value)
          .string()
      )
    )
  }
}

export function appendQueryNotIn(field: zed.Field, value: zed.Value): Thunk {
  return function (dispatch, getState) {
    dispatch(
      changeTo(
        brim
          .program(getSearchBarInputValue(getState()))
          .notIn(field, value)
          .string()
      )
    )
  }
}
