#!/usr/bin/env node

import calculate from '../games/progression.js';
import { gameDescription } from '../games/progression.js';
import engine from '../src/index.js';

engine(gameDescription, calculate);
