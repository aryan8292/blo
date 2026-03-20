'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import Toast from './Toast'

interface ToastMessage {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
}

interface ToastContextType {
  toast: (type: 'success' | 'error' | 'info' | 'warning', message: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const toast = useCallback(
    (type: 'success' | 'error' | 'info' | 'warning', message: string) => {
      const id = Date.now().toString()
      setToasts((prev) => [...prev, { id, type, message }])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 3000)
    },
    []
  )

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            type={t.type}
            message={t.message}
            onClose={() => removeToast(t.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}
