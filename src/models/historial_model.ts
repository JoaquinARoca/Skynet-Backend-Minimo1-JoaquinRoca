import mongoose from "mongoose";
import { IDrone } from "./message_models.js";
import { exitCode } from "process";

const historialSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    droneId:{type:String,required:true},
    fecha: {type:Date,default:Date.now()},
    droneSaved:{type: mongoose.Schema.Types.Mixed}
});


export interface IHistorial {
    userId:string;
    droneId:string;
    fecha:Date;
    droneSaved?:IDrone;
}

const Historial = mongoose.model('Historial',historialSchema);
export default Historial;