#!/bin/bash

for f in `find _site -type f -name "*.html"`; do
    sudo mv -- "$f" "${f%.*}"
done

sudo mv _site/index _site/index.html
sudo mv _site/admin/index _site/admin/index.html
