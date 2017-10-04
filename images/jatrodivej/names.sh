#!/bin/bash
FILES=./t/*

for f in $FILES
do
echo "<div class=\"brick\"><a data-fancybox=\"gallery\" rel=\"group1\" href=\"../images/jatrodivej/$f\"><img class=\"gallery-img\" src=\"../images/jatrodivej/t/$f\"alt=\"\"></a></div>"
done


