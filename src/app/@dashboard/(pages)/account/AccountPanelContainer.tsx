'use client';

import { DashPanel } from '../../(layout)/DashPanel';
import { useAccount } from './AccountCtx';

// * Component
export default function AccountPanelContainer() {
  // * Hooks / Context
  const { tabs, activeTabId } = useAccount();

  //   * State
  const activeTab = tabs.find((tab) => tab.id === activeTabId)?.component();

  // * Render
  return (
    <DashPanel colNum={1}>
      {/* Account Panel Header */}

      {/* Account Panel Content */}
      {activeTab}
    </DashPanel>
  );
}
