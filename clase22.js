function Persona (nombre, apellido, altura, genero) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  this.genero = genero
  this.especie = 'humano'
}

Persona.prototype.saludar = () => {
  console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => this.altura > 1.8

var jose = new Persona('Jose', 'Padron', '1.82', 'masculino')
var daniela = new Persona('daniela', 'Padron', '1.63', 'femenino')
var natalia = new Persona('natalia', 'Fernandez', '1.21', 'femenino')


jose.soyAlto()
daniela.soyAlto()
natalia.soyAlto()
