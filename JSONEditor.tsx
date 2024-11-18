import React from "react";

interface JSONEditorProps {
  json: string;
  onChange: (value: string) => void;
  error: string | null;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ json, onChange, error }) => {
  return (
    <div>
      <textarea
        value={json}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-96 p-2 border rounded"
        placeholder="Enter JSON schema here..."
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JSONEditor;
