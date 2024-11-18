import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPreviewProps {
  schema: string;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let parsedSchema;

  try {
    parsedSchema = JSON.parse(schema);
  } catch {
    return <p className="text-red-500">Invalid JSON schema</p>;
  }

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {parsedSchema.fields && parsedSchema.fields.map((field: any, index: number) => (
        <div key={index}>
          <label className="block mb-1">{field.label}</label>
          <input
            {...register(field.name, { required: field.required })}
            className="w-full p-2 border rounded"
            type={field.type || "text"}
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm">This field is required</p>
          )}
        </div>
      ))}

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default FormPreview;
