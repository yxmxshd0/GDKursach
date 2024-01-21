#!/bin/bash

inlet=$(head -n 2 /home/yote/OpenFOAM/yote-9/run/server/src/services/kursach2/Params.txt | tail -n 1);
outlet=$(head -n 5 /home/yote/OpenFOAM/yote-9/run/server/src/services/kursach2/Params.txt | tail -n 1);
parFromRightBlock=$(head -n 8 /home/yote/OpenFOAM/yote-9/run/server/src/services/kursach2/Params.txt | tail -n 1);

echo "inlet = $inlet";
echo "outlet = $outlet";
echo "parFromRightBlock = $parFromRightBlock";

#17,18,19
sed -i "17s/.*/inlet ${inlet};/;18s/.*/outlet ${outlet};/;19s/.*/parFromRightBlock ${parFromRightBlock};/;" /home/yote/OpenFOAM/yote-9/run/server/src/services/kursach2/system/blockMeshDict