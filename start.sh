#!/bin/bash

# Navigate to root of repository
cd "$(git rev-parse --show-toplevel)" || exit

# Build frontend
cd frontend
npm run build

# Remove existing build directory in backend if it exists
rm -rf ../backend/build

# Move build directory to backend
mv build ../backend/

# Start Flask server
cd ../backend
python3 -m flask run --host 0.0.0.0
