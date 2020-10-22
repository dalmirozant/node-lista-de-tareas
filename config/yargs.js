const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
    };

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada/pendiente la tarea'
}

const argv = require('yargs')
                .command(
                    'crear','Crear una nueva tarea', {
                    descripcion
                })
                .command(
                    'borrar','Eliminar una tarea', {
                    descripcion
                })
                .command(
                    'actualizar','Actualizar o terminar una tarea',{
                    descripcion,
                    completado }
                })
                .help()
                .argv;

module.exports = {
    argv
}