#include <ESP8266WiFi.h> 

// Configurações para o WiFi
const char* ssid = "Unifil Computacao"; // nome da sua rede WiFi
const char* password = ""; // senha da sua rede WiFi

void setup() {
  // Inicia a comunicação serial
  Serial.begin(115200);
  delay(10);

  // Conecta ao WiFi
  Serial.println();
  Serial.print("Conectando-se a ");
  Serial.println(ssid);
  
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi conectado com sucesso!");
  Serial.println("Endereço IP: ");
  Serial.println(WiFi.localIP());
  Serial.println("Endereço MAC: ");
  Serial.println(WiFi.macAddress());
}

void loop() {
  // Aqui você pode adicionar seu código para rodar continuamente
}
