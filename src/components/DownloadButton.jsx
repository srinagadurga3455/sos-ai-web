import React from 'react'

export default function DownloadButton({ className = "", text = "Download APK →", variant = "primary" }) {
  const handleDownload = () => {
    // Use local APK file from public folder
    const link = document.createElement('a')
    link.href = '/SOS-AI.apk'
    link.download = 'SOS-AI.apk'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const primaryStyles = "inline-flex items-center px-7 py-4 bg-teal text-white font-medium rounded-lg hover:bg-teal/90 transition-colors cursor-pointer"
  const secondaryStyles = "inline-flex items-center px-7 py-4 border-2 border-text text-text font-medium rounded-lg hover:bg-text hover:text-background transition-colors cursor-pointer"
  const linkStyles = "text-text/70 hover:text-teal transition-colors cursor-pointer"

  const buttonStyles = variant === 'primary' ? primaryStyles : variant === 'secondary' ? secondaryStyles : linkStyles

  return (
    <button
      onClick={handleDownload}
      className={`${buttonStyles} ${className}`}
      type="button"
    >
      {text}
    </button>
  )
}
