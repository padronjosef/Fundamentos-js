function Persona (nombre, apellido, altura, genero) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  this.genero = genero
  this.especie = 'humano'
}

Persona.prototype.saludar = function () {
  console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.decirAltura = function() {
  if(this.altura > 1.8) {
    this.genero === 'masculino' ? console.log('Soy alto') : console.log('Soy alta')
  }
  else{
    this.genero === 'masculino' ? console.log('Soy bajo') : console.log('Soy baja')
  }
}



var jose = new Persona('Jose', 'Padron', '1.9', 'masculino')
var daniela = new Persona('daniela', 'Padron', '1.7', 'femenino')
var natalia = new Persona('natalia', 'Fernandez', '1.2', 'femenino')

jose.saludar()

jose.decirAltura()