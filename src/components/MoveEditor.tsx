import React, { useState } from 'react';

interface MoveFile {
  code: string;
  timestamp: string;
}

const MoveEditor: React.FC = () => {
  const [code, setCode] = useState('');
  const [files, setFiles] = useState<MoveFile[]>([]);

  const handleSave = () => {
    if (code.trim()) {
      setFiles([
        { code, timestamp: new Date().toLocaleString() },
        ...files,
      ]);
      setCode('');
    }
  };

  const handleFork = (file: MoveFile) => {
    setCode(file.code);
  };

  return (
    <div>
      <h2>Move Editor</h2>
      <textarea
        value={code}
        onChange={e => setCode(e.target.value)}
        rows={8}
        cols={60}
        placeholder="Write your Move code here..."
      />
      <br />
      <button onClick={handleSave}>Save Move File</button>
      <ul>
        {files.map((file, idx) => (
          <li key={idx} style={{ margin: '10px 0' }}>
            <div><b>{file.timestamp}</b></div>
            <pre style={{ background: '#f4f4f4', padding: 8 }}>{file.code}</pre>
            <button onClick={() => handleFork(file)}>Fork</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoveEditor; 