add_compile_options(-Wno-format-nonliteral)
add_compile_options($<$<COMPILE_LANGUAGE:C>:-Wno-missing-prototypes>)

add_compile_options(-fdiagnostics-color=always)
add_compile_options(-fms-extensions)
