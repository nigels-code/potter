import { Context } from "netlify:edge";

export default (_request: Request, context: Context) => {
  const GEOFENCE = ["GB"];
  const countryCode = context.geo?.country?.code || "GB";
  const countryName = context.geo?.country?.name || "Outside the UK";

  if (!GEOFENCE.includes(countryCode)) {
    return new Response(
      `We're sorry, you can't access our content from ${countryName}`,
      {
        headers: { "content-type": "text/html" },
        status: 451,
      }
    );
  }
};
