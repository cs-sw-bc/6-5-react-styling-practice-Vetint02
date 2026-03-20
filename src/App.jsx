// App.jsx
// Tabbed navigation between the three pages
// Already complete — no changes needed here

import { useState } from 'react';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import BookingPage from './pages/BookingPage';

const tabs = [
  { id: 'services', label: '✂️ Services — Traditional CSS' },
  { id: 'team',     label: '👥 Team — CSS Modules' },
  { id: 'booking',  label: '📅 Booking — Material UI' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '2px solid #1a1a2e', backgroundColor: '#f3e5f5' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{ 
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderBottom: activeTab === tab.id ? '3px solid #6a0572' : '3px solid transparent',
              backgroundColor: activeTab === tab.id ? '#e1bee7' : 'transparent',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              cursor: 'pointer',
              fontSize: '0.95rem',
              color: '#1a1a2e',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'services' && <ServicesPage />}
      {activeTab === 'team'     && <TeamPage />}
      {activeTab === 'booking'  && <BookingPage />}
    </div>
  );
}
