#!/bin/bash
npm install && npm run build && cp nginx.conf dist/ && cp mime.types dist/ && cf push