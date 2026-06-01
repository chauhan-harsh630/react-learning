import Todo from "../models/todo.model.js";

// Create Todo
export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required.",
      });
    }

    const todo = await Todo.create({
      title,
    });

    return res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating todo",
      error: error.message,
    });
  }
};

// Get All Todos
export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({
      isDelete: false,
    });

    return res.status(200).json({
      success: true,
      count: todos.length,
      todos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching todos",
      error: error.message,
    });
  }
};

// Update Todo
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      todo,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid Todo ID",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Error updating todo",
      error: error.message,
    });
  }
};

// Soft Delete Todo
export const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message:  error.message,
        });
    }
}