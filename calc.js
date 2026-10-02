// Metal roof material math. Pure function, no DOM — used by index.html and test.js.
(function (root) {
  function calculate(i) {
    const sides = i.roofType === 'shed' ? 1 : 2;
    const waste = (i.wastePct || 0) / 100;
    const pitchFactor = Math.sqrt(1 + Math.pow(i.pitch / 12, 2));

    // Run of one roof plane (eave to ridge, horizontal), then slope length + overhang
    const run = i.roofType === 'shed' ? i.width : i.width / 2;
    const slopeFt = run * pitchFactor + (i.overhangIn || 0) / 12;
    const panelLenIn = Math.ceil(slopeFt * 12);           // order to the next full inch
    const panelLenFt = panelLenIn / 12;

    // Panels
    const panelsPerSide = Math.ceil((i.length * 12) / i.panelWidthIn);
    const panelsBase = panelsPerSide * sides;
    const panels = Math.ceil(panelsBase * (1 + waste));
    const panelLF = panels * panelLenFt;

    // Area / squares (actual roof surface, no waste)
    const areaSqFt = i.length * slopeFt * sides;
    const squares = areaSqFt / 100;

    // Fasteners
    const screws = Math.ceil(squares * i.screwsPerSquare * (1 + waste));
    const fastenerBoxes = Math.ceil(screws / i.screwsPerBox);

    // Ridge cap + trim (linear feet)
    const ridgeLF = i.roofType === 'shed' ? 0 : i.length;
    const eaveLF = i.length * sides;
    const rakeLF = slopeFt * sides * 2;                   // 2 rake edges per plane
    const highSideLF = i.roofType === 'shed' ? i.length : 0;
    const trimLF = eaveLF + rakeLF + highSideLF;
    const ridgeOrder = ridgeLF * (1 + waste);
    const trimOrder = trimLF * (1 + waste);
    const stick = i.trimStickFt || 10;
    const ridgePieces = Math.ceil(ridgeOrder / stick);
    const trimPieces = Math.ceil(trimOrder / stick);

    // Cost
    const panelCost = panelLF * i.pricePanelLF;
    const fastenerCost = fastenerBoxes * i.priceFastenerBox;
    const ridgeCost = ridgePieces * stick * i.priceTrimLF;
    const trimCost = trimPieces * stick * i.priceTrimLF;
    const total = panelCost + fastenerCost + ridgeCost + trimCost;

    return {
      sides, pitchFactor, slopeFt, panelLenIn, panelLenFt,
      panelsPerSide, panelsBase, panels, panelLF,
      areaSqFt, squares, screws, fastenerBoxes,
      ridgeLF, eaveLF, rakeLF, highSideLF, trimLF,
      ridgeOrder, trimOrder, ridgePieces, trimPieces, stick,
      panelCost, fastenerCost, ridgeCost, trimCost, total,
    };
  }

  function ftIn(inches) {
    const ft = Math.floor(inches / 12);
    const rem = Math.round(inches - ft * 12);
    return rem ? `${ft}' ${rem}"` : `${ft}'`;
  }

  const api = { calculate, ftIn };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RoofCalc = api;
})(this);
