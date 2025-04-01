import Historial, { IHistorial } from "../models/historial_model.js";

export const createHistorial = async (historialData: IHistorial) => {
    const historial = new Historial(historialData);
    return await historial.save();
};

export const getHistoriales = async () => {
    return await Historial.find();
};

export const getHistorialById = async (id: string) => {
    return await Historial.findById(id);
};

export const updateHistorial = async (id: string, updateData: Partial<IHistorial>) => {
    return await Historial.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteHistorial = async (id: string) => {
    return await Historial.findByIdAndDelete(id);
};
