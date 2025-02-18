import {darken} from "polished"
import {useDispatch} from "src/app/core/state"
import React from "react"
import styled from "styled-components"
import submitSearch from "src/app/query-home/flows/submit-search"
import Icon from "src/app/core/icon-temp"

const start = "#6aa4e7"
const end = "#4b91e2"
const bg = `linear-gradient(${start}, ${end})`
const bgHover = `linear-gradient(${darken(0.03, start)}, ${darken(0.03, end)})`
const bgActive = darken(0.05, end)

const Button = styled.button<{isMultiLine: boolean}>`
  background: ${bg};
  box-shadow: inset 0 0 0 1px var(--havelock);
  border: none;
  height: 26px;
  border-radius: ${(p) => (p.isMultiLine ? "4px" : "4px 13px 13px 4px")};
  margin-right: ${(p) => (p.isMultiLine ? "16px" : "1px")};
  margin-bottom: ${(p) => (p.isMultiLine ? "5px" : "0")};
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  svg {
    path {
      fill: white;
    }
    width: 16px;
    height: 16px;
    margin-right: ${(p) => (p.isMultiLine ? "0" : "3px")};
  }

  &:hover {
    background: ${bgHover};
  }

  &:active {
    background: ${bgActive};
    svg {
      fill: var(--cloudy);
    }
  }
`

export default function SubmitButton({isMultiLine}: {isMultiLine: boolean}) {
  const dispatch = useDispatch()
  return (
    <Button isMultiLine={isMultiLine} onClick={() => dispatch(submitSearch())}>
      <Icon name="run" />
    </Button>
  )
}
