import { FunctionComponent } from "react"

import ApiResponseCommand from "./ApiResponseCommand"
import ClientIntroCommand from "./ClientIntroCommand"
import DisplayCommand from "./DisplayCommand"
import StateActionCompleteCommand from "./StateActionCompleteCommand"
import { TimelineCommandProps } from "./BaseCommand"

enum CommandTypes {
  ApiResponse = "api.response",
  ClientIntro = "client.intro",
  Display = "display",
  StateActionComplete = "state.action.complete",
}

function timelineCommandResolver(type: CommandTypes): FunctionComponent<TimelineCommandProps<any>> {
  switch (type) {
    case CommandTypes.ApiResponse:
      return ApiResponseCommand
    case CommandTypes.ClientIntro:
      return ClientIntroCommand
    case CommandTypes.Display:
      return DisplayCommand
    case CommandTypes.StateActionComplete:
      return StateActionCompleteCommand
    default:
      return null
  }
}

export default timelineCommandResolver
