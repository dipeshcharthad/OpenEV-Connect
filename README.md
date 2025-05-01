# OpenEV-Connect

**Modular, open-source telemetry and dashboard software for electric two-wheelers.**

This project allows makers, EV hobbyists, and developers to monitor and visualize EV data (battery, speed, GPS) in real time using an ESP32 board and a mobile app via Bluetooth or Wi-Fi.

---

## Features

- Live vehicle telemetry display (SOC, temp, speed, GPS)
- Bluetooth (BLE) and Wi-Fi support
- Cross-platform mobile app (React Native or Flutter)
- Optional data logging to Firebase or local file
- Open and extensible hardware/software architecture

---

## Project Structure

| Folder        | Description                         |
|---------------|-------------------------------------|
| `firmware/`   | Embedded firmware for ESP32         |
| `app/`        | Mobile dashboard app code           |
| `sim/`        | Python-based simulator for testing  |
| `docs/`       | Diagrams, schematics, instructions  |

---

## Getting Started

### 1. Hardware Requirements

- ESP32-WROOM or similar
- (Optional) INA219 current sensor
- (Optional) GPS Module (e.g., NEO-6M)
- Power source (Battery/USB)
- SD card module (if logging locally)

### 2. Setup Firmware

```bash
cd firmware/
# Use PlatformIO or Arduino IDE
# Flash firmware to ESP32
