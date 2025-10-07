#!/bin/bash
set -e
for d in services/service*; do
  echo "Building $d"
  cd $d
  TAG=${PWD##*/}-local
  docker build -t ${TAG} .
  cd - >/dev/null
done
echo "Done"
