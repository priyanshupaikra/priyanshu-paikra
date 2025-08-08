import { TerminalHeader } from '@/components/terminal-header';
import { TerminalContent } from '@/components/terminal-content';
import { CommandInput } from '@/components/command-input';
import { useTerminal } from '@/hooks/use-terminal';

export default function Terminal() {
  const {
    history,
    currentCommand,
    terminalRef,
    executeCommand,
    handleKeyDown,
    handleCommandChange
  } = useTerminal();

  return (
    <div className="min-h-screen flex flex-col terminal-bg overflow-hidden">
      <TerminalHeader />
      <div className="flex-1 flex flex-col lg:flex-row min-h-0">
        <TerminalContent 
          history={history}
          terminalRef={terminalRef}
          currentCommand={currentCommand}
          onCommandChange={handleCommandChange}
          onKeyDown={handleKeyDown}
          onExecuteCommand={executeCommand}
        />
      </div>
    </div>
  );
}
