import React from "react"
import {Content, SmallTitle} from "../ModalDialog/ModalDialog"
import styled from "styled-components"
import QueryForm from "./QueryForm"
import {useSelector} from "react-redux"
import Modal from "../../state/Modal"
import get from "lodash/get"

const StyledContent = styled(Content)`
  min-width: 480px;
`

const EditQueryModal = ({onClose}) => {
  const modalArgs = useSelector(Modal.getArgs)
  const query = get(modalArgs, "query", null)
  const isRemote = get(modalArgs, "isRemote", null)
  return (
    <StyledContent>
      <SmallTitle>Edit Query</SmallTitle>
      <QueryForm query={query} onClose={onClose} isRemote={isRemote} />
    </StyledContent>
  )
}

export default EditQueryModal
