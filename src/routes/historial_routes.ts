import express from "express";
import { 
    createHistorialHandler, 
    getHistorialesHandler, 
    getHistorialByIdHandler, 
    updateHistorialHandler, 
    deleteHistorialHandler 
} from "../controllers/historial_controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Historiales
 *   description: Gestión del historial de drones y usuarios
 */

/**
 * @swagger
 * /api/historiales:
 *   post:
 *     summary: Crear un nuevo historial
 *     tags: [Historiales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID del usuario
 *               droneId:
 *                 type: string
 *                 description: ID del dron
 *               droneSaved:
 *                 type: object
 *                 description: Estado del dron en el momento del historial
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   model:
 *                     type: string
 *                   price:
 *                     type: number
 *                   description:
 *                     type: string
 *                   images:
 *                     type: array
 *                     items:
 *                       type: string
 *                   type:
 *                     type: string
 *                     enum: [venta, alquiler]
 *                   condition:
 *                     type: string
 *                     enum: [nuevo, usado]
 *                   location:
 *                     type: string
 *                   contact:
 *                     type: string
 *                   category:
 *                     type: string
 *                   sellerId:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   ratings:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         userId:
 *                           type: string
 *                         rating:
 *                           type: number
 *                         comment:
 *                           type: string
 *     responses:
 *       201:
 *         description: Historial creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post("/historiales", createHistorialHandler);

/**
 * @swagger
 * /api/historiales:
 *   get:
 *     summary: Obtener todos los historiales
 *     tags: [Historiales]
 *     responses:
 *       200:
 *         description: Lista de historiales obtenida
 */
router.get('/historiales', getHistorialesHandler);


/**
 * @swagger
 * /api/historiales/{id}:
 *   get:
 *     summary: Obtener un historial por ID
 *     tags: [Historiales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del historial a buscar
 *     responses:
 *       200:
 *         description: Datos del historial
 *       404:
 *         description: Historial no encontrado
 */
router.get("/historiales/:id", getHistorialByIdHandler);

/**
 * @swagger
 * /api/historiales/{id}:
 *   put:
 *     summary: Actualizar un historial
 *     tags: [Historiales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del historial a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               droneId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Historial actualizado
 *       404:
 *         description: Historial no encontrado
 */
router.put("/historiales/:id", updateHistorialHandler);

/**
 * @swagger
 * /api/historiales/{id}:
 *   delete:
 *     summary: Eliminar un historial
 *     tags: [Historiales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del historial a eliminar
 *     responses:
 *       200:
 *         description: Historial eliminado exitosamente
 *       404:
 *         description: Historial no encontrado
 */
router.delete("/historiales/:id", deleteHistorialHandler);

export default router;
