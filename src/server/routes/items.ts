import * as express from 'express';
import db_items from '../db/queries/items';
import { v4 as uuid_v4 } from 'uuid';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const items = await db_items.get_all();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error!", error: error.sqlMessage });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [item] = await db_items.get_by_id(id);
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: "Error!", error: error.sqlMessage });
    }
});

router.post('/', async (req, res) => {
    const id = uuid_v4();
    const { content } = req.body;

    try {
        await db_items.create(id, content);
        res.status(201).json({ message: "The item was successfully created", id });
    } catch (error) {
        res.status(500).json({ message: "Error!", error: error.sqlMessage });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { is_finished } = req.body;

    try {
        const updatedItem = await db_items.update(id, is_finished);

        if (updatedItem.affectedRows === 0) {
            res.status(404).json({ message: "Error! That resource with the ID was not found." });
        } else {
            res.status(200).json({ message: "Great Scott, that update worked!" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error!", error: error.sqlMessage });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleteResults = await db_items.destroy(id);

        if (deleteResults.affectedRows === 0) {
            res.status(404).json({ message: "Error! That resource with the ID was not found." });
        } else {
            res.status(200).json({ message: "Great Scott, that delete worked!" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error!", error: error.sqlMessage });
    }
});

export default router;