# Metal Roof Calculator

Simple, phone-friendly calculator for exposed-fastener metal roofs. Enter roof size, pitch and panel coverage, get back exactly what to order plus an estimated material cost.

**Live:** https://fusionaicreator.github.io/metal-roof-calculator/

## What it figures
- Squares (actual roof surface, no waste)
- Panel count and cut length (rounded up to the next inch), total panel LF
- Screws and fastener boxes
- Ridge cap and trim (eave + rake, or high-side for shed roofs) in LF and 10' sticks
- Adjustable waste factor (default 10%) applied to panels, screws and trim
- Itemized cost + "Copy order list" for texting your supplier

## Assumptions
- **Gable:** Length = ridge/eave length, Width = building span (eave to eave). Each side's panel = (span ÷ 2) × pitch factor + overhang.
- **Shed:** Width = low eave to high side.
- Fasteners default to 80 screws/square, 250/box (both editable).
- Ridge and trim share one $/LF price; cost is rounded up to full sticks.

## Run locally
No build step. From this folder:
```
python3 -m http.server 8000
```
Then open http://localhost:8000. Run the math tests with `node test.js`.
