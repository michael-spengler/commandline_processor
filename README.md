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
deno run --allow-net --allow-run https://deno.land/x/commandline_processor/usage-example.ts
```

## Execute the tests
```

deno test --reload --allow-net --allow-run https://deno.land/x/commandline_processor/test.ts

``` 