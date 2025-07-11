#!/bin/bash

echo "Running install.sh..."

# Clean the old site content
rm -rf /var/www/html/*

# Create directory if not exists
mkdir -p /var/www/html

echo "install.sh completed."