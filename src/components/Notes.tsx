import React, { useState } from 'react';

interface Note {
  text: string;
  timestamp: string;
}

const Notes: React.FC = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);

  const handleSave = () => {
    if (note.trim()) {
      setNotes([
        { text: note, timestamp: new Date().toLocaleString() },
        ...notes,
      ]);
      setNote('');
    }
  };

  return (
    <div>
      <h2>Notes</h2>
      <textarea
        value={note}
        onChange={e => setNote(e.target.value)}
        rows={4}
        cols={50}
        placeholder="Type your note here..."
      />
      <br />
      <button onClick={handleSave}>Save Note</button>
      <ul>
        {notes.map((n, idx) => (
          <li key={idx} style={{ margin: '10px 0' }}>
            <div><b>{n.timestamp}</b></div>
            <div>{n.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes; 