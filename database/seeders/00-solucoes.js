'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Solucoes', [{
        solucao: 'AMPLIFICADOR QUEIMADO',
        newmonitor: 5404,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'BOOT NO AMPLIFICADOR',
        newmonitor: 5405,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'DISJUNTOR DE SERVIÇO DO CONDOMÍNIO DESLIGADO',
        newmonitor: 3061,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'DISJUNTOR DO MDU DESARMADO',
        newmonitor: 5403,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'EQUALIZAÇÃO DE AMPLIFICADOR',
        newmonitor: 2959,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'FURTO DE ATIVO',
        newmonitor: 5406,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'LIMPEZA DE RUÍDO',
        newmonitor: 2960,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'MANUTENÇÃO NO AMPLIFICADOR',
        newmonitor: 2961,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'MANUTENÇÃO NO DG',
        newmonitor: 2962,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'NORMALIZADO SEM INTERVENCAO',
        newmonitor: 5423,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'PASSIVO DANIFICADO',
        newmonitor: 3063,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'RECONSTRUÇÃO DE MDU',
        newmonitor: 2966,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'REFEITA CONEXÃO - BACK BONE',
        newmonitor: 2965,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'REFEITA CONEXÃO DO CABO RG11 NO TAP',
        newmonitor: 3064,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'TROCA DE AMPLIFICADOR',
        newmonitor: 2967,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        solucao: 'TROCA DE DROP',
        newmonitor: 2968,
        created_at: new Date(),
        updated_at: new Date(),
      },], {});
  },

//   {
//     solucao: 'ACESSO PROIBIDO AO PONTO DE FALHA',
//     newmonitor: 3067,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
//   {
//     solucao: 'ENERGIA ELÉTRICA DO CONDOMÍNIO CORTADA PELA CONCESSIONÁRIA',
//     newmonitor: 3062,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
//   {
//     solucao: 'ERRO DE ABERTURA',
//     newmonitor: 5424,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
//   {
//     solucao: 'QUEDA DE ENERGIA - ACIONADO GERADOR',
//     newmonitor: 2963,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
//   {
//     solucao: 'QUEDA DE ENERGIA - FORNECIMENTO REESTABELECIDO',
//     newmonitor: 2964,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
//   {
//     solucao: 'REDE EXTERNA COM PROBLEMA',
//     newmonitor: 5425,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Solucoes', null, {});
  }
};
