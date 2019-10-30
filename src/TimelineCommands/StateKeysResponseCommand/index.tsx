import React, { FunctionComponent } from "react"
import styled from "styled-components"

import TimelineCommand from "../../TimelineCommand"
import { TimelineCommandProps, buildTimelineCommand } from "../BaseCommand"

const PathLabel = styled.div`
  padding-bottom: 10px;
  color: ${props => props.theme.bold};
`

const KeysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.foreground};
`
const Key = styled.div`
  background-color: ${props => props.theme.backgroundLighter};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
`

interface StateKeysResponsePayload {
  path?: string
  keys: string[]
  valid: boolean
}

interface Props extends TimelineCommandProps<StateKeysResponsePayload> {}

function renderKeys(keys: string[]) {
  if (!keys) return <KeysContainer>¯\_(ツ)_/¯</KeysContainer>
  if (keys.length === 0) return <KeysContainer>Sorry, no keys in there.</KeysContainer>

  return (
    <KeysContainer>
      {keys.map(key => {
        return <Key>{key}</Key>
      })}
    </KeysContainer>
  )
}

const StateKeysResponseCommand: FunctionComponent<Props> = ({ command, isOpen, setIsOpen }) => {
  const { payload, date, deltaTime } = command

  // TODO: Handle clicking a key!

  return (
    <TimelineCommand
      date={date}
      deltaTime={deltaTime}
      title="STATE KEYS"
      preview=""
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <PathLabel>{payload.path || "(root)"}</PathLabel>
      {renderKeys(payload.keys)}
    </TimelineCommand>
  )
}

export default buildTimelineCommand(StateKeysResponseCommand, true)
export { StateKeysResponseCommand }
