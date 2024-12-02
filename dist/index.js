
//#region package.json
var type = "module";
var devDependencies = { "tsdown": "^0.3.1" };
var scripts = { "build": "tsdown index.ts" };
var bin = "./dist/index.js";
var pnpm = { "overrides": { "rolldown": "nightly" } };
var packageManager = "pnpm@9.14.4+sha512.c8180b3fbe4e4bca02c94234717896b5529740a6cbadf19fa78254270403ea2f27d4e1d46a08a0f56c89b63dc8ebfd3ee53326da720273794e6200fcf0d184ab";
var package_default = {
	type,
	devDependencies,
	scripts,
	bin,
	pnpm,
	packageManager
};

//#endregion
//#region index.ts
console.log(package_default.packageManager);

//#endregion