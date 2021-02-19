import sideBar = require("./sideBar"); 

let message: string = 'Wond-Z'
console.log(message)

const data: object[] = [
    {
        name: 'sub1',
        value: 'sub1-content'
    }, {
        name: 'sub2',
        value: 'sub2-content'
    }, {
        name: 'sub3',
        value: 'sub3-content'
    }
];

const sb = new sideBar.SideBar(data);
sb.init();
console.log(sb)