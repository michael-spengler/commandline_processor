# Commandline Processor

In the node world I used shelljs - now I use this module.

## Usage example for your code

```

import { CommandLineProcessor } from "https://raw.githubusercontent.com/michael-spengler/commandline_processor/master/commandline-processor.ts"

const commandToBeExecuted = 'deno -V'

console.log(await CommandLineProcessor.process(commandToBeExecuted))

```

## Call usage example via command line
```
deno run --allow-run https://raw.githubusercontent.com/michael-spengler/commandline_processor/master/usage-example.ts
<!-- deno run --allow-net https://deno.land/x/commandline_processor/usage-example.ts -->
```

## Execute the tests
```

deno test --reload --allow-net --allow-run https://raw.githubusercontent.com/michael-spengler/commandline_processor/master/test.ts
<!-- deno test --reload --allow-net --allow-run https://raw.githubusercontent.com/michael-spengler/commandline_processor/master/test.ts -->

``` 