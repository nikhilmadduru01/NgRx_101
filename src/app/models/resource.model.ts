export enum FileTag {
    Used,
    New,
    Updated,
}
export class Resource {
    public typeId:number;
    public productId:number;
    public qbankId:number;
    public resourceName:string;
    public fileTag:FileTag

    constructor(typeId:number,productId:number,qbankId:number,resourceName:string,fileTag:FileTag) {
        this.typeId = typeId;
        this.productId = productId;
        this.qbankId = qbankId;
        this.resourceName = resourceName;
        this.fileTag = fileTag;
    }
}