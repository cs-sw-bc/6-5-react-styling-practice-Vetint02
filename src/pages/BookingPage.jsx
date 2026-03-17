// BookingPage.jsx
// Page 3 — Book an Appointment
// Styling approach: Material UI
//
// No CSS files for this page — all styling comes from MUI components and the sx prop.
// The imports and data are provided. Your job is to build the JSX using MUI components (TODOs 25–30).
//
// Make sure you have run: npm install @mui/material @emotion/react @emotion/styled

import { useState } from 'react';

// MUI components are already imported for you
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';

const stylists = ['Aria Chen', 'Marcus Webb', 'Priya Nair', 'No preference'];

export default function BookingPage() {
  const [budget, setBudget] = useState(100);
  const [submitted, setSubmitted] = useState(false);

  return (
    // TODO 25: Wrap everything in a Container with maxWidth="sm" and sx={{ py: 4 }}
    <div>

      {/* TODO 26: Replace this div with a Box — dark background, white text, centred, with padding and border-radius */}
      {/* Inside it, add two Typography components: h4 for "Gloss & Co", body1 for "Book an Appointment" */}
      <div>
        <h1>Gloss & Co</h1>
        <p>Book an Appointment</p>
      </div>

      {/* TODO 30: Show an Alert with severity="success" here when submitted is true */}

      {/* TODO 27: Replace this div with a Stack spacing={3} */}
      <div>

        <h2>Your Details</h2>

        {/* TODO 27: Replace these with TextField components — variant="outlined", fullWidth */}
        <input placeholder="Full Name" />
        <input placeholder="Email Address" />
        <input placeholder="Phone Number" />

        <h2>Appointment</h2>

        {/* TODO 28: Replace with a TextField type="date" */}
        <input type="date" />

        {/* TODO 28: Replace with a TextField select, with MenuItem children for each stylist */}
        <select>
          {stylists.map(s => <option key={s}>{s}</option>)}
        </select>

        {/* TODO 29: Add a Typography label showing "Budget: $X" using the budget state */}
        {/* TODO 29: Replace this with a Slider — min=20, max=300, step=10, valueLabelDisplay="auto" */}
        <input type="range" min="20" max="300" value={budget} onChange={e => setBudget(e.target.value)} />

        {/* TODO 30: Replace this div with a Stack direction="row" spacing={2} */}
        {/* TODO 30: Replace these with Button components — contained and outlined variants */}
        <div>
          <button onClick={() => setSubmitted(true)}>Confirm Booking</button>
          <button>Cancel</button>
        </div>

      </div>

    </div>
  );
}
