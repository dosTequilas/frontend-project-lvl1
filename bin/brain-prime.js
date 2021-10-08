#!/usr/bin/env node

import calculate from '../games/prime.js';
import { gameDescription } from '../games/prime.js';
import engine from '../src/index.js';

engine(gameDescription, calculate);
