function cargaPuntuaciones2() {

    db =db.getSiblingDB('curso');

    db.puntuaciones2.drop();

    for (let i = 0; i < 1500000; i++) {
        puntuaciones2Estudiante = {
            preguntas : 100*Math.random(),
            ejercicios : 100*Math.random(),
            tareas : 100*Math.random(),
            examen : 100*Math.random(),
        };
        db.puntuaciones2.insert({
            idEstudiante : i + 1,
            puntuaciones : puntuaciones2Estudiante
        })
        
    }
}



