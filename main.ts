import { Command } from "@cliffy/command";

export const testCommand = new Command()
  .name("command")
  .description("Command description.")
  .command("subcommand")
  .description("Subcommand description.")
  .action(async () => {
    try {
      await fetch("...")
    } catch (e) {
      console.log(e)
      Deno.exit(1);
    }
  });