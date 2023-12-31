set(COMPONENT_NAME CEF_App)

# List of source files to compile
set(sources
    "src/main.cpp"
)
set_source_files_properties(${sources} PROPERTIES LANGUAGE CXX)

add_executable(${COMPONENT_NAME} ${sources})

# Make sure all files are compiled as C++17
set_property(TARGET ${COMPONENT_NAME} PROPERTY CXX_STANDARD 17)
set_property(TARGET ${COMPONENT_NAME} PROPERTY CXX_STANDARD_REQUIRED ON)
set_property(TARGET ${COMPONENT_NAME} PROPERTY CXX_EXTENSIONS ON)

target_include_directories(${COMPONENT_NAME} PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/src)

# Link project options (only has effect when ProjectOptions enables SANITIZE function (or potentialls other functions))
target_link_libraries(${COMPONENT_NAME} PUBLIC ProjectOptions)

# target_precompile_headers(
#     ${COMPONENT_NAME}
#     PUBLIC
# )

if(NOT WIN32)
    # Create a shortcut to built executable in ./build for easier access (either in ./vscode/launch.json or just running from commandline)
    add_custom_command(
        TARGET ${COMPONENT_NAME} POST_BUILD
        COMMAND ln -s -f ${CMAKE_BINARY_DIR}/CEF_App/CEF_App ${CMAKE_BINARY_DIR}/../
    )
endif()