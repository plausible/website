#!/bin/bash

for f in `find /github/workspace/_site -type f -name "*.html"`; do
    mv -- "$f" "${f%.*}"
done

mv /github/workspace/_site/index /github/workspace/_site/index.html
mv /github/workspace/_site/admin/index /github/workspace/_site/admin/index.html
