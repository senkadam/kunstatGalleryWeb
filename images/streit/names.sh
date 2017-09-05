#!/bin/bash
FILES=./t/*

for f in $FILES
do
echo "<div class=\"brick\"><a data-fancybox=\"gallery\" rel=\"group1\" href=\"../images/streit/$f\"><img class=\"gallery-img\" src=\"../images/streit/t/$f\"alt=\"\"></a></div>"
done


