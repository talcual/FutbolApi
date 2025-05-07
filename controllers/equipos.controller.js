
const equipos = [
    { id: 1, nombre: 'Barcelona', pais: 'España' },
    { id: 2, nombre: 'Real Madrid', pais: 'España' },
    { id: 3, nombre: 'Boca Juniors', pais: 'Argentina' },
    { id: 4, nombre: 'River Plate', pais: 'Argentina' },
    { id: 5, nombre: 'Manchester United', pais: 'Inglaterra' },
    { id: 6, nombre: 'Liverpool', pais: 'Inglaterra' },
];

module.exports = {
    getAll: (req, res) => {
        const { q } = req.query;  
        let equipos_filter = equipos.filter(equipo => {
            if (q) {
                return equipo.pais.toLowerCase().includes(q.toLowerCase());
            }
        }) || equipos;
    
        res.json(equipos_filter);
    },
    getById: (req, res) => {
        console.log('getById')
        return res.json({});
    },
    create: (req, res) => {
        
    },
    update: (req, res) => {

    },
    remove: (req, res) => {
        
    }
}