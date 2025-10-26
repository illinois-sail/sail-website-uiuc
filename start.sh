#!/bin/bash

# Navigate to root of repository
cd "$(git rev-parse --show-toplevel)" || exit

# Remove existing build directory in backend if it exists
rm -rf backend/build

# Build frontend
cd frontend
npm run build

# Move build directory to backend
mv build ../backend/

# Start Flask server
cd ../backend
LOCAL_IP=$(python3 -c "import socket; s=socket.socket(socket.AF_INET, socket.SOCK_DGRAM); s.connect(('1.1.1.1', 80)); print(s.getsockname()[0]); s.close()")
export SERVER_URL="http://${LOCAL_IP}:5000"
echo "[INFO] Using SERVER_URL=$SERVER_URL"
python3 -m flask run --host 0.0.0.0
