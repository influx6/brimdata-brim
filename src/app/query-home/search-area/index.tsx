import React from "react"
import styled from "styled-components"

import Error from "./error"
import Input, {hasNewLine} from "./Input"
import {useSelector} from "react-redux"
import SearchBar from "src/js/state/SearchBar"
import {Pins} from "./pins/pins"

const Group = styled.div<{flex: number; isMultiLine: boolean}>`
  display: flex;
  flex: ${(p) => p.flex || "initial"};
  flex-direction: column;
  padding: ${(p) => (p.isMultiLine ? "0" : "0 16px 10px")};
`

export default function SearchArea() {
  const inputValue = useSelector(SearchBar.getSearchBarInputValue)
  const isMultiLine = hasNewLine(inputValue)
  return (
    <>
      <Pins />
      <Group isMultiLine={isMultiLine} flex={1}>
        <Input isMultiLine={isMultiLine} />
        <Error />
      </Group>
    </>
  )
}
