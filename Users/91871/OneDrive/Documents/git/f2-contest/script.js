/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    let developer = arr.map((element)=>{
      if(element.profession=="developer"){
        return element;
      }
    })
    console.log(developer);
    //Write your code here , just console.log
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((element) => {
      //Check if the profession is developer
      if (element.profession === "developer") {
        console.log(element);
      }
    });
  }
  
  
  function addData() {
    let newEmployee = { id: 4, name: "Ashwani Kumar", age: "20", profession: "Frontend Developer" };
    //Push the new employee to the array
    arr.push(newEmployee);
    console.log(arr);
  }
  function removeAdmin() {
    let noAdmin = arr.filter((element) => {
      //Check if the profession is not admin
      if (element.profession !== "admin") {
        return element;
      }
    });
    console.log(noAdmin);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let anotherArray = [
      { id: 5, name: "Enrolla Prakash", age: "21", profession: "tester" },
      { id: 6, name: "Rucha", age: "22", profession: "designer" },
      { id: 7, name: "Vinay", age: "23", profession: "manager" },
    ];
    //Concatenate the two arrays using the concat method
    let concatenatedArray = arr.concat(anotherArray);
    console.log(concatenatedArray);
  }
  