#!/bin/env node

var exec = require('child_process').execSync
var utils = require('../src/utils.js')
var log = utils.log


var currentVersion = utils.getCurrentVersion()
var args = utils.parseArgs()
var bundle = args.bundle
var version = args.version || 'prerelease'
var message = args.message
var numericVersion

if (!bundle) utils.error('No bundle path give.')

function runNPMVersion () {
	cmd = 'npm version '
		+ version
		+ (message ? ' -m ' + message : '')
		+ (version === 'prerelease' ? '' : ' --no-git-tag-version')
	numericVersion = exec(cmd).toString('utf8').substr(1)
	log('Using version number:', numericVersion) }

function runHyperbootRelease () {
	cmd = 'hyperboot release '
		+ bundle
		+ ' -v ' + numericVersion
		+ (message ? ' -m ' + message : '')
	var stdout = exec(cmd).toString('utf8')
	log(stdout) }

function run () {
	runNPMVersion()
	runHyperbootRelease() }


run()
