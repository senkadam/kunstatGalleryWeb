#!/bin/bash
FILES=*

for f in $FILES
do
echo "<div class=\"brick\"><a data-fancybox=\"gallery\" rel=\"group1\" href=\"../images/horkeplechy/$f\"><img class=\"gallery-img\" src=\"../images/horkeplechy/t/$f\"alt=\"\"></a></div>"
done


