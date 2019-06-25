import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Article = sequelize.define('article', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    url: {
        type: Sequelize.TEXT
    },
    content: {
        type: Sequelize.TEXT
    },
    header: {
        type: Sequelize.TEXT
    },
    subheader: {
        type: Sequelize.TEXT
    },
    publishdate: {
        type: Sequelize.DATE
    },
    author: {
        type: Sequelize.TEXT
    },
    customdate: {
        type: Sequelize.TEXT
    },
},{
    timestamps: false
});


// Project.hasMany(Task, { foreignKey: 'projectid', sourceKey: 'id' });
// Task.belongsTo(Project, { foreignKey: 'projectid', sourceKey: 'id'});

export default Article;

