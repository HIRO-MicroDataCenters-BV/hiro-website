#!/bin/bash

# Check if the input directory is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <input_directory>"
  exit 1
fi

# Input directory
input_directory="$1"

# Output directory
output_directory="${input_directory}_converted"

# Ensure the output directory exists
mkdir -p "$output_directory"

# Extract folder name
folder_name=$(basename "$input_directory")

# Counter for numbering files
counter=1

# Loop over all video files in the input directory
for input_file in "$input_directory"/*; do
  if [[ -f "$input_file" ]]; then
    # Set the output file name and path
    output_file="$output_directory/${folder_name}_$counter.mp4"

    # Convert the video to 240p H.264 format, mute it, and use 6 CPU threads
    ffmpeg -i "$input_file" -vf "scale=trunc(oh*a/2)*2:240" -threads 6 -c:v libx264 -crf 30 -preset slow -an "$output_file"

    # Increment the counter
    counter=$((counter + 1))
  fi
done

echo "Conversion completed!"

