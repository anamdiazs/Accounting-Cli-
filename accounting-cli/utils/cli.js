const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	sort: {
		type: `string`,
		default: `date`,
		alias: `s`,
		desc: `Sort transactions by date`,
	},
	priceDb: {
		type: `string`,
		alias: `p`,
		desc: `Unifies the currency`,
	},
	file: {
		type: `boolean`,
		alias: `f`,
		default: true,
		desc: `Specifies the route of the file`,
	},

};

const commands = {
	help: { 
		desc: `Print help info` 
	},
	register: {
		desc: `Display all transactions`,
	},
	balance: {
		desc: `Display all the balance`,
	},
	print: {
		type: `string`,
		desc: `Display all the balance`,
	},
};

const helpText = meowHelp({
	name: `accounting-cli`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
