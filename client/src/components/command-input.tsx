import { useEffect, useRef } from 'react';

interface CommandInputProps {
  currentCommand: string;
  onCommandChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onExecuteCommand: (command: string) => void;
}

export function CommandInput({ 
  currentCommand, 
  onCommandChange, 
  onKeyDown, 
  onExecuteCommand 
}: CommandInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const quickCommands = ['about', 'projects', 'experience', 'connect'];

  return (
    <div className="terminal-gray border-t border-green-400 p-4">
      <div className="flex items-center">
        <span className="text-green-400 mr-2">user@portfolio:~$</span>
        <input 
          ref={inputRef}
          type="text" 
          value={currentCommand}
          onChange={(e) => onCommandChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="bg-transparent text-green-400 outline-none flex-1 font-mono"
          autoComplete="off"
        />
        <span className="cursor ml-1">|</span>
      </div>
      
      {/* Mobile Command Buttons */}
      <div className="mt-3 sm:hidden">
        <div className="text-xs terminal-muted mb-2">Quick Commands:</div>
        <div className="flex flex-wrap gap-2">
          {quickCommands.map((command) => (
            <button
              key={command}
              onClick={() => onExecuteCommand(command)}
              className="terminal-gray border border-green-400 px-2 py-1 text-xs rounded hover:bg-green-400 hover:text-black transition-colors"
            >
              {command}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
