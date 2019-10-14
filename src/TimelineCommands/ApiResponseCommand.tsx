import React, { useState } from "react"
import styled from "styled-components"

import TimelineCommand from "../TimelineCommand"
import TimelineCommandTabButton from "../TimelineCommandTabButton"
import ContentView from "../ContentView"

// TODO: Consider if this is a component that should be built into the TimelineCommand...
const NameContainer = styled.div`
  color: ${props => props.theme.bold};
  padding-bottom: 10px;
`

const TabsContainer = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
`

interface Props {
  command: {
    clientId: string // TODO: Move most of this to a base CommandType
    connectionId: number
    date: Date
    deltaTime: number
    important: boolean
    messageId: number
    payload: {
      duration: number
      request: {
        data: any //? ¯\_(ツ)_/¯
        headers: { [key: string]: string }
        method: string
        params: any //? ¯\_(ツ)_/¯
        url: string
      }
      response: {
        body: string
        headers: { [key: string]: string }
        status: number
      }
    }
    type: string
  }
}

enum Tabs {
  None = "none",
  RequestHeaders = "requestHeaders",
  RequestBody = "requestBody",
  RequestParams = "requestParams",
  ResponseHeaders = "responseHeaders",
  ResponseBody = "responseBody",
}

function createTabBuilder(onTab: Tabs, setOnTab: (tab: Tabs) => void) {
  const tabBuilder = (currentTab: Tabs, text: string) => {
    return (
      <TimelineCommandTabButton
        isActive={onTab === currentTab}
        text={text}
        onClick={() => {
          if (onTab === currentTab) {
            setOnTab(Tabs.None)
          } else {
            setOnTab(currentTab)
          }
        }}
      />
    )
  }

  return tabBuilder
}

export default function ApiResponseCommand({ command }: Props) {
  const [onTab, setOnTab] = useState<Tabs>(null)

  const { payload, date, deltaTime } = command
  const { duration, request, response } = payload

  const cleanedUrl = request.url.replace(/^http(s):\/\/[^/]+/i, "").replace(/\?.*$/i, "")
  const preview = `${(request.method || "").toUpperCase()} ${cleanedUrl}`

  const summary = {
    "Status Code": response.status,
    Method: request.method,
    "Duration (ms)": duration,
  }

  const tabBuilder = createTabBuilder(onTab, setOnTab)

  return (
    <TimelineCommand date={date} deltaTime={deltaTime} title="API RESPONSE" preview={preview}>
      <NameContainer>{payload.request.url}</NameContainer>
      <ContentView value={summary} />
      <TabsContainer>
        {tabBuilder(Tabs.ResponseBody, "Response")}
        {tabBuilder(Tabs.ResponseHeaders, "Response Headers")}
        {!!request.data && tabBuilder(Tabs.RequestBody, "Request")}
        {!!request.params && tabBuilder(Tabs.RequestParams, "Request Params")}
        {tabBuilder(Tabs.RequestHeaders, "Request Headers")}
      </TabsContainer>
      {onTab === Tabs.ResponseBody && <ContentView value={response.body} />}
      {onTab === Tabs.ResponseHeaders && <ContentView value={response.headers} />}
      {onTab === Tabs.RequestBody && <ContentView value={request.data} treeLevel={1} />}
      {onTab === Tabs.RequestParams && <ContentView value={request.params} />}
      {onTab === Tabs.RequestHeaders && <ContentView value={request.headers} />}
    </TimelineCommand>
  )
}
