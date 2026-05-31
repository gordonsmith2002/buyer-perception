#!/bin/sh
# Stop runaway Next/Node processes that slow the Mac after a stuck dev session.
echo "Stopping Next dev/build processes on ports 3000 and 3001..."
lsof -ti:3000 2>/dev/null | xargs kill -9 2>/dev/null || true
lsof -ti:3001 2>/dev/null | xargs kill -9 2>/dev/null || true
pkill -f "next dev" 2>/dev/null || true
pkill -f "next build" 2>/dev/null || true
echo "Done. If the Mac is still slow, quit Terminal and run: killall node"
echo "(Only do killall node if you have no other Node apps open.)"
