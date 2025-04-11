import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const initialLeads = [
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
  const [leads, setLeads] = useState(initialLeads);
  const [newLead, setNewLead] = useState({ name: '', sector: '', contact: '', status: 'Follow-Up', notes: '' });

  const updateLead = (index, field, value) => {
    const newLeads = [...leads];
    newLeads[index][field] = value;
    setLeads(newLeads);
  };

  const addNewLead = () => {
    if (!newLead.name || !newLead.sector || !newLead.contact) return;
    setLeads([...leads, newLead]);
    setNewLead({ name: '', sector: '', contact: '', status: 'Follow-Up', notes: '' });
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.sector.toLowerCase().includes(search.toLowerCase()) ||
      lead.contact.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ padding: '1.5rem', fontFamily: 'Arial, sans-serif', maxWidth: '700px', margin: 'auto' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>Botrista Lead Generator</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Add New Lead</h2>
        <input placeholder="Business Name" value={newLead.name} onChange={(e) => setNewLead({ ...newLead, name: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }} />
        <input placeholder="Sector" value={newLead.sector} onChange={(e) => setNewLead({ ...newLead, sector: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }} />
        <input placeholder="Contact" value={newLead.contact} onChange={(e) => setNewLead({ ...newLead, contact: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }} />
        <select value={newLead.status} onChange={(e) => setNewLead({ ...newLead, status: e.target.value })} style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }}>
          <option value="Follow-Up">Follow-Up</option>
          <option value="Outreach Sent">Outreach Sent</option>
          <option value="Interested">Interested</option>
          <option value="Needs Review">Needs Review</option>
          <option value="Closed">Closed</option>
        </select>
        <textarea placeholder="Notes" value={newLead.notes} onChange={(e) => setNewLead({ ...newLead, notes: e.target.value })} rows="3" style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }} />
        <button onClick={addNewLead} style={{ padding: '0.5rem 1rem', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px' }}>Add Lead</button>
      </section>

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
          <label>
            <strong>Status:</strong>
            <select
              value={lead.status}
              onChange={(e) => updateLead(index, 'status', e.target.value)}
              style={{ marginLeft: '0.5rem', padding: '0.3rem' }}
            >
              <option value="Follow-Up">Follow-Up</option>
              <option value="Outreach Sent">Outreach Sent</option>
              <option value="Interested">Interested</option>
              <option value="Needs Review">Needs Review</option>
              <option value="Closed">Closed</option>
            </select>
          </label>
          <div style={{ marginTop: '0.5rem' }}>
            <label>
              <strong>Notes:</strong>
              <textarea
                value={lead.notes}
                onChange={(e) => updateLead(index, 'notes', e.target.value)}
                rows="3"
                style={{ width: '100%', marginTop: '0.3rem', padding: '0.5rem' }}
              />
            </label>
          </div>
        </div>
      ))}
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
