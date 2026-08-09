# How to Add APK for Download

## Step 1: Get Your APK File

You have two options:

### Option A: Download from Expo (Current Link)
1. Open this link in your browser:
   https://expo.dev/artifacts/eas/IchBfO0BeUZgX2Gna2TLX-K7yDTJ9-996Wj9w_VaQKM.apk
2. The APK will download (with a long filename)
3. Rename the file to: `SOS-AI.apk`

### Option B: Build Fresh APK
If you have the source code:
```bash
eas build --platform android --profile preview
```

## Step 2: Place APK in Public Folder

1. Take your `SOS-AI.apk` file
2. Place it in: `C:\Users\SRI NAGA DURGA K\sos-web\public\SOS-AI.apk`

The public folder structure should look like:
```
public/
  └── SOS-AI.apk
```

## Step 3: The Website is Already Configured

The website is already set up to use `/SOS-AI.apk` as the download path. Once you place the file in the public folder, the download buttons will work automatically!

## Step 4: Test

1. Place the APK file in public folder
2. Restart the dev server:
   ```bash
   npm run dev
   ```
3. Click any "Download APK" button on the website
4. It should download as `SOS-AI.apk` with the correct name

## For Production Deployment

When you deploy to Vercel/Netlify/GitHub Pages:
- The public folder contents are automatically served
- Your APK will be available at: `https://your-domain.com/SOS-AI.apk`
- All download buttons will work perfectly

## File Size Note

- APK is ~71 MB (normal for React Native apps)
- Make sure your hosting service supports files of this size
- Vercel/Netlify have limits, consider using:
  - GitHub Releases for hosting large files
  - Google Drive/Dropbox with direct download links
  - AWS S3 or similar cloud storage
