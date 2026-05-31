#!/bin/sh
# Production preview: one build, one server process. No Turbopack, no dev watchers.
cd "$(dirname "$0")/.."

unset MallocStackLogging MallocStackLoggingNoCompact MallocScribble 2>/dev/null || true
export MallocStackLogging=
export MallocStackLoggingNoCompact=

echo "Building (first time may take 1-2 minutes)..."
npm run build

echo ""
echo "Starting server at http://127.0.0.1:3000"
echo "Press Ctrl+C to stop."
exec npx next start -H 127.0.0.1 -p 3000
