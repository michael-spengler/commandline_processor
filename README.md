# Commandline Processor

In the node world I used shelljs - now I use this module.

## Usage example for your code

```
  
   
import { CommandLineProcessor } from "https://deno.land/x/commandline_processor/commandline-processor.ts"

const commandToBeExecuted = 'deno -V'

console.log(await CommandLineProcessor.process(commandToBeExecuted))
  
   
```

## Call usage example via command line
```
  
   
deno run --allow-net --allow-run --allow-read https://deno.land/x/commandline_processor/usage-example.ts
  
   
```

## Execute the tests
```
  
   
deno test --reload --allow-net --allow-run --allow-read https://deno.land/x/commandline_processor/test.ts
  
   
``` 

## Support my Open Source Contributions  

If you like my work please consider downloading the brave browser via my promotion link: [https://brave.com/fan464](https://brave.com/fan464).  

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)
