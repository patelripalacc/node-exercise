// import connection from "../db";
import query from "../db/utils";

//CRUD operationd
//Reading Data
function getAll() {
  return query(`SELECT * FROM employees`);

  // return new Promise((resolve, reject) => {
  //   connection.query(`SELECT * FROM employees`, (err, results) => {
  //     if (err) reject(err);
  //     resolve(results);
  //   });
  // });
}

function getOne(id) {
  return query(`SELECT * FROM employees WHERE EmployeeID = ?`,[id]);

  // return new Promise((resolve, reject) => {
  //   connection.query(`SELECT * FROM employees WHERE EmployeeID = ?`,[id], (err, results) => {
  //       if (err) reject(err);
  //       resolve(results);
  //     });
  // });
}
//Create Data

function add(data){
  return query(`INSERT INTO employees SET ?`,[data]);
}

//Updating Data

function update(id, data){
  return query(`UPDATE employees SET ? WHERE EmployeeID = ?`,[data, id]);
}

//DeleteData

function remove(id){
  return query(`DELETE FROM employees WHERE EmployeeID = ?`,[id]);
}

export default {
  getAll,
  getOne,
  add,
  update,
  remove
};
