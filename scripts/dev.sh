#!/bin/sh
cd "$(dirname "$0")/.."

unset MallocStackLogging MallocStackLoggingNoCompact MallocScribble 2>/dev/null || true

exec npx next dev --webpack "$@"
