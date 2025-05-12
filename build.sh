#!/bin/bash

npm install --force

npm run build

npm publish --access public .
