

function equiposRouter(express){
    const router = express.Router()
    const { getAll, getById, create, update, remove } = require('../controllers/equipos.controller.js')

    router.get('/', getAll)
    router.get('/:id', getById)
    router.post('/', create)
    router.put('/:id', update)
    router.delete('/:id', remove)

    router.get('/:id/jugadores', (req, res) => {
        console.log('getById', req.params.id);
        return res.json({
            'origen' : 'Equipo -> Jugadores',
            'id' : req.params.id
        });
    })

    router.post('/:id/colaborador', (req, res) => {
        console.log('Equipo', req.params.id);
        return res.json({
            'origen' : 'Equipo -> Colaborador',
            'id'     : req.params.id,
            'data'   : req.body
        });
    });

    return router
}


module.exports = equiposRouter