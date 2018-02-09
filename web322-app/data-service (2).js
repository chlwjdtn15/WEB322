var employees = [];
var departments = [];
const fs = require('fs');


module.exports.initialize = function() {
    return new Promise(function(resolve, reject)
    {
        try{
            fs.readFile('./data/employees.json', (err, data) => {
                 if (err) 
                 {
                     throw err;
                 }
                 employees = JSON.parse(data);
            });

            fs.readFile('./data/departments.json', (err,data) => {
                if (err) 
                {
                    throw err;
                }
                departments = JSON.parse(data);
            });
        }catch(ex){
            reject("unable to read file");
         }
         resolve("Success");
    });
}

module.exports.getAllEmployees = function() {
    var allemployees = [];
    return new Promise(function(resolve, reject)
{
    for (var i = 0; i < employees.length; i++)
    {
        allemployees.push(employees[i]);
    }
    if (allemployees.length == 0)
    {
        reject("no results returned");
    }
    resolve(allemployees);
});
}

module.exports.getEmployeesByStatus = function(status) {
    var empbystatus = [];
    return new Promise(function(resolve, reject)
{
    for(var i = 0; i < employees.length; i++)
    {
        if (employees[i].status == status)
        {
            empbystatus.push(employees[i]);
        }
    }
    if (empbystatus.length == 0)
    {
        reject("no results returned");
    }
    resolve(empbystatus);
});
}

module.exports.getEmployeesByDepartment = function(department) {
    var empbydep =[];
    return new Promise(function(resolve, reject)
{
    for(var i = 0; i < employees.length; i++)
    {
        if (employees[i].department == department)
        {
            empbydep.push(employees[i]);
        }
    }
    if (empbydep.length == 0)
    {
        reject("no results returned");
    }
    resolve(empbydep);
});
}

module.exports.getEmployeesByManager = function(manager)
{
    var empbyman = [];
    return new Promise(function(resolve, reject)
{
    for(var i = 0; i < employees.length; i++)
    {
        if (employees[i].employeeManagerNum == manager)
        {
            empbyman.push(employees[i]);
        }
    }
    if (empbyman.length == 0)
    {
        reject("no results returned");
    }
    resolve(empbyman);
});
}

module.exports.getEmployeesByNum = function(num){
    
    return new Promise (function(resolve, reject) {
        var empnum = [];
    for (var i = 0; i < employees.length; i++)
    {
        if (employees[i].employeeNum == num)
        {
            empnum.push(employees[i]);
        }
    }
    if (empnum.length == 0)
    {
        reject("no results returned");
    }
    resolve(empnum);
});
}

module.exports.getManager = function() {
    var getmanager = [];
    return new Promise(function(resolve, reject)
{
        for (var i = 0; i < employees.length; i++)
        {
            if (employees[i].isManager == true)
            {
                getmanager.push(employees[i]);
            }
        }
        if (getmanager.length == 0)
        {
            reject("no result returned");
        }
    resolve(getmanager);
});
}

module.exports.getDepartments = function () {
    var getdepartments = [];
    
    return new Promise (function(resolve, reject)
{
    for (var i = 0; i < departments.length; i++)
    {
        getdepartments.push(departments[i]);
    }
    if (getdepartments.length == 0)
    {
        reject("no results returned");
    }
    resolve(getdepartments);
});
}