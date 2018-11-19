cd ./dart
bash -c 'pub run dartvsnode' >/dev/null 2>/dev/null 
cd ../
cd ./dart_fw/aqueducttest
bash -c 'aqueduct serve' >/dev/null 2>/dev/null
cd ../../
cd ./node
bash -c 'node index.js' >/dev/null 2>/dev/null
