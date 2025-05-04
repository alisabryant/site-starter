import * as React from "react";
import {
  PlasmicCanvasHost,
  registerGlobalContext,
} from "@plasmicapp/react-web/lib/host";
import { UserSession } from "@/components/CodeComponents/GlobalContexts/UserSession";

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

registerGlobalContext(UserSession, {
  name: "UserSession",
  providesData: true,
  importPath: "./components/CodeComponents/GlobalContexts/UserSession",
  props: {},
  globalActions: {
    login: {
      parameters: [
        {
          name: "provider",
          type: {
            type: "choice",
            options: ["google"],
          },
        },
        {
          name: "redirectTo",
          type: "string",
        },
      ],
    },
    logout: {
      parameters: [
        {
          name: "redirectTo",
          type: "string",
        },
      ],
    },
  },
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
