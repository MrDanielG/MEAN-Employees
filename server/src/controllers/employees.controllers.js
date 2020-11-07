const Employee = require('../models/Employee');
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.send(employees);
};

employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.json({ message: 'Employee Created' });
};

employeeCtrl.getEmployee = async (req, res) => {
    console.log(req.params);
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};

employeeCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Employee Updated' });
};

employeeCtrl.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ status: 'Employee deleted' });
    } catch (error) {
        res.json({ status: 'ERROR DELETING EMPLOYEE' });
    }
};

module.exports = employeeCtrl;
