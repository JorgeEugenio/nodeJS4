const Puntuaciones = require('../models/Puntuaciones')
async function addPuntuaciones(req,res){
    
        for (let i = 0; i < 1500000; i++) {
            puntuaciones2Estudiante = {
                preguntas : 100*Math.random(),
                ejercicios : 100*Math.random(),
                tareas : 100*Math.random(),
                examen : 100*Math.random()
            };
            const valor = {
                idEstudiante : i + 1,
                puntuaciones : puntuaciones2Estudiante
            }
            const puntuaciones = Puntuaciones(valor)
            await puntuaciones.save()
        }
        await Puntuaciones.find({}).exec((err, puntuaciones) =>{
            if (err) {
                res.send({
                    ok: false,
                    err
                });
            }
            res.send({
                ok: true
                //puntuaciones
            })
        })
}

async function getPuntuaciones(req,res){
    const puntuaciones =await Puntuaciones.find({"puntuaciones.ejercicios" : { '$gt' : 90 }})
                        .countDocuments()
                        .exec((err,result)=>{
                            res.send({
                                ok:result
                            })
                        })
}
async function generarIndice(req, res){
    //await Puntuaciones.createIndexes({"puntuaciones.preguntas" : 1 })
    //let jo = await Puntuaciones.ensureIndexes({"puntuaciones.examen" : 1 })
    let jo = await Puntuaciones.ensureIndexes(function (err) {
        if (err) return handleError(err);
        res.send({
            ok: 'Fatto!!',
            jo
        })
      });
    
}

module.exports = {
      addPuntuaciones,
      getPuntuaciones,
      generarIndice
}