import { Box, Container, Typography } from '@mui/material';
import { DataGrid, GridColDef, ptBR } from '@mui/x-data-grid';
import React from 'react';

// JSON com dados de usuários
const users = [
    {
        id: 1,
        nomeCompleto: "João Silva",
        login: "jsilva",
        email: "joao.silva@example.com",
        telefone: "(11) 98765-4321",
        dataNascimento: "1990-01-01",
        situacao: "Ativo",
    },
    {
        id: 2,
        nomeCompleto: "Maria Oliveira",
        login: "moliveira",
        email: "maria.oliveira@example.com",
        telefone: "(21) 91234-5678",
        dataNascimento: "1985-05-15",
        situacao: "Ativo",
    },
    {
        id: 3,
        nomeCompleto: "Carlos Santos",
        login: "csantos",
        email: "carlos.santos@example.com",
        telefone: "(31) 92345-6789",
        dataNascimento: "1978-09-20",
        situacao: "Inativo",
    },
];

// Definição das colunas do grid
const columns: GridColDef[] = [
    { field: 'nomeCompleto', headerName: 'Nome Completo', width: 200 },
    { field: 'login', headerName: 'Login', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 250 },
    { field: 'telefone', headerName: 'Telefone', width: 150 },
    { field: 'dataNascimento', headerName: 'Data de Nascimento', width: 150 },
    { field: 'situacao', headerName: 'Situação', width: 120 },
];

const Usuarios: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Lista de Usuários
                </Typography>
               
                <Box mt={2} height={400}>
                    <DataGrid
                        rows={users}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        disableRowSelectionOnClick
                        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText} // Filtros em português
                        sx={{
                            backgroundColor: 'white', // Cor branca para o grid
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: 'rgb(31, 45, 61)', // Cor do header
                                color: 'white', // Cor do texto no header
                            },
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Usuarios;
