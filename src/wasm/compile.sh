#for filename in ./src/wasm/*.c;
for filename in ./*.c;
do
    echo "Compiling $filename"
    emcc -s WASM=1 --emrun -03 $filename
done