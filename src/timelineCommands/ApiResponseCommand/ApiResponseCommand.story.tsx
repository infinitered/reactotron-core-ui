/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react"

import { ApiResponseCommand, Tab } from "./index"

export default {
  title: "Timeline Commands/Api Response Command",
}

const apiResponseCommand = {
  type: "api.response",
  important: false,
  payload: {
    request: {
      url: "https://www.google.com/",
      method: "GET",
      data: null,
      headers: {},
      params: null,
    },
    response: {
      body: " skipped ",
      status: 200,
      headers: {
        Server: "gws",
        Expires: "-1",
        "Content-Type": "text/html; charset=ISO-8859-1",
        "Set-Cookie":
          "1P_JAR=2019-10-14-01; expires=Wed, 13-Nov-2019 01:55:49 GMT; path=/; domain=.google.com; SameSite=none",
        "Cache-Control": "private, max-age=0",
        "Content-Encoding": "gzip",
        Date: "Mon, 14 Oct 2019 01:55:49 GMT",
        "x-frame-options": "SAMEORIGIN",
        "alt-svc":
          'quic=":443"; ma=2592000; v="46,43",h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000',
        "x-xss-protection": "0",
        "Content-Length": "5144",
      },
    },
    duration: 170,
  },
  connectionId: 1,
  messageId: 4,
  date: new Date("2019-10-14T01:55:49.090Z"),
  deltaTime: 1171,
  clientId: "59ea1948-2c5c-fe2b-4b38-fc920d9d195e",
}

export const Closed = () => (
  <ApiResponseCommand
    command={apiResponseCommand}
    copyToClipboard={() => {}}
    isOpen={false}
    setIsOpen={() => {}}
  />
)

export const OpenNoTab = () => (
  <ApiResponseCommand
    command={apiResponseCommand}
    copyToClipboard={() => {}}
    isOpen
    setIsOpen={() => {}}
  />
)

export const OpenNoCopyMethod = () => (
  <ApiResponseCommand command={apiResponseCommand} isOpen setIsOpen={() => {}} />
)

export const OpenResponseBody = () => (
  <ApiResponseCommand
    command={apiResponseCommand}
    copyToClipboard={() => {}}
    isOpen
    setIsOpen={() => {}}
    initialTab={Tab.ResponseBody}
  />
)

export const OpenResponseHeaders = () => (
  <ApiResponseCommand
    command={apiResponseCommand}
    copyToClipboard={() => {}}
    isOpen
    setIsOpen={() => {}}
    initialTab={Tab.ResponseHeaders}
  />
)

export const OpenRequestHeaders = () => (
  <ApiResponseCommand
    command={apiResponseCommand}
    copyToClipboard={() => {}}
    isOpen
    setIsOpen={() => {}}
    initialTab={Tab.RequestHeaders}
  />
)
