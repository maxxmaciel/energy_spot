import { Button, TextField } from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';

// Quando usar for tem que passar como parametros assim
//       <Form fields={formFields} onSubmit={handleSubmit} />

/* const formFields: FormField[] = [
     { name: 'name', label: 'Nome' },
     { name: 'teste', label: 'Teste' },
     { name: 'email', label: 'Email' },
     { name: 'password', label: 'Senha', type: 'password' },
   ];
const handleSubmit = (formData: Record<string, string>) => {
    // Lógica de tratamento do formulário
    console.log(formData);
  };*/


export interface FormField {
  name: string;
  label: string;
  type?: string;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (formData: Record<string, string>) => void;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const [formState, setFormState] = useState<Record<string, string>>({});

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          name={field.name}
          value={formState[field.name] || ''}
          onChange={handleFieldChange}
          variant="outlined"
          fullWidth
          type={field.type}
        />
      ))}
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default Form;