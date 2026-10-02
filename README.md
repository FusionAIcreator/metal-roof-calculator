# Job Calculator

Phone-friendly takeoff calculator for metal roofing, shingles and Hardie siding.

**Live:** https://fusionaicreator.github.io/metal-roof-calculator/

## Roofing
- Metal (exposed fastener, R-panel, 5V, standing seam) or shingles
- Gable or hip from footprint, enter numbers straight from a HOVER / EagleView report, or trace the roof outline (Layout)
- Panel count and cut list, total panel LF, squares with adjustable waste
- Eave, rake, ridge, hip and valley trim in pieces; closures, screws or clips
- Underlayment and ice and water shield
- Metal pricing: panel $/ft, trim $/ft, screws $/bag, with an estimated material total
- Low-slope warnings for shingles and metal

## Panel cut list
Results lists every panel length and how many of each, with a total and every piece by roof face, for metal on a footprint gable, a footprint hip, or a traced outline. Copy order list includes it. A report alone gives totals, not the roof's shape, so for a report trace the outline (Layout) to get the cut list.

## Panel layout
Pick **Layout** under Measurements, then on the Layout tab walk around the roof edge from any corner: direction, length off the report's length diagram, and whether it's an eave, rake / gable or wall. Add a section for a porch or lower roof. The calculator works out every face, hip, valley and ridge (one pitch per section), then draws the plan with each panel labeled with its code and cut length, plus a cut list by face and a count by length. The totals feed the rest of the order (trim, closures, ice and water), and the copied order list includes the cut list.

Lengths are to the long point and include the eave overhang. Report lengths are rounded to the foot, so a small gap in the outline is closed automatically and noted, and the longest runs should be checked on site.

## Siding
- HardiePlank count by exposure, corner and opening trim boards, nails

## Copy order list
Each tab has a button that copies a plain-text order to send to your supplier.

## Report import
Importing a HOVER / EagleView PDF or screenshot uses Claude, so it only works in the Claude-hosted version of the page. On GitHub Pages the import box is hidden and everything else works.

## Run locally
No build step: `python3 -m http.server 8000`, then open http://localhost:8000.
