import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import axios from 'axios';
import { Console } from 'console';
import { ReadlineParser, SerialPort } from 'serialport';

@Injectable()
export class ArduinoService implements OnApplicationBootstrap{
  serialport: SerialPort; //déclaration du port série et du parser  
  parser: ReadlineParser; //transmet des données à chaque nouvelle ligne
  onApplicationBootstrap() { //code exécuté avant de recevoir des requêtes (sorte d'initialisation)

      this.serialport = new SerialPort({path:'/dev/ttyACM0', baudRate: 9600}); //initialisation port série
      this.parser = new ReadlineParser({delimiter: '\n'});
      this.serialport.pipe(this.parser); //associe le port au parser

      this.serialport.on('error', function(err) { //si erreur sur le port série
        console.error('Erreur sur le port série : ', err.message)
      });

      this.parser.on('data', async(data: string) => { //on définit data en tant que string : source du parser
        console.log(data);
        const trimmedData = data.slice(0, -1); // Enlever les deux derniers caractères correspondant à \n d'arduino
        
        try { //bloc à tester afin de détecter d'éventuelles exceptions (revoir les cours de java)
          // Ajouter un timestamp à l'objet mesure
          const data = JSON.parse(trimmedData); //convertit la string trimmedData en objet JSON
          if (data.mesures) {
              data.mesures.timestamp = new Date().valueOf();
              // Envoyer les données au serveur JSON
              const response = await axios.post('http://localhost:3000/mesures', data.mesures); //3000 est l'adresse du serveur json  
              console.log('Data pushed to server: Measure', response.data.id);
          } else {
              console.error('Not a measure:', trimmedData);
          }
      } catch (error) {
          console.error('Error pushing data to server:', error.message);
      }
      }); 
      this.serialport.write('ROBOT PLEASE RESPOND\n');
  }

}


