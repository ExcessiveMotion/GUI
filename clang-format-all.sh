#!/bin/bash

THIS_PATH="$(realpath "$0")"
THIS_DIR="$(dirname "$THIS_PATH")/CEF_App/src/"

shopt -s globstar # enables **
shopt -s nullglob # a non-matching glob expands to nothing rather than erroring
clang-format -i --style=file --Werror "$THIS_DIR"/**/*.cpp "$THIS_DIR"/**/*.hpp $@
