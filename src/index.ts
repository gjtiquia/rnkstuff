import { resolve } from "path";

await main();

async function main() {
    console.log("rnkstuff")

    const relativeFilePath = Bun.argv[2]
    if (!relativeFilePath) {
        console.error("no input file! try something like `bun start file.txt`")
        return;
    }

    const absoluteFilePath = resolve(relativeFilePath);
    const file = Bun.file(absoluteFilePath);
    const text = await file.text();
    const stuffToRank = text.split("\n").filter(x => x.length > 0)

    console.log("stuff to rank:", stuffToRank)

    const rankContext: RankContext = new CLIRankUtil(stuffToRank);
    const rankFunctionAsync: RankFunctionAsync = rankAsync;

    const rankedStuff = await rankFunctionAsync(rankContext);

    console.log("result:", rankedStuff);
}

type RankFunctionAsync = (c: RankContext) => Promise<RankOutput>

type RankContext = {
    input: string[],
    promptAsync: (promptText: string) => Promise<string>,
}

type RankOutput = string[];

class CLIRankUtil implements RankContext {
    public input: string[];

    constructor(input: string[]) {
        this.input = input;
    }

    public async promptAsync(promptText: string): Promise<string> {
        const response = globalThis.prompt(promptText);
        if (!response)
            return "";

        return response;
    }

}

// ---------------------

async function rankAsync(c: RankContext): Promise<RankOutput> {
    const response = await c.promptAsync("what do you think about flowers");
    return response.split(" ");
}




