# Job calculator

Phone-friendly takeoff calculator for metal or shingle roofs and HardiePlank siding. Switch between **Roof** and **Siding** at the top; the bottom tab bar has four tabs that work for both:

- **Measure:** enter the job.
- **Materials:** square feet up top, then the material list.
- **Cut list:** every length and how many, plus every piece.
- **Layout:** a drawing with every panel or plank labeled.

Live totals sit under the switch on every tab. The copy button puts everything in plain text for your supplier. Waste, prices and product sizes are behind the settings button.

## Roof
- Metal (exposed fastener, R-panel, 5V, standing seam) or shingles.
- Three ways to measure:
  - **Simple:** a plain gable or hip roof from length, width and pitch.
  - **Trace:** any roof with square corners. Go around the edge from the report's length diagram, entering each edge as eave, rake or wall. Add a section for a porch or lower roof. The calculator works out every face, hip, valley and ridge.
  - **Report:** type in report totals, or import a HOVER / EagleView PDF or screenshot. Totals give square feet and materials. Trace the roof for a cut list.
- Material list: panels, trim and caps in pieces, closures, screws or clips, underlayment, ice and water shield, flashing; for shingles, bundles, starter, ridge cap, drip edge and nails.
- Cut list: every panel length and how many of each, plus every piece by roof face. The layout drawing labels each panel with its code and cut length.
- Optional prices for an estimated material cost. Waste and product sizes are under the results.

## Siding
- Pick the HardiePlank width.
- Add each wall: width, height, and gable height if it has one. Place each window and door by its size, distance from the left, and height up the wall.
- Material list: 12 ft planks to buy (cut pieces are packed into planks), starter strip, corner boards, window and door trim, nails, house wrap.
- Cut list: every plank length and how many, plus each wall course by course. Gable pieces get angle cuts, pieces notched around openings are marked, and the top course rip is shown.
- The layout drawing shows each wall with every course and plank.

## Report import
Importing a report uses Claude, so it only works in the Claude-hosted version of the page. Everywhere else the import box is hidden and everything else works.

## Run locally
No build step: `python3 -m http.server 8000`, then open http://localhost:8000.
