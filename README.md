# Job calculator

Current version: **V4**. Each published update raises the version (V4, V5, …); it shows in the page title and next to the app name.

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
  - **Trace:** any roof with square corners. Go around the edge from the report's length diagram, entering each edge as eave, rake or wall. If part of the roof has a different pitch, set it on that part's edges. Add a section for a porch or lower roof. The calculator works out every face, hip, valley and ridge, including hips between different pitches.
  - **Report:** type in report totals, or import a HOVER / EagleView PDF or screenshot. An EagleView PDF's pitch diagram is read straight from the file: every roof face, its pitch and its downhill direction, so you get the exact panel list, cut list and layout for that roof. Other reports go to Claude, which traces the length diagram's outline. If neither works, you get totals and a prompt to trace by hand.
- Material list: panels, trim and caps in pieces, closures, screws or clips, underlayment, ice and water shield, flashing; for shingles, bundles, starter, ridge cap, drip edge and nails.
- Panels to order: every panel length and how many, written the way you order ("4 pcs at 16'5\""), at the top of Materials and in the copied list.
- Cut list: every panel length and how many of each, plus every piece by roof face. The layout drawing labels each panel with its code and cut length.
- Optional prices for an estimated material cost. Waste and product sizes are under the results.

## Siding
- Pick the HardiePlank width. Every length is entered in feet and inches (inches take decimals, so 6.5 = 6½").
- Add each wall: width, height, and gable height if it has one. Place each window and door by its size, distance from the left, and height up the wall.
- Material list: 12 ft planks to buy (cut pieces are packed into planks), starter strip, corner boards, window and door trim, nails, house wrap.
- Cut list: every plank length and how many, plus each wall course by course. Gable pieces get angle cuts, pieces notched around openings are marked, and the top course rip is shown.
- The layout drawing shows each wall with every course and plank.

## Report import
Pick a HOVER or EagleView PDF and every page shows as a thumbnail. Tap a page to see it full size, and pick which pages Claude reads (the summary and the length diagram are picked for you). The report stays on screen afterwards, so you can read it while tracing. Screenshots are read straight away.

EagleView PDFs are read on the device: the pitch diagram's faces come straight from the PDF's drawing, scaled by the report's total area, with each face's pitch checked against the report's area per pitch. This works anywhere, without Claude. Reading other reports and screenshots uses Claude, so that part only works in the Claude-hosted version of the page.

## Run locally
No build step: `python3 -m http.server 8000`, then open http://localhost:8000.
