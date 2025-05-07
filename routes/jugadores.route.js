

function jugadoresRouter(express){
    const router = express.Router()
    //const { getAll, getById, create, update, remove } = require('../controllers/equipos.controller.js')

    router.get('/', (req, res) => {
        return res.json({
            'origen' : 'Jugadores'
        });
    })

    router.get('/:id', () => {
        console.log('getById')
        return res.json({});
    })

    router.post('/', () => {
        
    })

    router.put('/:id', () => {

    })

    router.delete('/:id', () => {
        
    })

    return router
}


module.exports = jugadoresRouter