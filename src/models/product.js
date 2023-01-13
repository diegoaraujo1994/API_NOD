import Sequelize, { Model } from 'sequelize';

export class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        active: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'O estado ativo do produto não pode ser nulo',
            },
          },
        },
        id: {
          autoIncrement: true, // Diz que a chave é auto increment
          type: Sequelize.INTEGER, // Diz o tipo da chave.
          primaryKey: true, // Diz que a chave é cahve primaria.
          allowNull: false, // Diz que a chave não permite null.
          validate: {
            notNull: {
              msg: 'O id do produto não pode ser nulo',
            },
          }, // Valida se a chave é null,
          // retorna a menasagem em caso de erro.
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [3, 255],
              msg: 'O nome do campo não pode estar vazio',
            },
            notNull: {
              msg: 'O nome do produto não pode ser nulo',
            },
          },
        },
        validAt: {
          type: Sequelize.DATE,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'a data de validade do produto não pode ser nula',
            },
          },
        },
        batch: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'O lote do produto não pode ser nulo',
            },
          },
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'O preço do produto não pode ser nulo',
            },
          },
        },
      },
      { sequelize },
    );
  }
}


