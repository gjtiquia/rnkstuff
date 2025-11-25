import { resolve } from "path";

await main();

async function main() {

    console.log("rnkstuff")

    // validate user input
    const relativeFilePath = Bun.argv[2]
    if (!relativeFilePath) {
        console.error("no input file! try something like `bun start file.txt`")
        return;
    }

    // get stuffToRank
    const absoluteFilePath = resolve(relativeFilePath);
    const file = Bun.file(absoluteFilePath);
    const text = await file.text();
    const stuffToRank = text.split("\n").filter(x => x.length > 0)

    console.log("stuff to rank:", stuffToRank)

    // setup rank context and rank function
    const rankContext: RankContext = {
        input: stuffToRank,
        promptAsync: async (promptText: string) => {
            const response = globalThis.prompt(promptText);
            if (!response)
                return "";
            return response;
        },
    }

    const rankFunctionAsync: RankFunctionAsync = rankAsync;

    const rankedStuff = await rankFunctionAsync(rankContext);

    console.log("result:", rankedStuff);

    if (rankedStuff.length !== stuffToRank.length) {
        console.error(`rankedStuff.length (${rankedStuff.length}) is different from stuffToRank.length (${stuffToRank.length})!`)
        return;
    }

    for (const stuff of rankedStuff) {
        if (!stuffToRank.includes(stuff))
            console.error(`stuffToRank does not include "${stuff}" from rankedStuff!`);
    }

    for (const stuff of stuffToRank) {
        if (!rankedStuff.includes(stuff))
            console.error(`rankedStuff does not include "${stuff}" from stuffToRank!`);
    }
}

type RankFunctionAsync = (c: RankContext) => Promise<RankOutput>

type RankContext = {
    input: string[],
    promptAsync: (promptText: string) => Promise<string>,
}

type RankOutput = string[];

// ---------------------

async function rankAsync(c: RankContext): Promise<RankOutput> {
    return c.input
}




