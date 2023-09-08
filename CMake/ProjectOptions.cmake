add_library(ProjectOptions INTERFACE)

if(EM_SANITIZE)
    message("Enable sanitizers")

    if("${EM_TOOLCHAIN}" MATCHES ".*Clang.*" OR "${EM_TOOLCHAIN}" STREQUAL "GCC")
        target_compile_options(ProjectOptions INTERFACE -fsanitize=address,undefined -fno-omit-frame-pointer -fno-common)
        target_link_options(ProjectOptions INTERFACE -fsanitize=address,undefined)
    else()
        message(WARNING "Sanitize not available for [${EM_TOOLCHAIN}]")
    endif()
endif()
