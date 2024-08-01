module.exports = (sequelize, DataTypes) => {
    const Submission = sequelize.define('Submission', {
      submission_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      file_url: {
        type: DataTypes.STRING,
      },
      grade: {
        type: DataTypes.DECIMAL(5, 2),
      }
    });
    Submission.associate = (models) => {
      Submission.belongsTo(models.Assignment, { foreignKey: 'assignment_id' });
      Submission.belongsTo(models.User, { foreignKey: 'user_id' });
    };
    return Submission;
  };
  