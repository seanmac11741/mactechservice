# Visual Improvement Plan

5 high-impact, easy-win improvements for macstechservice.com.

---

## 1. Swap Courier New for a modern font

The monospace font makes the site feel like a terminal instead of a professional business. Loading a single Google Font like Inter or Roboto and applying it to the body would immediately modernize the entire page. One line in `<head>`, one CSS change.

## 2. Bigger profile photo with the intro text beside it

The profile image is capped at 60px — easy to miss. Bump it to ~150px and place it side-by-side with the intro quote using flexbox so visitors see a face next to the pitch. On mobile it stacks vertically. This makes the owner feel approachable and the intro section feel intentional rather than empty.

## 3. Styled "Call Now" and "Email" buttons in the contact section

Right now the phone number and email are plain blue links buried in text. Replacing them with large, pill-shaped buttons (white text on a blue/green background, with a hover glow) gives visitors an obvious thing to tap — especially on mobile where these are the primary actions. This is the highest-value change for the client because it drives conversions.

## 4. Add subtle cards and hover effects to the services gallery

The polaroid sections currently have no visible boundary — the box-shadow is commented out. Re-enable a soft shadow, add a slightly lighter background (#444), round the corners, and add a gentle scale-up on hover (`transform: scale(1.03)`). This gives the services section depth and makes it feel interactive without any new HTML.

## 5. Add spacing, color accents, and section dividers

Every section shares the same flat #333 background which makes the page feel like one undifferentiated wall. Alternating section backgrounds slightly (#333 / #2a2a2a), adding a thin colored accent line (e.g. a 3px top border in a brand color) between sections, and increasing padding would create visual rhythm and help visitors scan the page. Pick one accent color (the blue from the contact links, #007bff, works) and reuse it on headings and dividers for consistency.
