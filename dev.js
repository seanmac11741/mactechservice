import { spawn } from 'bun';

// Watch and rebuild src/app.js on changes
spawn(['bun', 'build', 'src/app.js', '--outdir', './public', '--watch']);

// Serve static files from public/
const PORT = 3000;

Bun.serve({
    port: PORT,
    async fetch(req) {
        const url = new URL(req.url);
        const path = url.pathname === '/' ? '/index.html' : url.pathname;
        const file = Bun.file(`public${path}`);
        if (await file.exists()) {
            return new Response(file);
        }
        // SPA fallback to match firebase.json rewrite
        return new Response(Bun.file('public/index.html'));
    },
});

console.log(`Dev server running at http://localhost:${PORT}`);
