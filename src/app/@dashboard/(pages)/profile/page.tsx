import DashMainCol from '../../(layout)/DashMainCol';
import DashSideCol from '../../(layout)/DashSideCol';
import { DashPanel, DashPanelHeader } from '../../(layout)/DashPanel';

// * Page
export default function TeacherProfilePage() {
  // * Render
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/*  */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="" />

          {/*  */}
        </DashPanel>

        {/*  */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="" />

          {/*  */}
        </DashPanel>
      </DashMainCol>

      {/* Side Column */}
      <DashSideCol>
        {/*  */}
        <DashPanel colNum={1}>
          <DashPanelHeader title="" />

          {/*  */}
        </DashPanel>

        {/*  */}
        <DashPanel colNum={2}>
          <DashPanelHeader title="" />

          {/*  */}
        </DashPanel>
      </DashSideCol>
    </>
  );
}
