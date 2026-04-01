import React from 'react';

const Notices = () => {
  const notices = [
    { id: 1, title: 'Mid-Term Examination Schedule', date: 'March 01, 2026', category: 'Academic', content: 'The mid-term examinations for the current semester are scheduled to begin from March 15th. Detailed timetable is available on the department notice board.' },
    { id: 2, title: 'Annual Cultural Fest - PERSONA 2026', date: 'February 25, 2026', category: 'Event', content: 'Registrations are now open for various events in Persona 2026. Interested students can register through the student activity portal.' },
    { id: 3, title: 'Internship Opportunity: TechCorp Solutions', date: 'February 20, 2026', category: 'Placement', content: 'TechCorp Solutions is offering summer internships for 3rd-year students. Last date to apply is March 5th.' },
    { id: 4, title: 'Library Timing Extended', date: 'February 15, 2026', category: 'General', content: 'In view of the upcoming exams, the central library will remain open until 10:00 PM starting next week.' },
  ];

  return (
    <div>
      <h1 className="page-title">Notices & Announcements</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {notices.map(notice => (
          <div key={notice.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ 
                padding: '0.25rem 0.75rem', 
                borderRadius: '9999px', 
                fontSize: '0.75rem', 
                fontWeight: 600,
                background: notice.category === 'Academic' ? '#ebf8ff' : notice.category === 'Event' ? '#faf5ff' : notice.category === 'Placement' ? '#f0fff4' : '#f7fafc',
                color: notice.category === 'Academic' ? '#2b6cb0' : notice.category === 'Event' ? '#6b46c1' : notice.category === 'Placement' ? '#276749' : '#4a5568'
              }}>
                {notice.category}
              </span>
              <span style={{ fontSize: '0.875rem', color: '#a0aec0' }}>{notice.date}</span>
            </div>
            <h3 style={{ marginBottom: '0.5rem', color: '#2d3748' }}>{notice.title}</h3>
            <p style={{ color: '#4a5568' }}>{notice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
