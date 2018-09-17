# Web Assembly PlayGround
> Web assembly playground with nodejs and c++, as compiler we are using http://kripken.github.io/emscripten-site/index.html

## Installation instructions Linux

### First dependecy on machine

```
# Install Python
sudo apt-get install python2.7

# Install node.js
sudo apt-get install nodejs

# Install CMake (optional, only needed for tests and building Binaryen)
sudo apt-get install cmake

# Install Java (optional, only needed for Closure Compiler minification)
sudo apt-get install default-jre
```

### Install emsdk

```
# Get the emsdk repo
git clone https://github.com/juj/emsdk.git

# Enter that directory
cd emsdk

# Fetch the latest version of the emsdk (not needed the first time you clone)
git pull

# Download and install the latest SDK tools.
./emsdk install latest

# Make the "latest" SDK "active" for the current user. (writes ~/.emscripten file)
./emsdk activate latest

# Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh
```

### Running Emscripten

First, lets have a look at the file to be compiled: hello_world.c. This is the simplest test code in the SDK, and as you can see, all it does is print “hello, world!” to the console and then exit.

```
#include <stdio.h>

int main() {
  printf("hello, world!\n");
  return 0;
}
```

To build the JavaScript version of this code, simply specify the C/C++ file after emcc (use em++ to force compilation as C++):

```
./emcc tests/hello_world.c
```

You should see two files generated by that command: a.out.js and a.out.wasm. The second is a WebAssembly file containing the compiled code, and the first is a JavaScript file containing the runtime support to load and execute it. You can run them using node.js:

```
node a.out.js
```

### Set emsdk path enviroment

If you have a `.bashrc` file, edit this file using vim

```
vi .bashrc
```

Copy everything you have on `~/emsdk/emsdk_set_env.sh` into the end of your `.bashrc` file. To edit used `i` Once you are done press `esc` and `:wq` to saved file `.bashrc`

Test by typing:

```
emcc -v
```