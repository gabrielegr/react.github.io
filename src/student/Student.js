class Student {
    constructor(carnet, name, horario) {
        this._carnet = carnet;
        this._nombre = name;
        this._horario= horario;
    }

    get carnet() { return this._carnet }
    get nombre() { return this._nombre }
    get horario() { return this._horario }

    // Hacen falta las validaciones antes de la asignación
    set carnet(carnet) { this._carnet = carnet }
    set nombre(nombre) { this._nombre = nombre }
    set horario(horario) { this._horario = horario }
}

export default Student;