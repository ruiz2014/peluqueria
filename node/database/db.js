import { Sequelize } from 'sequelize'

const db = new Sequelize('db_mem', 'root', '', {host:'localhost', dialect:'mysql'})

export default db