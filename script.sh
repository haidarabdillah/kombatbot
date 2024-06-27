#!/bin/bash

# Path to pm2

while true; do
    # Stop and start PM2
    pm2 restart all
    echo "$(date): Restart PM2 script is running..."
    # Sleep for 1 minute
    sleep 60
done
