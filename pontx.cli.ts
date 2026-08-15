import { runCLI } from "pontx/sdk-cli";
import { directTwelveDataFetch } from "./src/runtime";

export default runCLI({
  name: "pontx-twelve-data-forex",
  executeApi: {
    baseURL: "https://api.twelvedata.com",
    fetchFn: directTwelveDataFetch,
  },
});
