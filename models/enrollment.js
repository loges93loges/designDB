module.exports = (sequelize, DataTypes) => {
    const Enrollment = sequelize.define('Enrollment', {
      enrollment_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['enrolled', 'completed', 'dropped']]
        }
      }
    });
    Enrollment.associate = (models) => {
      Enrollment.belongsTo(models.User, { foreignKey: 'user_id' });
      Enrollment.belongsTo(models.Class, { foreignKey: 'class_id' });
    };
    return Enrollment;
  };
  