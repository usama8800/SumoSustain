# SumoSustain

A plugin for the [SumoSelect](https://github.com/HemantNegi/jquery.sumoselect) plugin for JQuery that sustains the selected elements through cookies. 

## How to Use
Download the sumosustain.js or sumosustain.min.js file and add the script after adding SumoSelect. 

Use after &nbsp;`$(selector).SumoSelect();`  
as &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `$(selector).SumoSustain();`  
or &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `$(selector).SumorSustain(options);`  
  
 `options` object has one attribute:  
 * `clearDefaults`: takes an integer value 0, 1 or 2  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0: always selects defaults  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1: selects defaults only if nothing was selected  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2: never selects defaults  
 
_The cookies use the `name` or `id` attribute of the select element so make sure there is one._
