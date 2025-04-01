import express from 'express';
import {
  createDroneHandler,
  deleteDroneHandler,
  getDronesHandler,
  getDroneByIdHandler,
  updateDroneHandler,
  addDroneReviewHandler,
  getDronesByCategoryHandler,
  getDronesByPriceRangeHandler
} from '../controllers/drone_controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Drones
 *   description: Gestión de drones
 */

/**
 * @swagger
 * /api/drones:
 *   get:
 *     summary: Obtener todos los drones
 *     tags: [Drones]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Número de drones por página
 *     responses:
 *       200:
 *         description: Lista de drones
 */
router.get('/drones', getDronesHandler);

/**
 * @swagger
 * /api/drones/{id}:
 *   get:
 *     summary: Obtener un dron por ID
 *     tags: [Drones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del dron
 *       404:
 *         description: Dron no encontrado
 */
router.get('/drones/:id', getDroneByIdHandler);

/**
 * @swagger
 * /api/drones:
 *   post:
 *     summary: Crear un nuevo dron
 *     tags: [Drones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sellerId
 *               - name
 *               - model
 *               - price
 *               - description
 *               - type
 *               - condition
 *               - location
 *               - contact
 *               - category
 *             properties:
 *               sellerId:
 *                 type: string
 *                 description: ID del usuario vendedor
 *               name:
 *                 type: string
 *               model:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [venta, alquiler]
 *               condition:
 *                 type: string
 *                 enum: [nuevo, usado]
 *               location:
 *                 type: string
 *               contact:
 *                 type: string
 *               category:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Dron creado
 *       400:
 *         description: Datos inválidos
 */
router.post('/drones', createDroneHandler);

/**
 * @swagger
 * /api/drones/{id}/{idUser}:
 *   put:
 *     summary: Actualizar un dron y registrar la modificación en el historial
 *     tags: [Drones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: idUser
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               model:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Dron actualizado
 *       404:
 *         description: Dron no encontrado
 */
router.put('/drones/:id/:idUser', updateDroneHandler);

/**
 * @swagger
 * /api/drones/{id}:
 *   delete:
 *     summary: Eliminar un dron
 *     tags: [Drones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dron eliminado
 *       404:
 *         description: Dron no encontrado
 */
router.delete('/drones/:id', deleteDroneHandler);

/**
 * @swagger
 * /api/drones/{id}/review:
 *   post:
 *     summary: Agregar reseña a un dron
 *     tags: [Drones]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - rating
 *               - comment
 *             properties:
 *               userId:
 *                 type: string
 *               rating:
 *                 type: number
 *               comment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reseña agregada
 *       404:
 *         description: Dron o usuario no encontrado
 */
router.post('/drones/:id/review', addDroneReviewHandler);

/**
 * @swagger
 * /api/drones/category/{category}:
 *   get:
 *     summary: Obtener drones por categoría
 *     tags: [Drones]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de drones en la categoría
 */
router.get('/drones/category/:category', getDronesByCategoryHandler);

/**
 * @swagger
 * /api/drones/price:
 *   get:
 *     summary: Obtener drones por rango de precio
 *     tags: [Drones]
 *     parameters:
 *       - in: query
 *         name: min
 *         required: true
 *         schema:
 *           type: number
 *       - in: query
 *         name: max
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Drones encontrados en el rango
 *       400:
 *         description: Parámetros inválidos
 */
router.get('/drones/price', getDronesByPriceRangeHandler);

export default router;
