class Persona {
  constructor (nombre, apellido, altura, genero) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.genero = genero
    this.especie = 'humano'
  }

  saludar() {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
  }

  soyAlto() {
    return this.altura > 1.8
  }
}

class desarrollador extends Persona {
  constructor (nombre, apellido, altura) {
    super(nombre,apellido,altura)
  }

  saludar() {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
  }
}

var jose = new desarrollador('Jose', 'Padron', '1.82', 'masculino')
var daniela = new Persona('daniela', 'Padron', '1.63', 'femenino')
var natalia = new Persona('natalia', 'Fernandez', '1.21', 'femenino')