#!/bin/bash

for f in `find _site -type f -name "*.html"`; do
    mv -- "$f" "${f%.*}"
done

mv _site/index _site/index.html
mv _site/admin/index _site/admin/index.html
