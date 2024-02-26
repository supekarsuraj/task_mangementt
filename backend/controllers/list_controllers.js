const List = require('../models/list_models');
const User=require('../models/user_models')

const insertList = async (req, res) => {
    const {  list, status } = req.body;
    console.log(req.user,7)
    const name = req.user.name; 

    console.log(name)

    try {
        await List.create({ name, list, status });
        return res.status(200).json({ message: "Your list is inserted" });
    } catch (error) {
        console.error("Error in insertList:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}; 

const deleteTask = async (req, res) => {
 const { id } = req.body;
    // const id=req.user.user.id;
    const name = req.user.name; 

    console.log(id,30);
    // const name = req.user.user.name; 

    try {
        const record = await List.findById(id).lean().exec();
        if (record) {
            await List.findByIdAndDelete(id).exec();
            res.status(200).json("Your Task IS Deleted");
        } else {
            res.status(400).json("Record not found");
        }
    } catch (error) {
        console.error("Error in deleteTask:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const displayAll = async (req, res) => {
    const name = req.user.name; 
    //  const name = req.user?.user?.name; // Using optional chaining to avoid errors
     console.log(name)


    // const { user_name } = req.params;
    try {
        const records = await List.find({ name:name }).lean().exec();
        if (records.length !== 0) {
            res.status(200).json({ payload: records });
        } else {
            res.status(404).json({ message: "No records found" });
        }
    } catch (error) {
        console.error("Error in displayAll:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateTask = async (req, res) => {
    const { id, newTask, status } = req.body;
    // const id=req.user.id;
    console.log(id,72)
    try {
        const record = await List.findById(id).lean().exec();
        if (record) {
            await List.findByIdAndUpdate(id, { list: newTask, status }).exec();
            res.status(200).json({ message: "Your Task is Updated" });
        } else {
            res.status(404).json({ message: "Record not found" });
        }``
    } catch (error) {
        console.error("Error in updateTask:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
const getByStatus = async (req, res) => {
    const { id, status } = req.params;

    try {
        // Assuming `id` is the user ID and `status` is the task status
        const user = await List.findOne({ id: id, status: status }).lean().exec();
        if (!user) {
            return res.status(404).json({ message: "List not found" });
        }

        const tasks = await List.find({ name: user.name, status: status }).lean().exec(); // Find tasks by user's name and status

        if (tasks.length > 0) {
            res.status(200).json({ message: "Tasks found", tasks: tasks });
        } else {
            res.status(404).json({ message: "No tasks found for the given status" });
        }
    } catch (error) {
        console.error("Error in getByStatus:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};




module.exports = { insertList, deleteTask, displayAll, updateTask , getByStatus };
