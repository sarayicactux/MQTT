import { Table, Column, Model } from 'sequelize-typescript';
import Sequelize from 'sequelize';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  })
  id: number;
  @Column({
    type: Sequelize.STRING(100),
    unique: true,
    allowNull: false,
  })
  username: string;

  @Column({
    type: Sequelize.STRING(200),
    allowNull: false,
  })
  password: string;

  @Column({
    type: Sequelize.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: Sequelize.STRING(200),
    allowNull: false,
  })
  lastName: string;
}
