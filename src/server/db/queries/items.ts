import { Query } from '../index';
import { Item } from '../../models';

const get_all = () => Query<Item[]>('SELECT * FROM Items');
const get_by_id = (id: string) => Query<Item[]>('SELECT * FROM Items WHERE id=?', [id]);
const create = (id: string, content: string) => Query('INSERT INTO Items (id, content) VALUES (?,?)', [id, content]);
const update = (id: string, status: number) => Query('UPDATE Items SET is_finished=? WHERE id=?', [status, id]);
const destroy = (id: string) => Query('DELETE FROM Items WHERE id=?', [id]);

export default {
    get_all,
    get_by_id,
    create,
    update,
    destroy
}