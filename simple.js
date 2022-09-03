import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

const port = Deno.args[1] || 7001;
const hostname = "[::]"; // for IPv6
//const hostname = "localhost"; // for IPv4
const addr = hostname + ":" + port;
console.log(`http://${addr}`)

serve(async (req) => {
  try {
    console.log(req);
    const { pathname } = new URL(req.url);
    console.log(req, pathname);
    
    if (req.method == "OPTIONS") {
      return new Response(null, {
        status: 204,
        statusText: "No Content",
        headers: [
          ["Allow", "OPTIONS, GET, HEAD, POST"],
          ["Access-Control-Allow-Origin", "*"],
          ["Access-Control-Allow-Headers", "Content-Type"],
        ],
      });
    }
    const b = req.method == "POST" ? new Uint8Array(await req.arrayBuffer()) : null;
    console.log(b);
    
    const body = b ? b : new TextEncoder().encode("ok");
    return new Response(b, {
      status: 200,
      statusText: "ok",
      headers: [
        ["Access-Control-Allow-Origin", "*"],
        ["Content-Length", b.length],
        ["Content-Type", "application/octet-stream"],
      ],
    });
  } catch (e) {
    console.log(e);
  }
}, { addr });
