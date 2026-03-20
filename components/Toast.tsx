'use client'

import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'

interface ToastProps {
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
  onClose: () => void
}

export default function Toast({ type, message, onClose }: ToastProps) {
  const variants = {
    success: {
      bg: 'bg-green-500/20',
      border: 'border-green-500/50',
      text: 'text-green-100',
      icon: <CheckCircle className="h-5 w-5" />,
    },
    error: {
      bg: 'bg-red-500/20',
      border: 'border-red-500/50',
      text: 'text-red-100',
      icon: <AlertCircle className="h-5 w-5" />,
    },
    info: {
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/50',
      text: 'text-blue-100',
      icon: <Info className="h-5 w-5" />,
    },
    warning: {
      bg: 'bg-yellow-500/20',
      border: 'border-yellow-500/50',
      text: 'text-yellow-100',
      icon: <AlertTriangle className="h-5 w-5" />,
    },
  }

  const variant = variants[type]

  return (
    <div
      className={`${variant.bg} ${variant.border} ${variant.text} border rounded-lg p-4 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200`}
    >
      <div className="flex-shrink-0 mt-0.5">{variant.icon}</div>
      <p className="flex-1 text-sm">{message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
