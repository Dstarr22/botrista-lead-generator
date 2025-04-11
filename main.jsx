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
  const [tab, setTab] = useState('leads');
  const [search, setSearch] = useState('');
  const [leads, setLeads] = useState(initialLeads);
  const [newLead, setNewLead] = useState({ name: '', sector: '', contact: '', status: 'Follow-Up', notes: '' });
  const [sectorFilter, setSectorFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const updateLead = (index, field, value) => {
    const newLeads = [...leads];
    newLeads[index][field] = value;
    setLeads(newLeads);
  };

  const addNewLead = () => {
    if (!newLead.name || !newLead.sector || !newLead.contact) return;
    setLeads([...leads, newLead]);
    setNewLead({ name: '', sector: '', contact: '', status: 'Follow-Up', notes: '' });
    setTab('leads');
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.sector.toLowerCase().includes(search.toLowerCase()) ||
      lead.contact.toLowerCase().includes(search.toLowerCase());
    const matchesSector = sectorFilter ? lead.sector === sectorFilter : true;
    const matchesStatus = statusFilter ? lead.status === statusFilter : true;
    return matchesSearch && matchesSector && matchesStatus;
  });

  return (
    <main style={{ padding: '1.5rem', fontFamily: 'Arial, sans-serif', maxWidth: '750px', margin: 'auto' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Botrista Lead Generator</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => setTab('leads')} style={{ padding: '0.5rem 1rem', background: tab === 'leads' ? '#0070f3' : '#ddd', color: tab === 'leads' ? '#fff' : '#000' }}>Leads</button>
        <button onClick={() => setTab('add')} style={{ padding: '0.5rem 1rem', background: tab === 'add' ? '#0070f3' : '#ddd', color: tab === 'add' ? '#fff' : '#000' }}>Add Lead</button>
        <button onClick={() => setTab('outreach')} style={{ padding: '0.5rem 1rem', background: tab === 'outreach' ? '#0070f3' : '#ddd', color: tab === 'outreach' ? '#fff' : '#000' }}>Outreach</button>
      </div>

      {tab === 'leads' && (
        <>
          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <select value={sectorFilter} onChange={(e) => setSectorFilter(e.target.value)} style={{ flex: 1, padding: '0.5rem' }}>
              <option value="">All Sectors</option>
              <option value="Hospital">Hospital</option>
              <option value="Private School">Private School</option>
              <option value="Public School">Public School</option>
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ flex: 1, padding: '0.5rem' }}>
              <option value="">All Statuses</option>
              <option value="Follow-Up">Follow-Up</option>
              <option value="Outreach Sent">Outreach Sent</option>
              <option value="Interested">Interested</option>
              <option value="
