
//define the model
module.exports = function (sequelize, DataTypes) {
    const Todo = sequelize.define("Todo", {
        text: {
            type: DataTypes, STRING,
            allowNull: false
        },
        complete: {
            tyoe: DataTypes, BOOLEAN,
            allowNull: false;
        }
    })
    return Todo;
};