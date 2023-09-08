cmake_minimum_required(VERSION 3.24)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED true)

include(${CMAKE_CURRENT_LIST_DIR}/CMake/ProjectOptions.cmake)

message("Using \"${EM_TOOLCHAIN}\"")
include(${CMAKE_CURRENT_LIST_DIR}/CMake/${EM_TOOLCHAIN}.cmake)

project(EM_CEF_App C CXX)
add_subdirectory(CEF_App)
