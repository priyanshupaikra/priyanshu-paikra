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
    <div className="min-h-screen flex flex-col terminal-bg">
      <TerminalHeader />
      <TerminalContent 
        history={history}
        terminalRef={terminalRef}
      />
      <CommandInput
        currentCommand={currentCommand}
        onCommandChange={handleCommandChange}
        onKeyDown={handleKeyDown}
        onExecuteCommand={executeCommand}
      />
    </div>
  );
}
