module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('Feedback', {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5
        }
      },
      comment: {
        type: DataTypes.TEXT,
      }
    });
    Feedback.associate = (models) => {
      Feedback.belongsTo(models.User, { foreignKey: 'user_id' });
      Feedback.belongsTo(models.Course, { foreignKey: 'course_id' });
    };
    return Feedback;
  };
  