import Modal from '@/lib/components/popouts/Modal';
import AssignmentCreatorForm from '../../lesson-plans/[id]/(assignments)/AssignmentCreatorForm';

export default function AssignmentCreatorModal() {
  // TSK
  // const [userLessonPlans, setUserLessonPlans] = useState([] as any);
  // const [assignmentContent, setAssignmentContent] = useState('');

  // useEffect(() => {
  //   fetchUserLessonPlans()
  //     .then((userLessonPlans) => {
  //       setUserLessonPlans(userLessonPlans);
  //     })
  //     .catch((error) => {
  //       toast.error('Failed to get your lesson plans!');
  //     });
  // }, []);

  return (
    <>
      <Modal.Header title="Create an Assignment" />
      <Modal.Body>
        <AssignmentCreatorForm
          isModal={true}
          // lessonPlan={}
          // userLessonPlanId
        />
      </Modal.Body>
    </>
  );
}
