import React, { useState } from 'react';

interface Doc {
  name: string;
  timestamp: string;
}

const Documents: React.FC = () => {
  const [docs, setDocs] = useState<Doc[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocs([
        { name: file.name, timestamp: new Date().toLocaleString() },
        ...docs,
      ]);
    }
  };

  return (
    <div>
      <h2>Document Upload</h2>
      <input type="file" onChange={handleUpload} />
      <ul>
        {docs.map((doc, idx) => (
          <li key={idx} style={{ margin: '10px 0' }}>
            <div><b>{doc.timestamp}</b></div>
            <div>{doc.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Documents; 