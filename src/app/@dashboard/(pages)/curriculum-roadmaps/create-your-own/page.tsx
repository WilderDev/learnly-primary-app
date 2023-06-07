import DashMainCol from '@/app/@dashboard/(layout)/DashMainCol';
import {
  DashPanel,
  DashPanelHeader,
} from '@/app/@dashboard/(layout)/DashPanel';
import DashSideCol from '@/app/@dashboard/(layout)/DashSideCol';

// * Page
export default function CreateYourOwnCurriculumPage() {
  return (
    <>
      {/* Main Column */}
      <DashMainCol>
        {/*  */}
        <DashPanel colNum={1}>
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
      </DashSideCol>
    </>
  );
}
