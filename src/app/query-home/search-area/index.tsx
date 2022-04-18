import React from "react"
import styled from "styled-components"

import Pins from "./pins"
import Error from "./error"
import Input, {hasNewLine} from "./Input"
import FromPinPicker from "./from-pin-picker"
import {useSelector} from "react-redux"
import SearchBar from "src/js/state/SearchBar"
import Current from "src/js/state/Current"
import {cssVar} from "../../../js/lib/cssVar"

const Group = styled.div<{isMultiLine: boolean}>`
  display: flex;
  flex-direction: column;
  padding: ${(p) => (p.isMultiLine ? "0" : "0 16px 10px")};
`

const Wrap = styled.div<{isMultiLine: boolean}>`
  padding-top: 12px;
  ${(p) =>
    p.isMultiLine &&
    `
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.16);
    background: var(--editor-background);
  `}
`

export default function SearchArea() {
  const inputValue = useSelector(SearchBar.getSearchBarInputValue)
  const isMultiLine = hasNewLine(inputValue)
  const query = useSelector(Current.getQuery)

  return (
    <Wrap isMultiLine={isMultiLine}>
      <FromPinPicker isDisabled={query.isReadOnly} />
      <Group isMultiLine={isMultiLine}>
        <Input
          inputValue={inputValue}
          isMultiLine={isMultiLine}
          isDisabled={query.isReadOnly}
        />
        <Error />
        <Pins />
      </Group>
    </Wrap>
  )
}
