import { getClient } from "#/utils/flags";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user/$userId")({
  loader: {
    handler: async ({ params }) => {
      const flagClient = getClient({ userId: params.userId });
      return flagClient;
    },
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = Route.useParams();
  const flagClient = Route.useLoaderData();

  const enableAboutPage = flagClient.getBooleanValue("enable-about-page", false);

  if (!enableAboutPage) {
    return <div>{userId} さんのトップページ</div>;
  }

  return (
    <div>
      {userId} さんのトップページ <a href={`/user/${userId}/about`}>Aboutページへ</a>
    </div>
  );
}
