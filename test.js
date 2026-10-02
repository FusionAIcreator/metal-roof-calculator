// Run: node test.js
const assert = require('assert');
const { calculate, ftIn } = require('./calc.js');

const base = {
  roofType: 'gable', length: 40, width: 30, pitch: 4, overhangIn: 0,
  panelWidthIn: 36, wastePct: 10, screwsPerSquare: 80, screwsPerBox: 250,
  trimStickFt: 10, pricePanelLF: 3.5, priceFastenerBox: 45, priceTrimLF: 2.5,
};

// 40x30 gable, 4/12: run 15', factor 1.0541 -> 15.81' slope -> 190" panels
let r = calculate(base);
assert.strictEqual(r.panelLenIn, 190);
assert.strictEqual(r.panelsPerSide, 14);          // 480" / 36" = 13.33 -> 14
assert.strictEqual(r.panelsBase, 28);
assert.strictEqual(r.panels, 31);                  // 28 * 1.1 = 30.8 -> 31
assert.ok(Math.abs(r.squares - 12.649) < 0.01);    // 40 * 15.81 * 2 / 100
assert.strictEqual(r.ridgeLF, 40);
assert.strictEqual(r.eaveLF, 80);
assert.strictEqual(r.screws, Math.ceil(r.squares * 80 * 1.1));
assert.strictEqual(r.fastenerBoxes, Math.ceil(r.screws / 250));
assert.ok(Math.abs(r.total - (r.panelCost + r.fastenerCost + r.ridgeCost + r.trimCost)) < 1e-9);

// Flat-ish: 0 pitch -> slope = run
r = calculate({ ...base, pitch: 0 });
assert.strictEqual(r.panelLenIn, 180);

// Shed: one plane, no ridge, high-side trim instead
r = calculate({ ...base, roofType: 'shed', width: 15 });
assert.strictEqual(r.sides, 1);
assert.strictEqual(r.ridgeLF, 0);
assert.strictEqual(r.highSideLF, 40);
assert.strictEqual(r.panelLenIn, 190);

// Overhang adds to panel length
r = calculate({ ...base, overhangIn: 2 });
assert.strictEqual(r.panelLenIn, 192);

// 0% waste
r = calculate({ ...base, wastePct: 0 });
assert.strictEqual(r.panels, 28);

assert.strictEqual(ftIn(190), `15' 10"`);
assert.strictEqual(ftIn(180), `15'`);
console.log('All tests passed');
