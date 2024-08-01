module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define('Class', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
      },
      scheduled_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    Class.associate = (models) => {
      Class.belongsTo(models.Course, { foreignKey: 'course_id' });
      Class.hasMany(models.Enrollment, { foreignKey: 'class_id' });
      Class.hasMany(models.Assignment, { foreignKey: 'class_id' });
    };
    return Class;
  };
  