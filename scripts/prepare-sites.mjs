import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const serverDirectory = fileURLToPath(new URL('../dist/server/', import.meta.url));
const workerPath = fileURLToPath(new URL('../dist/server/index.js', import.meta.url));

const worker = `const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404 || request.method !== "GET") {
      return response;
    }

    const url = new URL(request.url);
    const lastSegment = url.pathname.split("/").pop() ?? "";

    if (lastSegment.includes(".")) {
      return response;
    }

    return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
  },
};

export default worker;
`;

await mkdir(serverDirectory, { recursive: true });
await writeFile(workerPath, worker, 'utf8');
