export function TerminalHeader() {
  return (
    <div className="terminal-gray border-b border-green-400 p-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-sm">portfolio@terminal:~$</span>
      </div>
      <div className="text-sm terminal-muted">
        Interactive Python Developer Portfolio
      </div>
    </div>
  );
}
