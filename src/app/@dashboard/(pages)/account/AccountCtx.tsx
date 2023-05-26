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
import AccountStudentsTab from './AccountStudentsTab';
import DashMainCol from '../../(layout)/DashMainCol';
import { useUser } from '@/lib/components/providers/UserProvider';
import { UserStudent } from '@/assets/typescript/user';

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
    id: 'students',
    title: 'Students',
    icon: FaceSmileIcon,
    component: AccountStudentsTab,
  },
];

// * Initialization
// Props
interface IAccountCtxProps {
  tabs: typeof tabs;
  activeTabId: string;
  setActiveTabId: (tabId: string) => void;
  studentEditId: string | null;
  setStudentEditId: (studentId: string | null) => void;
  studentDetailsId: string | null;
  setStudentDetailsId: (studentId: string | null) => void;
  addStudentModalOpen: boolean;
  setAddStudentModalOpen: (open: boolean) => void;
  getStudentFromId: (studentId: string) => UserStudent | undefined;
} // Create an interface for the context props

// Initial State
const initialState: IAccountCtxProps = {
  tabs,
  activeTabId: tabs[0].id,
  setActiveTabId: () => {},
  studentEditId: null,
  setStudentEditId: () => {},
  studentDetailsId: null,
  setStudentDetailsId: () => {},
  addStudentModalOpen: false,
  setAddStudentModalOpen: () => {},
  getStudentFromId: () => ({} as UserStudent | undefined),
}; // Create a context object with default value

// Context
const AccountCtx = createContext(initialState); // Create Context Object

// * Provider
export function AccountProvider({ children }: PropsWithChildren) {
  // * Context / Hooks
  const view = useSearchParams().get('view'); // Get the view from the url if any
  const { students } = useUser(); // Get the students from the account context

  // * State
  const [activeTabId, setActiveTabId] = useState(tabs[0].id); // Set the active tab id to the first tab id
  const [studentEditId, setStudentEditId] = useState<string | null>(null); // Set the student edit id to null
  const [studentDetailsId, setStudentDetailsId] = useState<string | null>(null); // Set the student details id to null
  const [addStudentModalOpen, setAddStudentModalOpen] = useState(false); // Set the add student modal open state to false

  // * Handlers
  // Get student from id
  const getStudentFromId = useCallback(
    (studentId: string) => students.find((student) => student.id === studentId),
    [students],
  );

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
      studentEditId,
      setStudentEditId,
      studentDetailsId,
      setStudentDetailsId,
      addStudentModalOpen,
      setAddStudentModalOpen,
      getStudentFromId,
    }),
    [
      activeTabId,
      setActiveTabId,
      studentEditId,
      setStudentEditId,
      studentDetailsId,
      setStudentDetailsId,
      addStudentModalOpen,
      setAddStudentModalOpen,
      getStudentFromId,
    ],
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
