# Adding Screenshots to the Website

## Quick Setup

### 1. Save the SOS Sent Screenshot

Save the first screenshot (the full app screen) as:
```
src/assets/sos-sent.png
```

The Hero component is already configured to use this image.

### 2. Add More Screenshots (Optional)

For feature blocks and other sections, save additional screenshots to `src/assets/`:

- `src/assets/sos-countdown.png` - SOS countdown screen (3s)
- `src/assets/lifelink-listening.png` - AI listening screen
- `src/assets/lifelink-speaking.png` - AI responding screen
- `src/assets/hospital-map.png` - TriageMap screen
- `src/assets/symptom-checker.png` - Symptom checker screen
- `src/assets/medicine-reminder.png` - PillPath screen
- `src/assets/doctors-list.png` - Find doctors screen
- `src/assets/emergency-contacts.png` - Emergency contacts screen

### 3. Update Feature Components

Once you have screenshots, update `src/components/FeatureBlock.jsx` to use real images instead of placeholders.

Example:
```jsx
import hospitalMapImage from '../assets/hospital-map.png'

// In the render:
<img 
  src={hospitalMapImage} 
  alt="Hospital map showing specialty filters"
  className="w-full h-full object-cover"
/>
```

## Current Status

✅ Hero section - Ready for `src/assets/sos-sent.png`
⏳ Feature blocks - Using placeholder gradients
⏳ Flow screens - Using placeholder gradients

## Alternative: Using Public Folder

If you prefer, you can also place images in the `public/` folder and reference them directly:

```
public/images/sos-sent.png
```

Then use in components:
```jsx
<img src="/images/sos-sent.png" alt="..." />
```
