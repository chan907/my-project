import React from 'react';

const Fees = () => {
  const feeHistory = [
    { id: 'INV-001', description: 'Tuition Fee - Semester 6', amount: 2500, date: 'Jan 10, 2026', status: 'Paid' },
    { id: 'INV-002', description: 'Library Fee', amount: 150, date: 'Jan 10, 2026', status: 'Paid' },
    { id: 'INV-003', description: 'Examination Fee', amount: 200, date: 'Feb 15, 2026', status: 'Pending' },
    { id: 'INV-004', description: 'Hostel Fee (Optional)', amount: 1000, date: 'Feb 15, 2026', status: 'Pending' },
  ];

  return (
    <div>
      <h1 className="page-title">Fee Management</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card" style={{ borderTop: '4px solid #667eea' }}>
          <h4 style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Total Paid</h4>
          <p style={{ fontSize: '1.75rem', fontWeight: 700, color: '#2d3748' }}>23,650</p>
        </div>
        <div className="card" style={{ borderTop: '4px solid #e53e3e' }}>
          <h4 style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Total Pending</h4>
          <p style={{ fontSize: '1.75rem', fontWeight: 700, color: '#e53e3e' }}>15,000</p>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '1.5rem' }}>Payment History</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #edf2f7' }}>
                <th style={{ padding: '1rem' }}>Invoice ID</th>
                <th style={{ padding: '1rem' }}>Description</th>
                <th style={{ padding: '1rem' }}>Amount</th>
                <th style={{ padding: '1rem' }}>Date</th>
                <th style={{ padding: '1rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {feeHistory.map(fee => (
                <tr key={fee.id} style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={{ padding: '1rem' }}>{fee.id}</td>
                  <td style={{ padding: '1rem' }}>{fee.description}</td>
                  <td style={{ padding: '1rem' }}>{fee.amount}</td>
                  <td style={{ padding: '1rem' }}>{fee.date}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '9999px', 
                      fontSize: '0.75rem', 
                      fontWeight: 600,
                      background: fee.status === 'Paid' ? '#c6f6d5' : '#fed7d7',
                      color: fee.status === 'Paid' ? '#22543d' : '#822727'
                    }}>
                      {fee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button style={{ marginTop: '2rem', background: '#667eea', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700 }}>
          Pay Pending Fees
        </button>
      </div>
    </div>
  );
};

export default Fees;
