import { OpenFeature } from "@openfeature/web-sdk";
import { FlagshipClientProvider } from "@cloudflare/flagship/web";

export const getClient = async (context: { userId: string }) => {
  await OpenFeature.setProviderAndWait(
    new FlagshipClientProvider({
      appId: "aaf1fab0-bb42-4d02-b189-2b2a151515cf",
      accountId: import.meta.env.VITE_FLAGSHIP_ACCOUNT_ID,
      authToken: import.meta.env.VITE_FLAGSHIP_AUTH_TOKEN,
      prefetchFlags: ["enable-about-page"],
    }),
  );
  await OpenFeature.setContext(context);
  return OpenFeature.getClient();
};
