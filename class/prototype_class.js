function Employee(name, phoneNumber, designation){
    this.name = name
    this.phoneNumber = phoneNumber
    this.designation = designation


    this.printDetails = () => {
        return `My name is ${this.name} \nYou can contact me via
        ${this.phoneNumber}. I am the ${designation} of Netro bank`;
    };
    
    this.paySalary = () => {
        let disbursementResponse = {
            isSuccessful: true,
            salary: this.salary,
            designation: this.designation,
        };
        if(this.designation === "manager"){
            this.salary = 500000000;
            disbursementResponse.salary = this.salary;
        }else if(this.designation === "cook"){
            this.salary = 2000;
        }
        else{
            disbursementResponse.salary = "Not assigned";
        }
        return disbursementResponse;
    };
            disbursementResponse["isSucessful"] = true
            
            return {
                isSuccessful: "true",
                paidAmount: this.salary,
                designation: this.designation,
            }
        }else if(this.designation === "cook"){
            this.salary = 2000;
            return this.salary;
        }
    }
    this.company = "Netro Bank";
}
let employeee = new Employee("Joe Botsman", "+23478738293", "manager");
let employeee2 = new Employee("Esther Botsman", "+23478738293", "cook");

Employee.prototype.isVerified = true;
employeee.prototype.isAvailable = false;

console.log(employee.__proto__=== employeee2.__proto__);
console.log(employee.company === employeee2.company);
console.log(employeee.printDetails());
console.log(employeee2.printDetails());
console.log(employeee.isAvailable);
console.log(employeee2.isAvailable);
