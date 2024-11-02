import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent, FormHelperText } from '@mui/material';

type TransactionType = 'receita' | 'despesa';
type Category = 'alimentacao' | 'transporte' | 'lazer' | 'outros';

interface FormData {
  type: TransactionType;
  date: string;
  category: Category;
  amount: number | '';
  description: string;
}

const TransactionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    type: 'receita',
    date: '',
    category: 'alimentacao',
    amount: '',
    description: '',
  });

  const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<TransactionType>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value as TransactionType,
    }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors: { [key in keyof FormData]?: string } = {};

    if (!formData.type) {
      valid = false;
      newErrors.type = 'Selecione o tipo de transação';
    }
    if (!formData.date) {
      valid = false;
      newErrors.date = 'A data é obrigatória';
    }
    if (!formData.category) {
      valid = false;
      newErrors.category = 'A categoria é obrigatória';
    }
    if (formData.amount === '' || formData.amount <= 0) {
      valid = false;
      newErrors.amount = 'O valor deve ser positivo';
    }
    if (!formData.description.trim()) {
      valid = false;
      newErrors.description = 'A descrição é obrigatória';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Submissão dos dados
      console.log('Form data:', formData);
      // Limpeza dos erros e campos após envio
      setFormData({
        type: 'receita',
        date: '',
        category: 'alimentacao',
        amount: '',
        description: '',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <FormControl fullWidth margin="normal" error={!!errors.type}>
        <InputLabel>Tipo de Transação</InputLabel>
        <Select
          name="type"
          value={formData.type}
          onChange={handleSelectChange}
          label="Tipo de Transação"
        >
          <MenuItem value="receita">Receita</MenuItem>
          <MenuItem value="despesa">Despesa</MenuItem>
        </Select>
        {errors.type && <FormHelperText>{errors.type}</FormHelperText>}
      </FormControl>

      <TextField
        label="Data"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        error={!!errors.date}
        helperText={errors.date}
      />

      <TextField
        label="Categoria"
        name="category"
        value={formData.category}
        onChange={handleChange}
        select
        fullWidth
        margin="normal"
        error={!!errors.category}
        helperText={errors.category}
      >
        <MenuItem value="alimentacao">Alimentação</MenuItem>
        <MenuItem value="transporte">Transporte</MenuItem>
        <MenuItem value="lazer">Lazer</MenuItem>
        <MenuItem value="outros">Outros</MenuItem>
      </TextField>

      <TextField
        label="Valor"
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        fullWidth
        margin="normal"
        error={!!errors.amount}
        helperText={errors.amount}
      />

      <TextField
        label="Descrição"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={3}
        error={!!errors.description}
        helperText={errors.description}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
        Adicionar Transação
      </Button>
    </form>
  );
};

export default TransactionForm;
