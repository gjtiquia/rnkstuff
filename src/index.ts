
main();

async function main(): Promise<Status> {
    console.log("rnkstuff")

    // const stdinSize = Bun.stdin.size
    // console.log(stdinSize)
    // if (isNaN(stdinSize) || !isFinite(stdinSize)) { // no input gives infinite stdin.size
    //     console.error("no input file detected! try doing something like `cat file.txt | bun start")
    //     return "ERROR";
    // }

    const inputFile = await Bun.stdin.text()

    console.log(inputFile)

    const stuffToRank = inputFile.split("\n")
    if (stuffToRank.length <= 0) {
        console.error("no input file detected! try doing something like `cat file.txt | bun start")
        return "ERROR";
    }

    console.log(stuffToRank)

    const firstName = prompt("what is your name?")

    console.log(`your name is ${firstName}`)

    const result = confirm("are you sure?")

    console.log(result)

    alert("yoooo this is an alert")
    return "OK"
}

type Status = "OK" | "ERROR"
