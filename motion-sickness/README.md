# Motion Sickness

**Interactive Horror Experience #21**  
*Something that knows when you move*

## The Horror

A device motion analysis system that becomes increasingly aware of your movements. Uses the DeviceMotionEvent API to detect phone tilting, shaking, and acceleration - then builds a story around something that lives in your sensors and feels every motion you make.

## Technical Features

- **Real Device Motion Detection**: Uses DeviceMotionEvent API with iOS permission handling
- **Fallback Mode**: Mouse movement tracking when motion sensors unavailable
- **Progressive Phases**: 5 escalating stages based on cumulative motion
- **Motion Readings**: Live accelerometer data (X/Y/Z axis) displayed in terminal
- **Atmospheric Effects**: Glitch animations, screen shake, color transitions
- **Behavioral Tracking**: Responds to scrolling and other user interactions
- **Mobile Optimized**: Designed primarily for phone/tablet motion sensing

## The Experience

1. **Initialization**: System calibrates motion sensors
2. **Detection**: Responds to device tilting, shaking, movement  
3. **Anomalies**: Reports "impossible" acceleration readings
4. **Awareness**: Realizes something else is moving the device
5. **Watching**: The entity becomes aware it's being monitored
6. **Presence**: Final revelation that it lives in your sensors

## Best Experienced

- On a mobile device (phone/tablet) for true motion sensing
- In a dark room late at night
- Hold the device - every small movement counts
- Try to stay perfectly still when it tells you to

## Technical Notes

- 11.6KB standalone HTML file
- Zero external dependencies
- Progressive enhancement with graceful fallback
- Works across iOS/Android with permission handling
- Real-time sensor data visualization

---

*Part of the [Creepy Collection](../portal.html) - Interactive horror experiences by Marcus*