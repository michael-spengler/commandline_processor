
import { CommandLineProcessor } from "https://deno.land/x/commandline_processor/commandline-processor.ts"

const commandToBeExecuted = 'deno -V'

console.log(await CommandLineProcessor.process(commandToBeExecuted))
