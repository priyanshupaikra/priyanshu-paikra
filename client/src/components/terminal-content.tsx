import { asciiArt } from '@/data/portfolio-data';
import type { HistoryEntry } from '@/hooks/use-terminal';

interface TerminalContentProps {
  history: HistoryEntry[];
  terminalRef: React.RefObject<HTMLDivElement>;
}

export function TerminalContent({ history, terminalRef }: TerminalContentProps) {
  return (
    <div 
      ref={terminalRef}
      className="flex-1 p-4 overflow-y-auto terminal-scroll"
    >
      {/* Welcome ASCII Art */}
      <pre className="text-green-400 text-xs sm:text-sm mb-6 whitespace-pre-wrap">
        {asciiArt}
      </pre>

      {/* Initial Help Text */}
      <div className="mb-4">
        <p className="text-green-400">Welcome to my interactive terminal portfolio!</p>
        <p className="text-white mt-2">Available commands:</p>
        <ul className="terminal-muted mt-1 space-y-1">
          <li>• <span className="text-green-400">about</span> - Learn about me</li>
          <li>• <span className="text-green-400">education</span> - View my educational background</li>
          <li>• <span className="text-green-400">projects</span> - Explore my projects</li>
          <li>• <span className="text-green-400">experience</span> - Check my work experience</li>
          <li>• <span className="text-green-400">certifications</span> - View my certifications</li>
          <li>• <span className="text-green-400">social</span> - Connect with me</li>
          <li>• <span className="text-green-400">help</span> - Show this help menu</li>
          <li>• <span className="text-green-400">clear</span> - Clear the terminal</li>
        </ul>
        <p className="text-yellow-400 mt-3">Type a command and press Enter to get started!</p>
      </div>

      {/* Command History Display */}
      <div>
        {history.map((entry, index) => (
          <div key={`${entry.timestamp}-${index}`}>
            {entry.type === 'command' && (
              <div className="text-green-400">{entry.content}</div>
            )}
            {entry.type === 'output' && (
              <div dangerouslySetInnerHTML={{ __html: entry.content }} />
            )}
            {entry.type === 'error' && (
              <div className="text-red-400">Command not found: {entry.content.replace('Command not found: ', '')}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
