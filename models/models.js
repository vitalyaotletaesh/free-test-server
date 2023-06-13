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
    showAnnotation: {type: DataTypes.BOOLEAN, allowNull: false}
})
const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})
const Annotation = sequelize.define('annotation', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: true},
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

const Statistic = sequelize.define('statistic', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    answerDone1: {type: DataTypes.INTEGER, defaultValue: 0},
    answerDone2: {type: DataTypes.INTEGER, defaultValue: 0},
    answerDone3: {type: DataTypes.INTEGER, defaultValue: 0},
    answerDone4: {type: DataTypes.INTEGER, defaultValue: 0},
    answersTotal: {type: DataTypes.INTEGER, defaultValue: 0},
})

User.hasMany(Test, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Test.belongsTo(User)
Category.hasMany(Test, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Test.belongsTo(Category)
User.hasMany(Attempt, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Attempt.belongsTo(User)
Test.hasMany(Question, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Question.belongsTo(Test)
Test.hasMany(Attempt, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Attempt.belongsTo(Test)
Question.hasOne(Annotation, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Annotation.belongsTo(Question)
Question.hasOne(Statistic, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
Statistic.belongsTo(Question)

export {User, Test, Question, Attempt, Category, Annotation, Statistic}


