
import { CommandLineProcessor } from "./commandline-processor.ts"

const commandToBeExecuted = 'deno -V'

console.log(await CommandLineProcessor.process(commandToBeExecuted))
