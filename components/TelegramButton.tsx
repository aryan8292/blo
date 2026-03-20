'use client'

export default function TelegramButton() {
  return (
    <a
      href="https://t.me/StreamTub_bot"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 hover:shadow-xl"
      title="Chat with us on Telegram"
    >
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.22-.054-.336-.373-.116l-6.869 4.332-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.461c.54-.203 1.01.131.832 1.014z" />
      </svg>
    </a>
  )
}
