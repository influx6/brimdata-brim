import DropdownArrow from "src/js/icons/DropdownArrow"
import styled from "styled-components"

export const StyledSection = styled.section`
  position: relative;
  min-height: 24px;
  display: flex;
  flex-direction: column;
`

export const SectionContents = styled.div`
  flex: 1;
  overflow-y: auto;
  position: relative;
`

export const SectionHeader = styled.div`
  display: flex;
  background-color: var(--coconut);
  min-height: 24px;
  max-height: 24px;
  align-items: center;
  user-select: none;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 1px;
    box-shadow: inset 0 0.5px 0 0 var(--cloudy);
  }

  &::after {
    top: unset;
    bottom: 0;
    box-shadow: inset 0 -0.5px 0 0 var(--cloudy);
  }
`

export const Title = styled.label`
  margin-left: 8px;
  line-height: 24px;

  ${(props) => props.theme.typography.headingList}
`

export const StyledArrow = styled(DropdownArrow)`
  stroke: var(--aqua);
  opacity: 0.3;
  width: 8px;
  height: 8px;
  display: block;
  margin-left: 12px;
  transform: ${(props) => (props.show ? `rotate(0deg)` : "rotate(-90deg)")};
`

export const ClickRegion = styled.div`
  display: flex;
  align-items: center;
`

export const StyledViewSelect = styled.div`
  ${(props) => props.theme.typography.labelSmall}
  ${(props) => props.theme.hoverQuiet}
  display: flex;
  margin-left: auto;
  height: 18px;
  padding: 0 8px;
  line-height: 24px;
  flex-direction: row;
  align-items: center;
  border-radius: 3px;
  color: var(--slate);
  white-space: nowrap;
  overflow: hidden;

  svg {
    stroke: var(--slate);
    margin-left: 6px;
    height: 8px;
    width: 8px;
  }
`

export const DragAnchor = styled.div`
  position: absolute;
  width: 100%;
  height: 12px;
  top: -6px;
  left: 0;
  z-index: 1;
`
