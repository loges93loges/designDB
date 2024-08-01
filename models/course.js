module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
      }
    });
    Course.associate = (models) => {
      Course.belongsTo(models.User, { foreignKey: 'instructor_id' });
      Course.hasMany(models.Class, { foreignKey: 'course_id' });
      Course.hasMany(models.Feedback, { foreignKey: 'course_id' });
    };
    return Course;
  };
  