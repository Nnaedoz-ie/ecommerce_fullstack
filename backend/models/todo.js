// // user
// // tasks
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: false,
//     },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);

// const taskSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     body: {
//       type: String,
//       required: true,
//     },
//     priority: {
//       type: String,
//       enum: [
//         "not_important",
//         "slightly_important",
//         "important",
//         "extremely_important",
//       ],
//       default: "important",
//     },
//     status: {
//       type: String,
//       enum: ["not_completed", "partly_done", "not_started"],
//       default: "not_completed",
//     },
//     category: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Category",
//       required: false,
//     },
//     total_tasks: {
//       type: Number,
//       default: 0,
//     },
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//     dueDate: {
//       type: Date,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Task = mongoose.model("Task", taskSchema);

// const CategorySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   tasks: [
//     {
//       taskId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Task"
//       }
//     }
//   ],
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
// });

// const Category = mongoose.model("Category", CategorySchema);

// export { User, Task, Category };
