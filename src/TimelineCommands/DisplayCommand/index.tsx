import React, { FunctionComponent } from "react"
import styled from "styled-components"

import TimelineCommand from "../../TimelineCommand"
import { TimelineCommandProps, buildTimelineCommand } from "../BaseCommand"
import ContentView from "../../ContentView"

const ImageContainer = styled.div``

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

interface DisplayPayload {
  name: string
  value?: any
  image?: any
  preview?: string
  important?: boolean
}

interface Props extends TimelineCommandProps<DisplayPayload> {}

const DisplayCommand: FunctionComponent<Props> = ({ command, isOpen, setIsOpen }) => {
  const { payload, date, deltaTime } = command

  let imageUrl
  if (payload.image) {
    if (typeof payload.image === "string") {
      imageUrl = payload.image
    } else {
      imageUrl = payload.image.uri
    }
  }

  return (
    <TimelineCommand
      date={date}
      deltaTime={deltaTime}
      title={payload.name || "DISPLAY"}
      preview={payload.name}
      isImportant={payload.important}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {payload.value && <ContentView value={payload.value} />}
      {imageUrl && (
        <ImageContainer>
          <Image src={imageUrl} />
        </ImageContainer>
      )}
    </TimelineCommand>
  )
}

export default buildTimelineCommand(DisplayCommand)
export { DisplayCommand }
