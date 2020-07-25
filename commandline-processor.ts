

export class CommandLineProcessor {

	public static async process(cmd: string) {
		let opts: Deno.RunOptions

		console.log(`\nexecuting command: ${cmd} \nin folder: ${Deno.cwd()} `)
		opts = {
			cmd: cmd.split(' ')
		}

		opts.stdout = 'piped'
		opts.stderr = 'piped'

		const process = Deno.run(opts)
		const decoder = new TextDecoder()
		const success = (await process.status()).success

		if (!success) {
			const msg = CommandLineProcessor.removeTrailingLineBreak(decoder.decode(await process.stderrOutput()))

			process.close()

			throw new Error(msg || 'exec: failed to execute command')
		}

		return CommandLineProcessor.removeTrailingLineBreak(decoder.decode(await process.output()))
	}


	private static removeTrailingLineBreak(str: string) {
		return str.replace(/\n$/, '')
	}

}
