cmake_minimum_required(VERSION 3.24)

# Use C++17
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED true)

# CMake/ProjectOptions contains optional configuration for a SANITIZE build
include(${CMAKE_CURRENT_LIST_DIR}/CMake/ProjectOptions.cmake)

# This CMake file contains some defaults flags for the selected compiler
message("Using \"${EM_TOOLCHAIN}\"")
include(${CMAKE_CURRENT_LIST_DIR}/CMake/${EM_TOOLCHAIN}.cmake)

project(EM_CEF_App C CXX)
add_subdirectory(CEF_App)
