const express = require("express");
const Project = require("../models/Project");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create project
router.post("/", auth, async (req, res) => {
  const { title, description, techStack, githubLink, liveLink } = req.body;
  const project = new Project({ 
    userId: req.user.id, 
    title, description, techStack, githubLink, liveLink 
  });
  await project.save();
  res.status(201).json(project);
});

// Get all projects (for recruiters)
router.get("/", async (req, res) => {
  const projects = await Project.find().populate("userId", "name role email");
  res.json(projects);
});

// Get projects for a specific user
router.get("/my", auth, async (req, res) => {
  const projects = await Project.find({ userId: req.user.id });
  res.json(projects);
});

module.exports = router;
