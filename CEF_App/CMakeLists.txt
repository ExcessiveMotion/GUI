set(COMPONENT_NAME CEF_App)

file(GLOB_RECURSE sources CONFIGURE_DEPENDS  "src/*.cpp")
set_source_files_properties(${sources} PROPERTIES LANGUAGE CXX)

add_executable(${COMPONENT_NAME} ${sources})

set_property(TARGET ${COMPONENT_NAME} PROPERTY CXX_STANDARD 17)
set_property(TARGET ${COMPONENT_NAME} PROPERTY CXX_STANDARD_REQUIRED ON)
set_property(TARGET ${COMPONENT_NAME} PROPERTY CXX_EXTENSIONS ON)

target_include_directories(${COMPONENT_NAME} PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/src)

target_link_libraries(${COMPONENT_NAME} PUBLIC ProjectOptions)

# target_precompile_headers(
#     ${COMPONENT_NAME}
#     PUBLIC
# )

if(NOT WIN32)
    add_custom_command(
        TARGET ${COMPONENT_NAME} POST_BUILD
        COMMAND ln -s ${CMAKE_BINARY_DIR}/CEF_App/CEF_App ${CMAKE_BINARY_DIR}/../
    )
endif()