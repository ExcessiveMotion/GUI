# Excessive Motion GUI
This repository contains the default Excessive Motion UI frontend and a minimal CEF app for running the GUI on dedicated controller hardware.

---
### Project Structure
- TODO: this (Webpack, TypeScript, ...)

## Development
The **Frontend** and **CEF App** projects are set up to work from the root reporitory directory, so no directory changes are required to build/run both.

---
### Frontend [Webpack/TypeScript]
#### Build Requirements
- Node.js

Before starting, run ```npm update``` to download all of the development dependencies.
- Run ```npm run start``` to start a live development server
- Run ```npm run build``` to build the UI in development mode
- Run ```npm run dist``` to build the UI in production mode
> Build files are written to ```./build/frontend/```

---
### CEF App [CMake/C++]
#### Build Requirements
- [CMake](https://cmake.org/)
- [Ninja](https://ninja-build.org/) (Generator for CMake)
- ```GCC``` or ```Clang```

Right now only GCC and Clang builds are supported.\
```.vscode/launch.json``` contains a generic launch configuration for all build types.

##### CMake Configure
1. Select one of the configurations from CMakePresets.json
2. Run ```cmake --preset <preset_name>```

Available build presets:
- ```debug-linux-clang```
- ```release-linux-clang```
- ```debug-linux-gcc```
- ```release-linux-gcc```

>None of the configurations contain Linux specific settings, but the targer system is Linux, so "linux" is added to the configuration/build output path.

##### CMake Build
1. Run ```cmake --build ./build/<preset_name> --target all``` (optionally add the ```-j<n>``` flag, where ```<n>``` is the number of parallel build jobs)
2. The executable can be found in ```./build/<preset_name>/CEF_App``` and also a shortcut is made in the CMake post build step: ```./build/CEF_App```

>```./vscode/launch.json``` contains a launch configuration that runs and attaches to the ```./build/CEF_App``` shortcut.\
> Using VSCode it is possible to perform all of the configuration, build and debug steps with keyboard shortcuts and graphical preset selectors using the CMake and CMake Tools extensions.

