const express=require('express')
const router=express.Router();

const employeeController=require('../controllers/employee-controller');

router.route('/create')
      .post(employeeController.createEmployee);
router.get('/getEmployee/',employeeController.getEmployee);
router.route('/update/:id').patch(employeeController.updateEmployee);
router.delete('/delete/:id',employeeController.deleteEmployee);




module.exports=router;