import {
    Box,
    Button,
    Container,
    Grid,
    Modal,
    TextField,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import NewVeiculoForm from '../Veiculo/NewVeiculoForm';

const NewUserForm: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Cadastro de Consumidor
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Preencha os campos abaixo com as informações pessoais. Se desejar, você pode adicionar veículos relacionados.
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Nome de Usuário"
                            variant="outlined"
                            name="nm_user"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Login"
                            variant="outlined"
                            name="login"
                        />
                    </Grid>
                   {
                        /**
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Senha"
                            variant="outlined"
                            name="pass"
                            type="password"
                        />
                    </Grid>      
                         */
                    }
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="CPF / CNPJ"
                            variant="outlined"
                            name="tx_cpf_cnpj"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="E-mail"
                            variant="outlined"
                            name="tx_email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Telefone"
                            variant="outlined"
                            name="tx_fone"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Data de Nascimento"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            name="dt_birth"
                        />
                    </Grid>
                </Grid>

                <Box mt={3}>
                    <Button variant="contained" color="primary" onClick={handleOpen}>
                        Adicionar Veículos
                    </Button>
                </Box>

                <Box mt={3}>
                    <Button variant="contained" color="primary">
                        Salvar Cadastro
                    </Button>
                </Box>
            </Box>

            {/* Modal para adicionar veículo */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        p: 4,
                        boxShadow: 24,
                    }}
                >
                    <NewVeiculoForm />
                </Box>
            </Modal>
        </Container>
    );
};

export default NewUserForm;
