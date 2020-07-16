# Commandline Processor

In the node world I used shelljs - now I use this module.

## Usage example for your code

```

import { CommandLineProcessor } from "./commandline-processor.ts"

const commandToBeExecuted = 'deno -V'

console.log(await CommandLineProcessor.process(commandToBeExecuted))

```

## Call it via command line
```
deno run --allow-run https://raw.githubusercontent.com/michael-spengler/commandline_processor/master/test-it.ts
<!-- deno run --allow-net https://deno.land/x/commandline_processor/test-it.ts -->
```

## Execute the tests
```
deno test --reload --allow-net --allow-run test.ts
``` 