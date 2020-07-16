
import { CommandLineProcessor } from "https://raw.githubusercontent.com/michael-spengler/commandline_processor/master/commandline-processor.ts"

const commandToBeExecuted = 'deno -V'

console.log(await CommandLineProcessor.process(commandToBeExecuted))
