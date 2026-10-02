# Job Calculator

Phone-friendly takeoff calculator for metal roofing, shingles and Hardie siding.

**Live:** https://fusionaicreator.github.io/metal-roof-calculator/

## Roofing
- Metal (exposed fastener, R-panel, 5V, standing seam) or shingles
- Gable or hip from footprint, or enter numbers straight from a HOVER / EagleView report
- Panel count and cut list, total panel LF, squares with adjustable waste
- Eave, rake, ridge, hip and valley trim in pieces; closures, screws or clips
- Underlayment and ice and water shield
- Metal pricing: panel $/ft, trim $/ft, screws $/bag, with an estimated material total

## Siding
- HardiePlank count by exposure, corner and opening trim boards, nails

## Copy order list
Each tab has a button that copies a plain-text order to send to your supplier.

## Report import
Importing a HOVER / EagleView PDF or screenshot uses Claude, so it only works in the Claude-hosted version of the page. On GitHub Pages the import box is hidden and everything else works.

## Run locally
No build step: `python3 -m http.server 8000`, then open http://localhost:8000.
