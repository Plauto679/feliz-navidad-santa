#!/bin/bash
set -euo pipefail

# Adjust this path if your Google Drive path differs
SRC_PATH="/Users/albertoalfaromendoza/Library/CloudStorage/GoogleDrive-alberto.alfaro@taiico.com/Mi unidad/Freelance/Feliz navidad de parte de santa/Felicidades.mp4"
DEST_DIR="$(pwd)"

if [ ! -f "$SRC_PATH" ]; then
  echo "Source video not found at: $SRC_PATH"
  echo "Please update setup_copy_video.sh with the correct path or copy the file manually into this folder as 'Felicidades.mp4'."
  exit 1
fi

cp "$SRC_PATH" "$DEST_DIR/Felicidades.mp4"
echo "Copied video to $DEST_DIR/Felicidades.mp4"
