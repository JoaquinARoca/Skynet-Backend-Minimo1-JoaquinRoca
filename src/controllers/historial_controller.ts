import { Request, Response } from "express";
import { 
    createHistorial, 
    getHistoriales, 
    getHistorialById, 
    updateHistorial, 
    deleteHistorial 
} from "../service/historial_service.js";

export const createHistorialHandler = async (req: Request, res: Response) => {
    try {
        const historial = await createHistorial(req.body);
        res.status(201).json(historial);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getHistorialesHandler = async (req: Request, res: Response) => {
    try {
        const historiales = await getHistoriales();
        res.status(200).json(historiales);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getHistorialByIdHandler = async (req: Request, res: Response) => {
    try {
        const historial = await getHistorialById(req.params.id);
        if (!historial) return res.status(404).json({ message: "Historial no encontrado" });
        res.status(200).json(historial);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateHistorialHandler = async (req: Request, res: Response) => {
    try {
        const historial = await updateHistorial(req.params.id, req.body);
        if (!historial) return res.status(404).json({ message: "Historial no encontrado" });
        res.status(200).json(historial);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteHistorialHandler = async (req: Request, res: Response) => {
    try {
        const historial = await deleteHistorial(req.params.id);
        if (!historial) return res.status(404).json({ message: "Historial no encontrado" });
        res.status(200).json({ message: "Historial eliminado" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
