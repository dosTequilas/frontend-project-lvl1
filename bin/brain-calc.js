#!/usr/bin/env node

import calculate from '../games/calc.js';
import { gameDescription } from '../games/calc.js';
import engine from '../src/index.js';

engine(gameDescription, calculate);
