import Project from "../models/project.model.js";

const projectById = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    req.profile = project;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Project not found" });
  }
};

const list = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ message: "Project was created!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const read = (req, res) => {
  res.json(req.profile);
};

const update = async (req, res) => {
  try {
    let project = req.profile;

    project.title = req.body.title || project.title;
    project.description = req.body.description || project.description;
    project.src = req.body.src || project.src;
    project.githubLink = req.body.githubLink || project.githubLink;

    await project.save();
    res.json({ message: "Project updated!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.profile._id);
    res.json({ message: "Project deleted!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const removeAll = async (req, res) => {
  try {
    await Project.deleteMany({});
    res.json({ message: "All Projects deleted!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {list, create, read, update, remove, removeAll, projectById,};