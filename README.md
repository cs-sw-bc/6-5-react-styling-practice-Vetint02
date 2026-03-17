# Hair Salon — Styling Assignment

A starter React app for **Gloss & Co**, a hair salon. The JSX is already written.
Your job is to style it using three different approaches across three pages.

---

## Getting Started

**1.** Install the provided dependencies:

```bash
npm install
```

**2.** Install Material UI and its dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

**3.** Run the app and confirm all three tabs load without errors before you start styling:

```bash
npm run dev
```

---

## File Structure

```
src/
  pages/
    ServicesPage.jsx       ← Page 1: Traditional CSS
    TeamPage.jsx           ← Page 2: CSS Modules
    BookingPage.jsx        ← Page 3: Material UI
  styles/
    services.css           ← create this (Page 1)
    team.module.css        ← create this (Page 2)
    stylist.module.css     ← create this (Page 2)
  App.jsx
```

---

## Page 1 — Services & Pricing (Traditional CSS)

Open `ServicesPage.jsx` and `styles/services.css`.

**6.** Create `services.css` inside the `styles` folder.

**7.** In `ServicesPage.jsx`, import `services.css` at the top of the file.

**8.** Style the page wrapper: centred layout, max-width of `860px`, `2rem` padding, and `sans-serif` font.

**9.** Style the header: dark background (`#1a1a2e`), white text, `2rem` padding, centred text, and a `border-radius`.

**10.** Give the header `h1` a font size of `2.5rem` and no margin. Give the tagline `p` a lighter opacity.

**11.** Style the services grid: use CSS Grid with two columns and a `1.5rem` gap.

**12.** Style each service card: a light background (`#f9f6ff`), a `1px` border, `border-radius`, and `1.5rem` padding.

**13.** Style the service name `h3`: a dark purple colour (`#1a1a2e`) and no top margin.

**14.** Style the price: bold, purple (`#6a0572`), font size `1.2rem`.

**15.** Style the book button: purple background (`#6a0572`), white text, no border, `0.5rem 1.2rem` padding, `border-radius: 4px`, and a pointer cursor. Add a darker hover state.

**16.** Style the footer: centred text, grey colour, small font size, and `2rem` top margin.

---

## Page 2 — Meet the Team (CSS Modules)

Open `TeamPage.jsx`. You will create **two** CSS Module files for this page.

**17.** Create `team.module.css` and `stylist.module.css` inside the `styles` folder.

**18.** In `TeamPage.jsx`, import `team.module.css` as `teamStyles` and `stylist.module.css` as `stylistStyles`.

**19.** In `team.module.css`, add a `.card` class with a **light purple background** (`#f3e5f5`), border, border-radius, and padding. This is the section wrapper card.

**20.** In `stylist.module.css`, add a `.card` class with a **white background**, border, border-radius, and padding. This is the individual stylist card.

**21.** Apply `teamStyles.card` to the section wrapper `div` and `stylistStyles.card` to each stylist `div`. Open DevTools and inspect both — notice the class names are different unique strings even though both are called `.card` in their source files.

**22.** In `team.module.css`, add styles for `.page`, `.header`, `.grid`, and `.footer` — same layout as Page 1 but you can change the header background colour to `#4a0072`.

**23.** In `stylist.module.css`, style `.name`, `.specialty`, and `.bio` — name in dark purple and bold, specialty in a muted purple and uppercase, bio in a smaller font size.

**24.** Apply all `stylistStyles` classes to the correct elements inside the stylist card.

---

## Page 3 — Book an Appointment (Material UI)

Open `BookingPage.jsx`. You will not create any CSS files for this page — all styling comes from MUI components and the `sx` prop.

**25.** Wrap the whole page in a `Container` with `maxWidth="sm"` and `sx={{ py: 4 }}`.

**26.** Add a header `Box` with a dark background (`#1a1a2e`), white text, padding, border-radius, and centred text. Inside it, use two `Typography` components — one `variant="h4"` for the salon name, one `variant="body1"` for the tagline.

**27.** Use a `Stack` with `spacing={3}` to lay out the form fields. Inside it, add `TextField` components for: Full Name, Email Address, and Phone Number — all `variant="outlined"` and `fullWidth`.

**28.** Add a `TextField` with `type="date"` for the appointment date, and a `TextField` with `select` for the preferred stylist. Use `MenuItem` components inside it for the stylist options.

**29.** Add a `Slider` for budget range — `min={20}`, `max={300}`, `step={10}`, `valueLabelDisplay="auto"`. Above it, add a `Typography` label showing the current slider value.

**30.** Add two `Button` components side by side using a `Stack direction="row"` — one `variant="contained"` to confirm, one `variant="outlined"` to cancel. When the confirm button is clicked, show an `Alert` with `severity="success"` above the form.

---
## Go Further with MUI

You've used a handful of MUI components — but there's a lot more. Head to the [MUI documentation](https://mui.com/material-ui/all-components/) and try adding at least **two** of the following to your booking page:

- **Chip** — show the selected stylist's name as a tag once chosen
- **Avatar** — add an initial avatar next to each stylist name in the dropdown
- **Rating** — let the user rate their experience after confirming (1–5 stars)
- **Accordion** — collapse the "Your Details" and "Appointment" sections independently
- **Stepper** — break the form into steps: Details → Appointment → Confirm
- **Tooltip** — wrap the Confirm button with a tooltip that says "Make sure all fields are filled"
- **CircularProgress** — show a loading spinner for 2 seconds after clicking Confirm, then show the Alert
- **Snackbar** — replace the Alert with a Snackbar notification that appears at the bottom of the screen

For each component you add, read the Props section in the MUI docs and try at least one prop you haven't seen in class. Add a short comment in the code explaining what it does.
