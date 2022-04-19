import React from "react"
import DetailSection from "./detail-section"

import styled from "styled-components"
import {useDispatch} from "src/app/core/state"
import {useSelector} from "react-redux"
import Appearance from "src/js/state/Appearance"
import PoolsSection from "../sidebar/pools-section"
import QueriesSection from "../sidebar/queries-section"
import HistorySection from "../sidebar/history-section"

const BG = styled.div`
  display: flex;
  padding: 0 6px;

  button {
    background: none;
    border: none;
    display: flex;

    border-radius: 5px;
    padding: 0 6px;
    text-transform: uppercase;

    span {
      height: 22px;
      display: flex;
      align-items: center;
      font-weight: 500;
      border-bottom: 2px solid transparent;
      padding: 4px;
      font-size: 11px;
      opacity: 0.5;
    }

    &:hover {
      span {
        opacity: 0.7;
        transition: opacity 0.2s;
      }
    }

    &:active {
      span {
        opacity: 0.8;
      }
    }

    &[aria-pressed="true"] {
      span {
        opacity: 1;
        border-bottom: 2px solid var(--primary-color);
      }
    }
  }
`

const PaneContentSwitch = ({paneName}) => {
  switch (paneName) {
    case "detail":
      return <DetailSection />
    case "versions":
      return <div>versions!</div>
    // return <VersionsSection />
    default:
      return null
  }
}

export function Menu() {
  const dispatch = useDispatch()
  const currentPaneName = useSelector(Appearance.getCurrentPaneName)
  const onClick = (name) => () => dispatch(Appearance.setCurrentPaneName(name))
  return (
    <BG>
      <button
        onClick={onClick("detail")}
        aria-pressed={currentPaneName === "detail"}
      >
        <span>Detail</span>
      </button>
      <button
        onClick={onClick("versions")}
        aria-pressed={currentPaneName === "versions"}
      >
        <span>Versions</span>
      </button>
    </BG>
  )
}

const RightPane = () => {
  const currentPaneName = useSelector(Appearance.getCurrentPaneName)

  return (
    <Wrap>
      <Menu />
      <PaneContentSwitch paneName={currentPaneName} />
    </Wrap>
  )
  return <DetailSection />
}

export default RightPane
