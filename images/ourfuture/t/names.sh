#!/bin/bash
FILES=*

for f in $FILES
do
echo "<div class=\"brick\"><a data-fancybox=\"gallery\" rel=\"group1\" href=\"../images/ourfuture/$f\"><img class=\"gallery-img\" src=\"../images/ourfuture/t/$f\"alt=\"\"></a></div>"
done


