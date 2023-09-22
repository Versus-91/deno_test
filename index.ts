// const res = await fetch("https://deno.com");
// const body = await res.text();

import { multiply } from './utils.ts';

// console.log(body);
console.log('%cHello World' + multiply(15, 8), 'color: red');
function handler(_req: Request): Response {
  return new Response('Hello, World!');
}
Deno.serve(handler);
