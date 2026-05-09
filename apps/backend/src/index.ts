import { Hono } from "hono";

const app = new Hono<{
  Bindings: Bindings;
}>();

app.get("/api/user/:userId/about", async (c) => {
  const userId = c.req.param("userId");

  const enableAboutPage = await c.env.FLAGS.getBooleanValue("enable-about-page", false, {
    userId: userId,
  });

  if (!enableAboutPage) {
    return c.notFound();
  }

  return c.json({
    title: `${userId} の About`,
  });
});

export default app;
