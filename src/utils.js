// Some logic taken from `npm-release` (MIT) by Tom Ashworth
// https://github.com/phuu/npm-release

var fs = require('fs')
var path = require('path')
var spawn = require('child_process').spawn
var exec = require('child_process').exec
var argv = require('optimist').argv
var colors = require('colors')


function exit (str) {	
  console.log([].slice.call(arguments).join(' ').red)
  process.exit(-1) }
  
var error = exit.bind(null, 'Error:')

function getPkg () {
  var pkg
  try {
    pkg = JSON.parse(fs.readFileSync(
    	path.resolve(process.cwd(), './package.json')) ) }
  catch(e) {
    error('Could not open a package.json.') }
  return pkg }

function getCurrentVersion () {
	var version = getPkg().version
	if (!version)
		error('No version in package.json found.')
  return version }

function log () {
  console.log([].slice.call(arguments).join(' ').blue) }

function parseArgs () {
	var args = {}
	args.bundle = process.argv[2]
	args.version = argv.v || argv.version
	args.message = argv.m || argv.message
	if (!args.version) {
		log('No version supplied. Defaulting to `prerelease`.')
		args.version = 'prerelease' }
	return args }


module.exports = {
	error: error,
	exit: exit,
	getCurrentVersion: getCurrentVersion,
	log: log,
	parseArgs: parseArgs }
