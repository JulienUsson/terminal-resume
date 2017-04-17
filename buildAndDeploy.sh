#!/bin/bash
npm run build
git add dist
git commit -m "Build"
git push
git subtree push --prefix dist origin gh-pages