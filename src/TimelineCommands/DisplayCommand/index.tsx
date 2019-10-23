import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { MdContentCopy } from "react-icons/md"

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

function buildToolbar(commandPayload, copyToClipboard: (text: string) => void) {
  return [
    {
      icon: MdContentCopy,
      onClick: () => {
        const message = commandPayload.value

        if (!message) return

        if (typeof message === "string") {
          copyToClipboard(message)
        } else {
          copyToClipboard(JSON.stringify(message, null, 2))
        }
      },
      tip: "Copy text to clipboard",
    },
  ]
}

const DisplayCommand: FunctionComponent<Props> = ({
  command,
  isOpen,
  setIsOpen,
  copyToClipboard,
}) => {
  const { payload, date, deltaTime } = command

  let imageUrl
  if (payload.image) {
    if (typeof payload.image === "string") {
      imageUrl = payload.image
    } else {
      imageUrl = payload.image.uri
    }
  }

  const toolbar = buildToolbar(payload, copyToClipboard)

  return (
    <TimelineCommand
      date={date}
      deltaTime={deltaTime}
      title={payload.name || "DISPLAY"}
      preview={payload.name}
      toolbar={toolbar}
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
