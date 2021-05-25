const app = require("./app");
const config = require("./config");

var PORT = process.env.port || config.port;
app.listen(PORT, () => {
  // console.log(" #####  ####### ######  #     # ####### ######     ####### #     # #       ### #     # ####### ");
  // console.log("#     # #       #     # #     # #       #     #    #     # ##    # #        #  ##    # # ");
  // console.log("#       #       #     # #     # #       #     #    #     # # #   # #        #  # #   # # ");
  // console.log(" #####  #####   ######  #     # #####   ######     #     # #  #  # #        #  #  #  # #####    ");
  // console.log("      # #       #   #    #   #  #       #   #      #     # #   # # #        #  #   # # #       ");
  // console.log("#     # #       #    #    # #   #       #    #     #     # #    ## #        #  #    ## #       ");
  // console.log(" #####  ####### #     #    #    ####### #     #    ####### #     # ####### ### #     # ####### ");
  console.log(" __ _ _      _ _   _       ___     _ ");
  console.log("(_ |_|_)\\  /|_|_) / \\|\\ ||  | |\\ ||_ ");
  console.log("__)|_| \\ \\/ |_| \\ \\_/| \\||__|_| \\||_ ");
  console.log("                                     ");
  console.log(`${config.url}/api/${config.apiVerion}`);
});
