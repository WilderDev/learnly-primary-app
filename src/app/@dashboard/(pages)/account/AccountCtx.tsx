'use client';

import {
  BellIcon,
  CreditCardIcon,
  FaceSmileIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AccountProfileTab from './AccountProfileTab';
import AccountSubscriptionTab from './AccountSubscriptionTab';
import AccountNotificationsTab from './AccountNotificaitonsTab';
import AccountChildrenTab from './AccountChildrenTab';
import DashMainCol from '../../(layout)/DashMainCol';

// * Data
// Tabs
const tabs = [
  {
    id: 'profile',
    title: 'Profile',
    icon: UserIcon,
    component: AccountProfileTab,
  },
  {
    id: 'subscription',
    title: 'Subscription',
    icon: CreditCardIcon,
    component: AccountSubscriptionTab,
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: BellIcon,
    component: AccountNotificationsTab,
  },
  {
    id: 'children',
    title: 'Children',
    icon: FaceSmileIcon,
    component: AccountChildrenTab,
  },
];

// * Initialization
// Props
interface IAccountCtxProps {
  tabs: typeof tabs;
  activeTabId: string;
  setActiveTabId: (tabId: string) => void;
} // Create an interface for the context props

// Initial State
const initialState: IAccountCtxProps = {
  tabs,
  activeTabId: tabs[0].id,
  setActiveTabId: () => {},
}; // Create a context object with default value

// Context
const AccountCtx = createContext(initialState); // Create Context Object

// * Provider
export function AccountProvider({ children }: PropsWithChildren) {
  // * Context
  const view = useSearchParams().get('view'); // Get the view from the url if any

  // * State
  const [activeTabId, setActiveTabId] = useState(tabs[0].id); // Set the active tab id to the first tab id

  // * Handlers

  // * Effects
  // Set the active tab id to the view from the url if any
  useEffect(() => {
    if (view) {
      const tabId = tabs.find((tab) => tab.id === view)?.id;

      tabId && setActiveTabId(tabId);
    }
  }, [view]);

  // * Value
  const value: IAccountCtxProps = useMemo(
    () => ({
      tabs,
      activeTabId,
      setActiveTabId,
    }),
    [activeTabId, setActiveTabId],
  ); // Create memoized value object

  // * Render
  return (
    <AccountCtx.Provider value={value}>
      {/* Children */}
      {children}

      {/* Main Column */}
      <DashMainCol>
        {/* Active Panel */}
        {tabs.find((tab) => tab.id === activeTabId)?.component()}
      </DashMainCol>
    </AccountCtx.Provider>
  );
}

// * Hook
export function useAccount() {
  const ctx = useContext(AccountCtx); // Get the context object

  // Throw an error if the context object is undefined
  if (!ctx) {
    throw new Error('useAccount must be used within a AccountProvider');
  }

  return ctx; // Return the context object to be used in the component
}

// POST_MVP: Data Privacy Tab
// ~~ Account Privacy (public or private profile)
// ~~ Data Encryption (Inform parents of data encryption)
// ~~ Data Deletion (Inform parents of data deletion)
// ~~ Third-Party App Permissions (Display list of third-party apps and permissions)
// ~~ Data Export (Allow parents to export data)
// ~~Links to PP & TOC
