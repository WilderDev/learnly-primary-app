'use client';

import { supabaseClient } from '@/lib/auth/supabaseClient';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import RightSidebarQuickReportLoading from './RightSidebarQuickReportLoading';
import { Card } from '@/lib/components/ui/Card';
import { getEventColor, getSubjectColor } from '@/lib/theme/enumColors';
import NumberTicker from '@/lib/components/ui/Ticker';
import RightSidebarQuickReportChart from './RightSidebarQuickReportChart';
import { toast } from 'sonner';

interface IProps {
  tab: number;
}

interface SidebarData {
  total_lesson_plans: number;
  total_lesson_plans_completed: number;
  assignmentsCreated: number;
  labels: string[];
  counts: number[];
  favoriteSubject: string;
}

export default function RightSidebarQuickReportContent({ tab }: IProps) {
  // State
  const [lessonPlansCreated, setLessonPlansCreated] = useState(0);
  const [lessonPlansComplete, setLessonPlansComplete] = useState(0);
  const [assignmentsCreated, setAssignmentsCreated] = useState(0);
  const [favoriteSubject, setFavoriteSubject] = useState('');
  // const [favoriteTopic, setFavoriteTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chartData, setChartData] = useState<{
    labels: string[];
    data: number[];
    maxCount: number;
  }>({
    labels: [],
    data: [],
    maxCount: 0,
  });

  // Effects
  useEffect(() => {
    const fetchData = async () => {
      // Loading State
      setIsLoading(true);

      // Sidebar Data
      const data = await getSnapshotData(tab);

      // Check for data
      if (data) {
        const labels = data.labels;
        const counts = data.counts;
        const maxCount = Math.max(...counts, 0);
        setTimeout(() => {
          setChartData({ labels, data: counts, maxCount });
          setLessonPlansCreated(data.total_lesson_plans);
          setLessonPlansComplete(data.total_lesson_plans_completed);
          setAssignmentsCreated(data.assignmentsCreated);
          setFavoriteSubject(data.favoriteSubject);
          setIsLoading(false);
        }, 0);
      } else {
        // Failed to get data
        setIsLoading(false);
        toast.error('Failed To Load Data');
      }
    };

    fetchData();
  }, [tab]);

  return (
    <>
      {isLoading ? (
        // Loading State
        <RightSidebarQuickReportLoading />
      ) : (
        <motion.div
          className="flex flex-col gap-8"
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Chart */}
          <RightSidebarQuickReportChart
            chartData={chartData}
            favoriteSubject={favoriteSubject}
          />

          <div className="flex flex-col gap-4">
            {/* Lesson Plans Created */}
            <Card
              className="border border-gray-300/20"
              decoration={getEventColor('LESSON').BG.GRADIENT}
            >
              <Card.Title className="flex justify-between overflow-hidden">
                <div>Lesson Plans Created</div>
                <NumberTicker targetValue={lessonPlansCreated} />
              </Card.Title>
            </Card>

            {/* Lesson Plans Completed */}
            <Card
              className="border border-gray-300/20"
              decoration={getEventColor('COMMUNITY').BG.GRADIENT}
            >
              <Card.Title className="flex justify-between">
                <div>Lesson Plans Completed</div>
                <NumberTicker targetValue={lessonPlansComplete} />
              </Card.Title>
            </Card>

            {/* Assignements Created */}
            <Card
              className="border border-gray-300/20"
              decoration={getEventColor('ASSIGNMENT').BG.GRADIENT}
            >
              <Card.Title className="flex justify-between">
                <div>Assignments Created</div>
                <NumberTicker targetValue={assignmentsCreated} />
              </Card.Title>
            </Card>

            {/* Favorite Subject */}
            <Card
              className="border border-gray-300/20"
              decoration={getSubjectColor(favoriteSubject).BG.GRADIENT}
            >
              <Card.Title className="flex justify-between">
                <div>Favorite Subject</div>
              </Card.Title>
              <Card.Subtitle>
                <div>{favoriteSubject}</div>
              </Card.Subtitle>
            </Card>
            {/* <Card
              className="border border-gray-300/20"
              decoration={getEventColor('COMMUNITY').BG.GRADIENT}
            >
              <Card.Title className="flex justify-between">
                <div>Favorite Topic</div>
              </Card.Title>
              <Card.Subtitle>
                <div>{favoriteTopic}</div>
              </Card.Subtitle>
            </Card> */}
          </div>
        </motion.div>
      )}
    </>
  );
}

export async function getSnapshotData(
  tab: number,
): Promise<null | SidebarData> {
  // Client
  const supabase = supabaseClient();

  // Session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  let sevenDaysAgo = null;

  // if tab is equal to 1, we only get data from the last 7 days
  if (tab === 1) {
    sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    sevenDaysAgo = sevenDaysAgo.toISOString();
  }

  // Create Query for lesson Plans
  const plansQuery = supabase
    .from('user_lesson_plans')
    .select('*, lesson_plans(*, subject(name))')
    .eq('teacher_id', session?.user.id);

  // Create Query for assignments
  const assignmentsQuery = supabase
    .from('assignments')
    .select('*')
    .eq('creator_id', session?.user.id);

  // Check to see if we are checking for data in the last 7 days
  if (sevenDaysAgo) {
    // If we are attach a .gte to the query for 7 days in the past
    plansQuery.gte('created_at', sevenDaysAgo);
    assignmentsQuery.gte('created_at', sevenDaysAgo);
  }

  // Data and error values
  const { data: plansData, error: plansError } = await plansQuery;
  const { data: assignmentData, error: assignmentError } =
    await assignmentsQuery;

  if (plansError || assignmentError) return null;

  const total_lesson_plans = plansData.length;
  const total_lesson_plans_completed = plansData.reduce(
    (elements, arr) => (arr.completion_date ? elements + 1 : elements),
    0,
  );
  const assignmentsCreated = assignmentData?.length;

  let labels: string[] = [];
  let counts: number[] = [];

  plansData.reduce((acc: string[], item: any) => {
    const subjectName = item.lesson_plans.subject.name as string;
    const index = acc.indexOf(subjectName);

    if (index === -1) {
      acc.push(subjectName);
      labels.push(subjectName);
      counts.push(1);
    } else {
      counts[index]++;
    }

    return acc;
  }, []);

  let favoriteSubject = '';

  if (counts.length > 0) {
    const maxCount = Math.max(...counts);
    const maxIndex = counts.indexOf(maxCount);
    favoriteSubject = labels[maxIndex];
  }

  return {
    total_lesson_plans,
    total_lesson_plans_completed,
    assignmentsCreated,
    labels,
    counts,
    favoriteSubject,
  } as SidebarData;
}
