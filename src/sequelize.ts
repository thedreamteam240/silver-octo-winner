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
  content: {
    type: DataTypes.TEXT,
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

const Video = sequelize.define('Video', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

await sequelize.sync();

// Insert sample stories for development/testing
await Story.create({
  title: "Sample Story 1",
  description: "A demo story showcasing various content types",
  user_email: "xavierclementantoine@gmail.com",
  content: JSON.stringify([
    {
      uid: "text-1",
      type: "text",
      position: { x: 100, y: 100, z: 1 },
      data: { text: "Welcome to the demo story!", font: "Arial", color: "#000000" }
    }
  ])
});

await Story.create({
  title: "Sample Story 2", 
  description: "A story about nature",
  user_email: "xavierclementantoine@gmail.com",
  content: JSON.stringify([
    {
      uid: "image-1",
      type: "image",
      position: { x: 200, y: 200, z: 1 },
      data: { imageId: "1", alt: "Beautiful landscape" }
    }
  ])
});

await Story.create({
  title: "Sample Story 3",
  description: "A video tutorial",
  user_email: "xavierclementantoine@gmail.com",
  content: JSON.stringify([
    {
      uid: "video-1",
      type: "video",
      position: { x: 300, y: 300, z: 1 },
      data: { videoId: "1", autoplay: false, controls: true }
    }
  ])
});

await Story.create({
  title: "Sample Story 4",
  description: "An embedded content example",
  user_email: "xavierclementantoine@gmail.com",
  content: JSON.stringify([
    {
      uid: "embed-1",
      type: "embed",
      position: { x: 400, y: 400, z: 1 },
      data: { url: "https://example.com", title: "Example Embed" }
    }
  ])
});

await Story.create({
  title: "Sample Story 5",
  description: "Mixed content types",
  user_email: "xavierclementantoine@gmail.com",
  content: JSON.stringify([
    {
      uid: "text-1",
      type: "text",
      position: { x: 100, y: 100, z: 1 },
      data: { text: "Text and image combination", font: "Arial", color: "#000000" }
    },
    {
      uid: "image-1",
      type: "image",
      position: { x: 200, y: 200, z: 2 },
      data: { imageId: "2", alt: "Supporting image" }
    }
  ])
});

await Story.create({
  title: "Sample Story 6",
  description: "Complex layout example",
  user_email: "xavierclementantoine@gmail.com",
  content: JSON.stringify([
    {
      uid: "text-1",
      type: "text",
      position: { x: 100, y: 100, z: 1 },
      data: { text: "Main heading", font: "Arial", color: "#000000" }
    },
    {
      uid: "video-1",
      type: "video",
      position: { x: 200, y: 200, z: 2 },
      data: { videoId: "2", autoplay: false, controls: true }
    },
    {
      uid: "embed-1",
      type: "embed",
      position: { x: 300, y: 300, z: 3 },
      data: { url: "https://example.com/embed", title: "Related content" }
    }
  ])
});

export { sequelize, Story, Image, Video };