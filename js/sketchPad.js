class SketchPad{
    constructor(containter, size=400){
        this.canvas=document.createElement("canvas");
        this.canvas.width=size;
        this.canvas.height=size;
        this.canvas.style=`
            background-color:white;
            box-shaddow: 0px 0px 10px 2px black;
        `;
        containter.appendChild(this.canvas);
    }
}