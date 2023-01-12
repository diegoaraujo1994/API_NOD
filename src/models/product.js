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
              msg: 'The active state of product cannot be null',
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
              msg: 'The id of product cannot be null',
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
              msg: 'The field name cannot be empty',
            },
            notNull: {
              msg: 'The name of product cannot be null',
            },
          },
        },
        validAt: {
          type: Sequelize.DATE,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'The valid date of product cannot be null',
            },
          },
        },
        batch: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'The batch of product cannot be null',
            },
          },
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'The price of product cannot be null',
            },
          },
        },
      },
      { sequelize },
    );
  }
}

//   id;
//   name;
//   validAt;
//   batch;
//   price;
//   active;
