import { assertStringContains } from "https://deno.land/std/testing/asserts.ts";

import { CommandLineProcessor } from "https://deno.land/x/commandline_processor/commandline-processor.ts"

Deno.test("Assert deno is there :)", async (): Promise<void> => {
    const actualResult = await CommandLineProcessor.process('deno -V')
    console.log(actualResult)
    assertStringContains(actualResult, 'deno');
    await Deno.close(4)
    await Deno.close(5)
});

