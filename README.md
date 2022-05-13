# Accounting-Cli-

The Accounting CLI is designed to read input files and support commands and flags 

The supported flags are:

 $ accounting-cli <command> [option]

   COMMANDS

  help      Print help info
  register  Display all transactions
  balance   Display all the balance
  print     Display all the balance

   OPTIONS

  -c, --clear    Clear the console Default: true
  --noClear      Don't clear the console Default: false
  -d, --debug    Print debug info Default: false
  -v, --version  Print CLI version Default: false
  -s, --sort     Sort transactions by date Default: date
  -p, --priceDb  Unifies the currency Default: date
  -f, --file     Specifies the route of the file Default: true

To start de CLI you need to be on the root folder of the project and run de index file ./index.js 
next to it you need to run the command. 

Example: ./index.js register

press enter and you would be asked to introduces the route of the file 

Example: Enter the file path: /Users/ana.diaz/Downloads/OneDrive_1_12-5-2022/Bitcoin.ledger

IMPORTANT you have to write the path exactly as It is, no spaces are allowed
