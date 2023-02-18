// import express from "express";
// import db from "../mockdb";
// import employees from "../controllers/employees.controller";


// const router = express.Router();

// router.get("/:id?", async (req, res, next) => {
//   try {
//     let { id } = req.params;
//     let data;

//     if (id) {
//       data = await employees.getOne(id);
//     } else {
//       data = await employees.getAll();
//     }

//     res.json(data);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     let newEmployee = req.body;
//     let data = await employees.add(newEmployee);
//     res.json(data);
//   } catch (err) {
//     next(err);
//   }
// });

// router.put("/:id", async (req, res, next) => {
//   try {
//     let { id } = req.params;
//     let updatedEmployee = req.body;
//     let data = await employees.update(id, updatedEmployee);
//     res.json(data);
//   } catch (err) {
//     next(err);
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   try {
//     let { id } = req.params;
//     let data = await employees.remove(id);
//     res.json(data);
//   } catch (err) {
//     next(err);
//   }
// });

// export default router;
