module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['student', 'instructor', 'admin']]
        }
      }
    });
    User.associate = (models) => {
      User.hasMany(models.Course, { foreignKey: 'instructor_id' });
      User.hasMany(models.Enrollment, { foreignKey: 'user_id' });
      User.hasMany(models.Submission, { foreignKey: 'user_id' });
      User.hasMany(models.Feedback, { foreignKey: 'user_id' });
    };
    return User;
  };
  
  