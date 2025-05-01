import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const Dashboard = () => {
  const [data, setData] = useState({ battery: 0, temperature: 0, speed: 0 });

  useEffect(() => {
    // Simulate BLE data reception
    const interval = setInterval(() => {
      setData({
        battery: (48 + Math.random()).toFixed(2),
        temperature: (30 + Math.random() * 10).toFixed(2),
        speed: (40 + Math.random() * 10).toFixed(2)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Battery Voltage: {data.battery} V</Text>
      <Text>Motor Temperature: {data.temperature} °C</Text>
      <Text>Speed: {data.speed} km/h</Text>
    </View>
  );
};

export default Dashboard;
