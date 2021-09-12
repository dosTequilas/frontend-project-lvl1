#!/usr/bin/env node
// import { name } from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the brain games!');
const name = readlineSync.question('May I have your name?');

console.log(`Hello, ${name}`);
