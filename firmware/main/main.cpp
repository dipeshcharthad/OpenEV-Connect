#include <Arduino.h>
#include <BluetoothSerial.h>
BluetoothSerial SerialBT;

float batteryVoltage = 48.5;
float motorTemp = 35.2;
float speed = 42.7;

void setup() {
  Serial.begin(115200);
  SerialBT.begin("OpenEV-ESP32");
}

void loop() {
  String data = "{\"battery\":" + String(batteryVoltage) +
                ",\"temperature\":" + String(motorTemp) +
                ",\"speed\":" + String(speed) + "}";
  SerialBT.println(data);
  delay(1000);
}
