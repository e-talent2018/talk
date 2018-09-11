import { TalkContext } from "talk-framework/lib/bootstrap";

import { commit as setAuthToken } from "talk-framework/mutations/SetAuthTokenMutation";

export default function onPostMessageSetAuthToken(ctx: TalkContext) {
  const { relayEnvironment, postMessage } = ctx;
  // Auth popup will use this to handle a successful login.
  postMessage!.on("setAuthToken", (authToken: string) => {
    setAuthToken(relayEnvironment, { authToken }, ctx);
  });
}