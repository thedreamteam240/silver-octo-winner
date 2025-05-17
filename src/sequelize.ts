import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const Story = sequelize.define('Story', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  user_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const StoryImage = sequelize.define('StoryImage', {
  story_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  x: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  y: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Story.belongsToMany(Image, { through: StoryImage });
Image.belongsToMany(Story, { through: StoryImage });

await sequelize.sync();

export { sequelize, Story, Image, StoryImage };