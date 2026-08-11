import React from 'react'

const APK_URL = 'https://expo.dev/artifacts/eas/IchBfO0BeUZgX2Gna2TLX-K7yDTJ9-996Wj9w_VaQKM.apk'

export default function DownloadButton({ className = "", text = "Download APK →", variant = "primary" }) {
  const primaryStyles = "inline-flex items-center px-7 py-4 bg-coral text-white font-medium rounded-lg hover:bg-coral/90 transition-colors cursor-pointer"
  const secondaryStyles = "inline-flex items-center px-7 py-4 border-2 border-text text-text font-medium rounded-lg hover:bg-text hover:text-background transition-colors cursor-pointer"
  const linkStyles = "text-text/70 hover:text-coral transition-colors cursor-pointer"

  const buttonStyles = variant === 'primary' ? primaryStyles : variant === 'secondary' ? secondaryStyles : linkStyles

  return (
    <a
      href={APK_URL}
      download="SOS-AI.apk"
      className={`${buttonStyles} ${className}`}
    >
      {text}
    </a>
  )
}