import time
import random

while True:
    data = {
        "battery": round(48 + random.random(), 2),
        "temperature": round(30 + random.random() * 10, 2),
        "speed": round(40 + random.random() * 10, 2)
    }
    print(data)
    time.sleep(1)
