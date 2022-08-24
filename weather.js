#!/usr/bin/env node

import { getAtgs } from './healpers/args.js';


const initCLI = () => {
    const args = getAtgs(process.argv);
    console.log(args)
}

initCLI();