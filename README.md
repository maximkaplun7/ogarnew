# MultiOgarII
MultiOgarII is a FOSS agar.io server implementation that is based upon the [work done](https://github.com/Barbosik/MultiOgar) by [Barbosik](https://github.com/Barbosik/).

## Quick Start
Before the server can be used you need to install [NodeJS](https://nodejs.org/en/) (LTS version) onto your machine. Instructions for which are available on the NodeJS website linked above.

Once this is done, the server can be ran by executing the following commands in a `Linux` terminal or a `Windows Command Prompt`. This is assuming that you're in the project directory.

```BASH
# install modules
$ npm i

# start server
$ npm run start:server

# start client
$ npm run start:client
```

### Questions / Modifications
If you have a question about how to add a feature, or how to change a behavior of the game, ask for help on the [Agar.io Private Servers Discord](https://discord.gg/XcKgShT)
Do not create a GitHub issue for a question.

### Commands
Once started, the server's functionality can be altered via the use of commands. These commands can be listed, and documented, by running `help`. The command line interface allows for the generation of aliases, which shorten a command - these can be generated by running `aliases`. This command shortens all of the available commands into short abreviation/ For example, the command `killall` is shortened down to `kl` - where the last characters form the alias.

### Gamemodes
The server offers a small set of gamemodes, these include:
- Free For All
- Experimental
- Teams
- Rainbow

All the gamemodes are standard, aside from rainbow.

## Protocols
This server implementation supports the majority of the early Agar protocols. This includes protocols ranging from `v4` to around `v11`. This means that clients running protocols outside of that range *may malfunction or not work at all.* It is suggested that you use a client such as [Cigar](https://github.com/Luka967/Cigar), or its [Cigar2](https://github.com/Cigar2/Cigar2) variant - both of these use protocol v6 and are compatible with the server.

## TLS
In order to use protocols such as HTTPS with a webocket connection you need to enable TLS. This is documented in [keys/README.md](./keys/README.md).

# Cigar2  
Protocol 6 Agar.io client for private servers

### Getting support | Discord server
If you need extra help with anything you should ask it in the [Agar.io Private Servers Discord](https://discord.gg/CfvdZZrCKE) and not in issues.

### Adding servers
Locate the select element in the index.html and add new entries, make sure to only have one option with `selected`

### [Recommended server, OgarII by Luka](https://github.com/Luka967/OgarII)

### Credits
- [Original Cigar](https://github.com/CigarProject/Cigar)
- [Luka's Cigar](https://github.com/Luka967/Cigar)

### Uploading skins
Upload your **PNG** files to the skins folder and run the updateSkinList file in the root directory, you can also do it manually by putting the skin names in `web/skinList.txt` separated by commas (no file extension).

### Todos
Check out [issue 1](https://github.com/Cigar2/Cigar2/issues/1)