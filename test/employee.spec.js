import { Employee } from "../class/prototype";

describe("Tests for Employee Object", () =>{
    test("should get name via object", () => {
        //Given
        let murife = new Employee("Murife", "+23456789564", "runner");
        //When
        expect(murife.name).toBe("Murife");
        expect(murife.phoneNumber).toBe("+23456789564");
        expect(murife.designation).toBe("runner");
        //Assert
        expect(typeof murife.printDetails()).toEqual("string");
    })

    test('should assign salary based on designation', () => {
        //Given
        let oyin = new Employee("oyin", "+234789765431", "cook");
        let response = oyin.paySalary();
        
        // let response = {
        //     isSuccessful: true,
        //     salary: 2000,
        //     designation: "cook",
        // };
        expect(oyin.paySalary.paySalary()).toBe(true);
        expect(oyin.paySalary.paySalary()).toBe(true);
    })

})
