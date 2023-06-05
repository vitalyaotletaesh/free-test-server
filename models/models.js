import sequelize from '../db.js'
import {DataTypes} from 'sequelize'

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Test = sequelize.define('test', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    completes: {type: DataTypes.INTEGER, defaultValue: 0},
    name: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Question = sequelize.define('question', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    answer1: {type: DataTypes.STRING, allowNull: false},
    answer2: {type: DataTypes.STRING, allowNull: false},
    answer3: {type: DataTypes.STRING, allowNull: false},
    answer4: {type: DataTypes.STRING, allowNull: false},
    correct_answer: {type: DataTypes.STRING, allowNull: false},
})

const Attempt = sequelize.define('attempt', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    result: {type: DataTypes.INTEGER, allowNull: false},
})

const Testing = sequelize.define('testing', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasMany(Test, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Test.belongsTo(User)

Category.hasMany(Test, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Test.belongsTo(Category)

User.hasMany(Attempt, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Attempt.belongsTo(User)

Test.hasMany(Question, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Question.belongsTo(Test)

Question.hasMany(Testing, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Testing.belongsTo(Question)

Attempt.hasMany(Testing, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Testing.belongsTo(Attempt)

export {User, Test, Question, Attempt, Testing, Category}


