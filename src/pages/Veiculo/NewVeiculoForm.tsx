import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface VeiculoData {
    tipo_veiculo: string;
    modelo: string;
    ano_fabricacao: string;
    tx_plate: string;
}

interface NewVeiculoFormProps {
    vehicle?: VeiculoData | null;
}

const NewVeiculoForm: React.FC<NewVeiculoFormProps> = ({ vehicle }) => {
    const [veiculo, setVeiculo] = useState<VeiculoData>({
        tipo_veiculo: '', 
        modelo: '',
        ano_fabricacao: '',
        tx_plate: '',
    });

    useEffect(() => {
        if (vehicle) {
            setVeiculo(vehicle);
        }
    }, [vehicle]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVeiculo({ ...veiculo, [name]: value });
    };

    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target;
        setVeiculo({ ...veiculo, [name as string]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de submissão
        console.log(veiculo);
    };

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2, 
                maxWidth: 600, 
                margin: 'auto',
                padding: 0
            }} 
            component="form"
            onSubmit={handleSubmit}
        >
            <Typography variant="h6">Dados Básicos</Typography>
            <FormControl fullWidth required>
                <InputLabel>Tipo de veículo</InputLabel>
                <Select
                    name="tipo_veiculo"
                    value={veiculo.tipo_veiculo}
                    onChange={handleSelectChange}
                >
                    <MenuItem value="SEMI REBOQUE">Semi Reboque</MenuItem>
                    {/* Adicione outras opções conforme necessário */}
                </Select>
            </FormControl>
            <TextField
                label="Modelo"
                name="modelo"
                value={veiculo.modelo}
                onChange={handleInputChange}
                required
                fullWidth
            />
            <TextField
                label="Ano de Fabricação"
                name="ano_fabricacao"
                value={veiculo.ano_fabricacao}
                onChange={handleInputChange}
                required
                fullWidth
            />
         
            <TextField
                label="Placa"
                name="tx_plate"
                value={veiculo.tx_plate}
                onChange={handleInputChange}
                required
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Salvar
            </Button>
        </Box>
    );
};

export default NewVeiculoForm;
