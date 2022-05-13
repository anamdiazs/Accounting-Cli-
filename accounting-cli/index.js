#!/usr/bin/env node

/**
 * accounting-cli
 * Accounting CLI
 *
 * @author Ana Diaz <https://beacons.ai/codingbyanna/>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const fs = require('fs');
const readline = require('readline');


const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {

	let inputFileData = ''

	const readInputFile = () => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		 });
		rl.question('Enter the file path: ', inputFile => {
			inputFileData = inputFile
			getFile()
		 });
		const getFile = () => {
		fs.readFile(`${inputFileData}`, 'utf8', (err, data) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log('----------------------------------------')
			console.log(data);
			console.log('----------------------------------------')
			if(input.includes(`register`)){
				const dataArr = []
				const dates = data.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/)

				dates.map(el => {
					const newDate = {}
					newDate['date'] = el
					dataArr.push(newDate)
				})
				console.log(dataArr)
			}
			
			});
		}
	}

	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	
	if(input.includes(`register`)){
		readInputFile()	
	} else if (input.includes(`balance`)){
		readInputFile()	
		
	} else if (input.includes(`print`)){
		readInputFile()	
	}

	debug && log(flags);
})();
