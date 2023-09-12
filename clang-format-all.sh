#!/bin/bash

THIS_PATH="$(realpath "$0")"
THIS_DIR="$(dirname "$THIS_PATH")"/CEF_App/src/
FILE_LIST="$(find "$THIS_DIR" | grep -E ".*(\.cpp|\.hpp)$")"

clang-format -i --style=file --Werror $FILE_LIST