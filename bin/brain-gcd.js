#!/usr/bin/env node

import calculate from '../games/gcd.js';
import { gameDescription } from '../games/gcd.js';
import engine from '../src/index.js';

engine(gameDescription, calculate);
