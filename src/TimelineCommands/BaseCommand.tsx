import React, { FunctionComponent, useState } from "react"

export interface TimelineCommandPropsEx<T> {
  command: {
    clientId: string
    connectionId: number
    date: Date
    deltaTime: number
    important: boolean
    messageId: number
    payload: T
    type: string
  }
  copyToClipboard?: (text: string) => void
  readFile?: (path: string) => void
}

export interface TimelineCommandProps<T> extends TimelineCommandPropsEx<T> {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function buildTimelineCommand<T>(Component: FunctionComponent<TimelineCommandProps<T>>) {
  return (props: TimelineCommandPropsEx<T>) => {
    const [isOpen, setIsOpen] = useState(false)

    return <Component {...props} isOpen={isOpen} setIsOpen={setIsOpen} />
  }
}
