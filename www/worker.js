// Sends www.threedamnfingers.com to threedamnfingers.com, with the same path and query.
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = "threedamnfingers.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  },
};
