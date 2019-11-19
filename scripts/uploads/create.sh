#!/bin/bash

API="http://localhost:4741"
URL_PATH="/uploads"

curl "${API}${URL_PATH}" \
  --include \
  --header "Authorization: Bearer ${TOKEN}" \
  --form "image=@/Users/charles/wdi/projects/fileUpLoad/express-app-practice/data/images/padawan.png" \
  --form title="${TITLE}" \
  --form url="${URL}" \
echo
