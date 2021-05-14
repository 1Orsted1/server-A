const app = require("./app");
const config = require("./config");

var PORT = process.env.port || config.port;
app.listen(PORT, () => {
  console.log(" #####  ####### ######  #     # ####### ######     ####### #     # #       ### #     # ####### ");
  console.log("#     # #       #     # #     # #       #     #    #     # ##    # #        #  ##    # # ");
  console.log("#       #       #     # #     # #       #     #    #     # # #   # #        #  # #   # # ");
  console.log(" #####  #####   ######  #     # #####   ######     #     # #  #  # #        #  #  #  # #####    ");
  console.log("      # #       #   #    #   #  #       #   #      #     # #   # # #        #  #   # # #       ");
  console.log("#     # #       #    #    # #   #       #    #     #     # #    ## #        #  #    ## #       ");
  console.log(" #####  ####### #     #    #    ####### #     #    ####### #     # ####### ### #     # ####### ");
  console.log(`${config.url}/api/${config.apiVerion}`);
});
