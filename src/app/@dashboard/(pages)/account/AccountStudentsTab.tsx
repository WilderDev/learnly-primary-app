import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import AccountStudentsAddModal from './AccountStudentsAddModal';
import AccountStudentsDetailsModal from './AccountStudentsDetailsModal';
import AccountStudentsEditModal from './AccountStudentsEditModal';
import AccountStudentsList from './AccountStudentsList';

// * Component
export default function AccountStudentsTab() {
  // * Render
  return (
    <DashPanel colNum={1}>
      <DashPanelHeader title="Your Students" />

      {/* List of Students */}
      <AccountStudentsList />

      {/* Add Child Modal */}
      <AccountStudentsAddModal />

      {/* Edit Child Modal */}
      <AccountStudentsEditModal />

      {/* Details Child Modal */}
      <AccountStudentsDetailsModal />
    </DashPanel>
  );
}
