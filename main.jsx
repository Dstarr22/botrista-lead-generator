import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const leadsData = [
  {
    name: 'Sunrise Hospital',
    sector: 'Hospital',
    contact: 'Nicco Morelli',
    status: 'Follow-Up',
    notes: 'Managed by Sodexo. High volume foodservice.'
  },
  {
    name: 'The Meadows School',
    sector: 'Private School',
    contact: 'Jeremy Wells',
    status: 'Outreach Sent',
    notes: 'Premier prep school. Strong operations.'
  },
  {
    name: 'Bishop Gorman High School',
    sector: 'Private School',
    contact: 'SAGE Dining',
    status: 'Needs Review',
    notes: 'Contracted food service provider.'
  }
];

function App() {
  const [search, setSearch] = useState('');
  const filteredLeads = leadsData.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.sector.toLowerCase().includes(search.toLowerCase()) ||
      lead.contact.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ padding: '1.5rem', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>Botrista Lead Generator</h1>
      <input
        type="text"
        placeholder="Search leads..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', fontSize: '1rem' }}
      />
      {filteredLeads.map((lead, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '10px',
            background: '#f9f9f9'
          }}
        >
          <h2 style={{ margin: '0 0 0.3rem' }}>{lead.name}</h2>
          <p style={{ margin: '0.2rem 0' }}><strong>Sector:</strong> {lead.sector}</p>
          <p style={{ margin: '0.2rem 0' }}><strong>Contact:</strong> {lead.contact}</p>
          <p style={{ margin: '0.2rem 0' }}><strong>Status:</strong> {lead.status}</p>
          <p style={{ margin: '0.5rem 0 0', fontStyle: 'italic' }}>{lead.notes}</p>
        </div>
      ))}
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
