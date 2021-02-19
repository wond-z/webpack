export class SideBar {
    sideData: any[];
    constructor(data: object[]) {
        this.sideData = data;
    }
    public init() {
        const elSideBar: any = document.getElementById('sideBar');
        for (const key in this.sideData) {
            console.log(key);
            
            if (Object.prototype.hasOwnProperty.call(this.sideData, key)) {
                // const element = this.sideData[key];
                let elItem = document.createElement('div');
                var elText = document.createTextNode(this.sideData[key].name);
                elItem.appendChild(elText);
                elSideBar.appendChild(elItem);
            }
        }
    }
}