import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';
import AccountProfileDetailsForm from './AccountProfileDetailsForm';
import AccountTeachingPreferencesForm from './AccountTeachingPreferencesForm';

// * Component
export default function AccountProfileTab() {
  // * Render
  return (
    <>
      <DashPanel colNum={1}>
        {/* Header */}
        <DashPanelHeader title="Update Your Profile Details" />

        {/* Form */}
        <AccountProfileDetailsForm />
      </DashPanel>

      {/* Teaching Preferences */}
      <DashPanel colNum={2}>
        {/* Header */}
        <DashPanelHeader title="Update Your Teaching Preferences" />

        {/* Form */}
        <AccountTeachingPreferencesForm />
      </DashPanel>
    </>
  );
}

// <section className="flex flex-col 2xl:flex-row 2xl:justify-between gap-y-12 2xl:gap-y-0 2xl:gap-x-12">
//   {/* Profile Details */}
// <DashPanel className="w-full 2xl:w-8/12" colNum={1}>
//   {/* Header */}
//   <DashPanelHeader title="Update Your Profile Details" />

//   {/* Form */}
//   <AccountProfileDetailsForm />
// </DashPanel>

// {/* Teaching Preferences */}
// <DashPanel className="w-full 2xl:w-4/12" colNum={2}>
//   {/* Header */}
//   <DashPanelHeader title="Update Your Teaching Preferences" />

//   {/* Form */}
//   <AccountTeachingPreferencesForm />
// </DashPanel>
// </section>
