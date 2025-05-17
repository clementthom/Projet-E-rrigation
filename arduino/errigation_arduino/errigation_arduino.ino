#include <ArduinoJson.h> // Inclusion de la bibliothèque ArduinoJson

// Déclaration de la variable globale JsonDocument
StaticJsonDocument<255> measures;

void setup() {
  Serial.begin(9600); // Starts the serial communication
  randomSeed(analogRead(0)); // Initialisation du générateur de nombres aléatoires

}
void loop() {
  // Génération de valeurs aléatoires
  float temperature = random(200, 301) / 10.0; // Température entre 20.0 et 30.0
  int humidityExt = random(60, 91);              // Humidité extérieur entre 60 et 90 
  int humidity1 = random(60, 91);              // Humidité 1 entre 60 et 90
  int humidity2 = random(60, 91);              // Humidité 2 entre 60 et 90
  int lightIntensity = random(0, 6);           // Intensité lumineuse entre 0 et 5

  // Stockage des mesures dans le document JSON
  measures["mesures"]["temperature"] = temperature;
  measures["mesures"]["humidityExt"] = humidityExt;
  measures["mesures"]["humidity1"] = humidity1;
  measures["mesures"]["humidity2"] = humidity2;
  measures["mesures"]["lightIntensity"] = lightIntensity;

  // Appel de la fonction send pour envoyer les données
  send(measures);
  delay(5000);
}

// Fonction pour sérialiser et envoyer le document JSON
void send(const JsonVariant& jsonVariant) {
  String json;
  serializeJson(jsonVariant, json); // Sérialisation du document JSON en chaîne
  Serial.println(json);             // Impression de la chaîne JSON sur le moniteur série
}
