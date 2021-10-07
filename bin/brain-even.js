#!/usr/bin/env node

import getRandomNumber from '../games/even.js';
import { gameDescription } from '../games/even.js';
import engine from '../src/index.js';

engine(gameDescription, getRandomNumber);
