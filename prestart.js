#!/usr/bin/env node
"use strict";var _a,_b;exports.__esModule=!0;var fs_1=require("fs"),child_process_1=require("child_process");if(!fs_1.default.existsSync("./node_modules")){var child=(0,child_process_1.spawn)("npm",["install","--color=always"],{stdio:"pipe"});null===(_a=child.stdout)||void 0===_a||_a.pipe(process.stdout),null===(_b=child.stderr)||void 0===_b||_b.pipe(process.stderr)}