let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {

    arr.map(function f(data) {
        if (data.profession === "developer") {
            console.log(data);
        }
    })
};

function PrintDeveloperbyForEach() {

    arr.forEach(x => {
        if (x.profession === "developer") {
            console.log(x);
        }
    })

}

function addData() {

    let ele = {
        id: 4,
        name: "susan",
        age: "20",
        profession: "intern"
    };
    arr.push(ele);
    console.log(arr);
}

function removeAdmin() {
    /
    arr = arr.filter(x => x.profession != "admin");
    console.log(arr);
}

function concatenateArray() {
    let arr2 = [{
        id: 10,
        name: "Akash",
        age: "23",
        profession: "front end developer",
    },
    {
        id: 20,
        name: "Arbaz",
        age: "20",
        profession: "full stack developer",
    },
    {
        id: 30,
        name: "Ashu",
        age: "19",
        profession: "lead",

    },
    ];
    console.log(arr.concat(arr2));
}