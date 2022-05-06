/**
 * asgn-controller.js
 * asgn-controller - connect routes and view and models 
 * Programming 3
 * Name: BH
 * COMP2150
 */
 const Assignment = require("./asgn-model");
 /**
  * Handle retrieval of all contacts
  * Corresponds to GET api/contacts
  * @param {*} req 
  * @param {*} res 
  */
 exports.index= function (req, res) {
     Assignment.get(function (err, assignment) {
         if (err) {
             res.json({
                 status: "error",
                 message: err,
             });
         }
         res.json({
             status: "success",
             message: "Assignments retrieved successfully",
             data: assignment
         });
     });
 }
 
 /**
  * Handle create assignment actions
  * Corresponds to POST api/contacts
  * @param {*} req 
  * @param {*} res 
  */
 exports.new= function (req, res) {
     var assignment = new Assignment();
     assignment.courseName = req.body.courseName ? req.body.courseName : assignment.courseName;
     assignment.assignmentName = req.body.assignmentName; 
     assignment.dueDate = req.body.dueDate; 
     //save contact and check for errors
     assignment.save(function (err) {
         if (err) {
             res.json(err);
         }
         res.json({
             status: 'New assignment created!',
             data: assignment
         });
     });
 };
 
 /**
  * Handle find assignment using ID
  * @param {*} req 
  * @param {*} res 
  */
 
 exports.view = function (req, res) {
     Assignment.findById(function (err, assignment) {
         if (err) {
             res.send(err);
         }
         res.json({
             message: 'Assignment details loading...',
             data: assignment
         });
     });
 };
 /**
  * Handle update contact
  * Correspond to PUT /api/contacts/:contact_id
  * @param {*} req 
  * @param {*} res 
  */
 exports.update= function (req, res) {
     Assignment.findById(req.params.assignment_id, function (err, assignment) {
         if (err) {
            res.send(err);
         }
         assignment.courseName = req.body.courseName; 
         assignment.assignmentName = req.body.name ? req.body.name : assignment.name;
         assignment.dueDate = req.body.dueDate; 
     //save assignment and check for errors
         assignment.save(function (err) {
             if (err) {
             res.json(err);
             }
             res.json({
                 message: 'Assignment info updated.',
                 data: contact
             });
         });
     });
 };
 
 /**
  * Handle delete assignment
  * correspond to DELETE /api/contacts/:assignment_id
  * @param {*} req
  * @param {*} res
  */
 exports.delete = function (req, res) {
     Assignment.remove({
         _id: req.params.assignment_id
     }, function (err, assignment) {
         if (err) {
             res.send(err); 
         }
         res.json(
             {
             status: "success",
             message: 'Assignment deleted successfully'
         });
     });
 };
 //exports.new = function