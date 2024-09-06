// src/data.ts
export const userData = {
    user: {
      name: "João da Silva",
      cpf: "123.456.789-00",
      dateOfBirth: "1985-04-23",
      gender: "M",
      email: "joao.silva@example.com",
      phone: "+55 11 91234-5678",
    },
    menu: [
      {
        label: "Principal",
        content: {
          lastAccess: "2024-08-23 18:45:00",
          accountStatus: "Ativa",
          notifications: ["Notificação 1", "Notificação 2"],
          recentActions: ["Alteração de endereço", "Recarga"],
        },
      },
      {
        label: "Veículos",
        content: [
          {
            tipo_veiculo: "Carro",
            modelo: "Fiat Uno",
            ano_fabricacao: "2015",
            tx_plate: "ABC-1234",
          },
          {
            tipo_veiculo: "Moto",
            modelo: "Honda CG 150",
            ano_fabricacao: "2018",
            tx_plate: "XYZ-5678",
          },
        ],
      },
      {
        label: "Contatos",
        content: {
          email: "joao.silva@example.com",
          phone: "+55 11 91234-5678",
          emergencyContact: {
            name: "Maria da Silva",
            relation: "Esposa",
            phone: "+55 11 98765-4321",
          },
        },
      },
      {
        label: "Condomínios",
        content: {
          email: "joao.silva@example.com",
          phone: "+55 11 91234-5678",
          emergencyContact: {
            name: "Maria da Silva",
            relation: "Esposa",
            phone: "+55 11 98765-4321",
          },
        },
      },
      {
        label: "Recargas",
        content: [
          {
            date: "2024-08-01 14:00:00",
            amount: "R$ 50,00",
            status: "Concluída",
          },
          {
            date: "2024-07-20 10:30:00",
            amount: "R$ 30,00",
            status: "Concluída",
          },
        ],
      },
    ],
  };
  