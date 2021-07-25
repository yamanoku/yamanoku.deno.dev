/* @jsx h */
import {
  h,
  renderHTML,
} from "https://denopkg.com/syumai/deno-libs/jsx/renderer.ts";

const Body = () => (
  <body>
    <main>
      <h1>yamanoku.deno.dev</h1>
      <a href="https://github.com/yamanoku/yamanoku.deno.dev" target="_blank" rel="noopener">GitHub Source</a>
    </main>
  </body>
);

const html = (
  <html>
    <head>
      <title>yamanoku.deno.dev</title>
      <link rel="stylesheet" href="https://unpkg.com/yama-normalize@1.2.0/yama-normalize.css" />
    </head>
    <Body />
  </html>
);

interface Responder {
  respondWith(res: Response): void;
}

addEventListener("fetch", (event) => {
  const e = (event as unknown) as Responder;
  e.respondWith(
    new Response(renderHTML(html), {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/html",
      },
    })
  );
});
