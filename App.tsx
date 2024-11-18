import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormPreview from "./components/FormPreview";

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<string>('{}');
  const [error, setError] = useState<string | null>(null);

  const handleJsonChange = (newJson: string) => {
    try {
      JSON.parse(newJson); // Validate JSON
      setError(null);
      setJsonSchema(newJson);
    } catch (e) {
      setError("Invalid JSON format");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* JSON Editor */}
      <div className="w-full md:w-1/2 p-4 border-r">
        <JSONEditor json={jsonSchema} onChange={handleJsonChange} error={error} />
      </div>

      {/* Form Preview */}
      <div className="w-full md:w-1/2 p-4">
        <FormPreview schema={jsonSchema} />
      </div>
    </div>
  );
};

export default App;
