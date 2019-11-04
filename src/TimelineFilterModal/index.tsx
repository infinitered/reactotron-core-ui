import React, { FunctionComponent } from "react"
import styled from "styled-components"

import Modal from "../Modal"
import Checkbox from "../Checkbox"

const GROUPS = [
  {
    name: "Informational",
    items: [
      { value: "log", text: "Log" },
      { value: "image", text: "Image" },
      { value: "display", text: "Custom Display" },
    ],
  },
  {
    name: "General",
    items: [
      { value: "client.intro", text: "Connection" },
      { value: "benchmark.report", text: "Benchmark" },
      { value: "api.response", text: "API" },
    ],
  },
  {
    name: "Async Storage",
    items: [{ value: "asyncStorage.mutation", text: "Mutations" }],
  },
  {
    name: "State & Sagas",
    items: [
      { value: "state.action.complete", text: "Action" },
      { value: "saga.task.complete", text: "Saga" },
      { value: "state.values.change", text: "Subscription Changed" },
    ],
  },
]

const BulkActionContainer = styled.div`
  margin-bottom: 20px;
`
const BulkAction = styled.span`
  cursor: pointer;
  color: ${props => props.theme.tag};
`

const GroupName = styled.div`
  font-size: 18px;
  margin: 10px 0;
  padding-bottom: 2px;
  border-bottom: 1px solid ${props => props.theme.highlight};
  color: ${props => props.theme.foregroundLight};
`

interface Props {
  isOpen: boolean
  onClose: () => void
}

const TimelineFilterModal: FunctionComponent<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal title="Timeline Filter" isOpen={isOpen} onClose={onClose}>
      <BulkActionContainer>
        <BulkAction>Check all</BulkAction>
        <span> / </span>
        <BulkAction>Uncheck all</BulkAction>
      </BulkActionContainer>
      <div>
        {GROUPS.map((section, sectionIdx) => {
          const options = section.items.map((item, itemIdx) => {
            const isChecked = true
            const onToggle = () => {}

            return (
              <Checkbox key={itemIdx} label={item.text} onToggle={onToggle} isChecked={isChecked} />
            )
          })

          return (
            <div key={sectionIdx}>
              <GroupName>{section.name}</GroupName>
              {options}
            </div>
          )
        })}
      </div>
    </Modal>
  )
}

export default TimelineFilterModal
