const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../config/config.json').development);

const User = require('./user')(sequelize, DataTypes);
const Course = require('./course')(sequelize, DataTypes);
const Class = require('./class')(sequelize, DataTypes);
const Enrollment = require('./enrollment')(sequelize, DataTypes);
const Assignment = require('./assignment')(sequelize, DataTypes);
const Submission = require('./submission')(sequelize, DataTypes);
const Feedback = require('./feedback')(sequelize, DataTypes);

User.associate({ Course, Enrollment, Submission, Feedback });
Course.associate({ User, Class, Feedback });
Class.associate({ Course, Enrollment, Assignment });
Enrollment.associate({ User, Class });
Assignment.associate({ Class, Submission });
Submission.associate({ Assignment, User });
Feedback.associate({ User, Course });

module.exports = { sequelize, User, Course, Class, Enrollment, Assignment, Submission, Feedback };
