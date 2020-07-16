import { assertStringContains } from "https://deno.land/std/testing/asserts.ts";

import { CommandLineProcessor } from "https://raw.githubusercontent.com/michael-spengler/commandline_processor/master/commandline-processor.ts"

Deno.test("Assert deno is there :)", async (): Promise<void> => {
    const actualResult = await CommandLineProcessor.process('deno -V')
    console.log(actualResult)
    assertStringContains(actualResult, 'deno');
    await Deno.close(4)
    await Deno.close(5)
});

