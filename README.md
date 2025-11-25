# rnkstuff

## commands

```bash
# install dependencies
bun install

# run program
bun start
```

## TODOs

roadmap
- have a basic tournament sort done in CLI (at least fit my own use case first lol)
- abstract the algo such that we can choose sorting algorithms
- abstract the logic such that we can use the same algos on a website
- think about how to implement leaderboard
- buy domain rnkstuff.com and host it
- uhhhh "tell the world about it?"

other things to do
- see other "code submission" websites and competitions and see how they implement it, learn from them

random stuff
- `curl -fsSL rnkstuff.com/run.sh | bash` for running it...? or probably should be `run.ts | bun` instead....????? or `run.sh` downloads a `bun` binary to run it LMAO
- what if we allow different programming languages too other than JS/TS? like Python? or even Lua? how do we run these programs on the web? WASM interpreters? what about the others like C/C++/C#/Java/Go/Rust and more? maybe an easy way for people to contribute their own...?

## scratch pad

rank random stuff

also receiving PRs for sorting algos

what could be so meta would be if the we use the submitted sorting algos to rank the best algo haha

the "best" algo should be the most pragmatic, as in, able to help the user "rank stuff" in the least amount of "moves" -> quickest

an interesting experiment, since "sorting algos" in the dev world are often in an "interview" context, and in time complexity context, and putting in a "large is it scalable" context. 

but in here, we "lock down" the "environment". users submit a list of stuff they want to rank. the "user" IS the compare function. hence, the number of stuff that users would want to rank is limited to the patience of the user. ie. lets say the user wants to finish ranking in 30 seconds, say it takes 5 seconds per sort, thats only like 6 sorts max, and depending on the sorting algo that could be maybe at best... just throwing out a number here... 6 items? at least in that ballpark. so the sorting algo needs to be MAXXED for small subset of items and user-friendliness. 

since we are so focused on being pragmatic here, we also need to consider the case where... some items are... inherently cyclic in nature. i love bulbasaur more than charmander, i love charmander more than squirtle, but i can also love squirtle more than bulbasaur (heck no bulba is the best but this is just for demonstration purposes, sorry bulba)

so... that would definitely put tournament sort at the "bottom", but only if there exists a "cyclic ranking" in the list... and does "cyclic ranking" actually often exists in the "real world"?

anyways, build it first hahahahaha




