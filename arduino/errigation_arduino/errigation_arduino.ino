#include <ArduinoJson.h>

JsonDocument doc; //création du document JSON en sortie du programme

void setup() {
  // put your setup code here, to run once:
  pinMode(6, OUTPUT);
  Serial.begin(9600);
  while(!Serial) continue;


  //initialisation sérialisation
  
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(6, HIGH);

  //sérialisation
  //inscription des valeurs dans le .json
  doc["temperature"] = 29;
  doc["humidity1"] = 10;
  doc["humidity2"] = 67; 
  doc["lightIntensity"] = 90;

  //
  char output[256];
  serializeJson(doc, Serial); //crée une string à partir de doc (le fichier json) et l'envoie dans le terminal (on peut l'envoyer ailleurs  )
  delay(1000);
}
