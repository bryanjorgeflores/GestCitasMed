import { Injectable } from "@angular/core";

@Injectable()

export class UsersService {
  users: any = {
    nombre: 'DoctorA',
    celular: '975810578',
    pacientes: [
      {
        id: '1',
        nombre: 'Paciente1',
        celular: '999999999',
        estado: true,
        citas: [ 
	        { fecha: 110, estado: 'Espera', descripcion: 'des1' }, 
	        { fecha: 160, estado: 'Espera', descripcion: 'desc 2' }, 
	        { fecha: 180, estado: 'Espera', descripcion: 'desc 3' }, 
	        { fecha: 200, estado: 'Espera', descripcion: 'desc21' }
	      ],
        citaUltima: 0
      },
      {
        id: '2',
        nombre: 'Paciente2',
        celular: '999999994',
        estado: false,
        citas: [ 
          { fecha: 80, estado: 'Espera', descripcion: '2' }, 
          { fecha: 100, estado: 'Espera', descripcion: '42' }, 
          { fecha: 110, estado: 'Espera', descripcion: '21' }, 
          { fecha: 120, estado: 'Espera', descripcion: '12' }
        ],
        citaUltima: 0
      },
      {
        id: '3',
        nombre: 'Paciente3',
        celular: '999949999',
        estado: true,
        citas: [ 
          { fecha: 90, estado: 'Espera', descripcion: '14' }, 
          { fecha: 130, estado: 'Espera', descripcion: '15' }, 
          { fecha: 150, estado: 'Espera', descripcion: '13' }, 
          { fecha: 300, estado: 'Espera', descripcion: '28' }
        ],
        citaUltima: 0
      },
      {
        id: '4',
        nombre: 'Paciente4',
        celular: '999949999',
        estado: true,
        citas: [ 
          { fecha: 90, estado: 'Espera', descripcion: '42' }, 
          { fecha: 110, estado: 'Espera', descripcion: '21' }, 
          { fecha: 150, estado: 'Espera', descripcion: '12' }, 
          { fecha: 300, estado: 'Espera', descripcion: '42' }
        ],
        citaUltima: 0
      },
      {
        id: '5',
        nombre: 'Paciente1',
        celular: '999999999',
        estado: true,
        citas: [ 
	        { fecha: 110, estado: 'Espera', descripcion: '42' }, 
	        { fecha: 160, estado: 'Espera', descripcion: '21' }, 
	        { fecha: 180, estado: 'Espera', descripcion: '121' }, 
	        { fecha: 200, estado: 'Espera', descripcion: '42' }
	      ],
        citaUltima: 0
      },
      {
        id: '6',
        nombre: 'Paciente2',
        celular: '999999994',
        estado: false,
        citas: [ 
          { fecha: 80, estado: 'Espera', descripcion: '221' }, 
          { fecha: 100, estado: 'Espera', descripcion: '12' }, 
          { fecha: 110, estado: 'Espera', descripcion: '34' }, 
          { fecha: 120, estado: 'Espera', descripcion: '454' }
        ],
        citaUltima: 0
      },
      {
        id: '7',
        nombre: 'Paciente3',
        celular: '999949999',
        estado: true,
        citas: [ 
          { fecha: 90, estado: 'Espera', descripcion: '45' }, 
          { fecha: 130, estado: 'Espera', descripcion: '122' }, 
          { fecha: 150, estado: 'Espera', descripcion: '21' }, 
          { fecha: 300, estado: 'Espera', descripcion: '21' }
        ],
        citaUltima: 0
      },
      {
        id: '8',
        nombre: 'Paciente4',
        celular: '999949999',
        estado: true,
        citas: [ 
          { fecha: 90, estado: 'Espera', descripcion: '54' }, 
          { fecha: 110, estado: 'Espera', descripcion: '54' }, 
          { fecha: 150, estado: 'Espera', descripcion: '21' }, 
          { fecha: 300, estado: 'Espera', descripcion: '21' }
        ],
        citaUltima: 0
      },
      {
        id: '9',
        nombre: 'Paciente1',
        celular: '999999999',
        estado: true,
        citas: [ 
	        { fecha: 110, estado: 'Espera', descripcion: '21' }, 
	        { fecha: 160, estado: 'Espera', descripcion: '12' }, 
	        { fecha: 180, estado: 'Espera', descripcion: '12' }, 
	        { fecha: 200, estado: 'Espera', descripcion: '21' }
	      ],
        citaUltima: 0
      },
      {
        id: '10',
        nombre: 'Paciente2',
        celular: '999999994',
        estado: false,
        citas: [ 
          { fecha: 80, estado: 'Espera', descripcion: '12' }, 
          { fecha: 100, estado: 'Espera', descripcion: '21' }, 
          { fecha: 110, estado: 'Espera', descripcion: '12' }, 
          { fecha: 120, estado: 'Espera', descripcion: '21' }
        ],
        citaUltima: 0
      },
      {
        id: '11',
        nombre: 'Paciente3',
        celular: '999949999',
        estado: true,
        citas: [ 
          { fecha: 90, estado: 'Espera', descripcion: '21' }, 
          { fecha: 130, estado: 'Espera', descripcion: '87' }, 
          { fecha: 150, estado: 'Espera', descripcion: '78' }, 
          { fecha: 300, estado: 'Espera', descripcion: '789' }
        ],
        citaUltima: 0
      },
      { id: '12', 
        nombre: 'Paciente4',
        celular: '999949999',
        estado: true,
        citas: [ 
          { fecha: 90, estado: 'Espera', descripcion: '54' }, 
          { fecha: 110, estado: 'Espera', descripcion: '521' }, 
          { fecha: 150, estado: 'Espera', descripcion: '21' }, 
          { fecha: 300, estado: 'Espera', descripcion: '5454' }
        ],
        citaUltima: 0
      },
      { id: '13',
        nombre: 'Paciente1',
        celular: '999999999',
        estado: true,
        citas: [ 
	        { fecha: 110, estado: 'Espera', descripcion: '24d21' }, 
	        { fecha: 160, estado: 'Espera', descripcion: '242d1' }, 
	        { fecha: 180, estado: 'Espera', descripcion: '2421d' }, 
	        { fecha: 200, estado: 'Espera', descripcion: '24d21' }
	      ],
        citaUltima: 0
      },
      { id: '14',
        nombre: 'Paciente2',
        celular: '999999994',
        estado: false,
        citas: [ 
          { fecha: 80, estado: 'Espera', descripcion: '2a14' }, 
          { fecha: 100, estado: 'Espera', descripcion: '2s14' }, 
          { fecha: 110, estado: 'Espera', descripcion: '214' }, 
          { fecha: 120, estado: 'Espera', descripcion: '21a4' }
        ],
        citaUltima: 0
      },
      { id: '15',
        nombre: 'Paciente3',
        celular: '999949999',
        estado: true,
        citas: [ 
          { fecha: 90, estado: 'Espera', descripcion: '214' }, 
          { fecha: 130, estado: 'Espera', descripcion: '2d14' }, 
          { fecha: 150, estado: 'Espera', descripcion: '2d14' }, 
          { fecha: 300, estado: 'Espera', descripcion: '214' }
        ],
        citaUltima: 0
      },
      { id: '16',
        nombre: 'Paciente4',
        celular: '999949999',
        estado: true,
        citas: [ 
          { fecha: 90, estado: 'Espera', descripcion: 'a' }, 
          { fecha: 110, estado: 'Espera', descripcion: 'gs' }, 
          { fecha: 150, estado: 'Espera', descripcion: 'd' }, 
          { fecha: 300, estado: 'Espera', descripcion: 'a' }
        ],
        citaUltima: 0
      },
      { id: '17',
        nombre: 'Paciente1',
        celular: '999999999',
        estado: true,
        citas: [ 
	        { fecha: 110, estado: 'Espera', descripcion: '221' }, 
	        { fecha: 160, estado: 'Espera', descripcion: '512' }, 
	        { fecha: 180, estado: 'Espera', descripcion: '212' }, 
	        { fecha: 200, estado: 'Espera', descripcion: '77' }
	      ],
        citaUltima: 0
      },
      { id: '18',
        nombre: 'Paciente2',
        celular: '999999994',
        estado: false,
        citas: [ 
          { fecha: 80, estado: 'Espera', descripcion: '512' }, 
          { fecha: 100, estado: 'Espera', descripcion: 'd' }, 
          { fecha: 110, estado: 'Espera', descripcion: 'a' }, 
          { fecha: 120, estado: 'Espera', descripcion: 'as' }
        ],
        citaUltima: 0
      },
      { id: '19',
        nombre: 'Paciente3',
        celular: '999949999',
        estado: true,
        citas: [ 
          { fecha: 90, estado: 'Espera', descripcion: 'sfsd' }, 
          { fecha: 130, estado: 'Espera', descripcion: '24' }, 
          { fecha: 150, estado: 'Espera', descripcion: '452' }, 
          { fecha: 300, estado: 'Espera', descripcion: '12' }
        ],
        citaUltima: 0
      },
      { id: '20',
        nombre: 'Paciente4',
        celular: '999949999',
        estado: true,
        citas: [ 
          { fecha: 90, estado: 'Espera', descripcion: '32' }, 
          { fecha: 110, estado: 'Espera', descripcion: '845hgg' }, 
          { fecha: 150, estado: 'Espera', descripcion: '@@' }, 
          { fecha: 300, estado: 'Espera', descripcion: '24@' }
        ],
        citaUltima: 0
      }
    ]
  };

  constructor() {

  }

  getUsers() {
    return this.users;
  }

  
}