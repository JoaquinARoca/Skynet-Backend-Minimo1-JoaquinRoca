import mongoose from "mongoose";
import { exitCode } from "process";

const historialSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    droneId:{type:String,required:true},
    fecha: {type:Date,default:Date.now()}
});


export interface IHistorial {
    userId:string;
    droneId:string;
    fecha:Date;
}

const Historial = mongoose.model('Historial',historialSchema);
export default Historial;