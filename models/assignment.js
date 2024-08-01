module.exports = (sequelize, DataTypes) => {
    const Assignment = sequelize.define('Assignment', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
    Assignment.associate = (models) => {
      Assignment.belongsTo(models.Class, { foreignKey: 'class_id' });
      Assignment.hasMany(models.Submission, { foreignKey: 'assignment_id' });
    };
    return Assignment;
  };
  