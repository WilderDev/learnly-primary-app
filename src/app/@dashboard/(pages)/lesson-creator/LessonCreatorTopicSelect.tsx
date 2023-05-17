'use client';

import { useEffect, useState } from 'react';
import { useLessonCreator } from './LessonCreatorCtx';
import { supabaseClient } from '@/lib/auth/supabaseClient';
import DrilldownSelect from '@/lib/components/form/DrilldownSelect';
import { IOption } from '@/assets/typescript/form';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

export default function LessonCreatorTopicSelect() {
  // * Hooks / Context
  const { subject, setSubject, level, setLevel, topic, setTopic } =
    useLessonCreator();

  // * State
  const [subjects, setSubjects] = useState<IOption[]>([]);

  // * Effects
  // Get Subjects
  useEffect(() => {
    getSubjectsLevelsTopics().then((data) => {
      const result: IOption[] = [];
      const subjectMap = {} as Record<string, IOption>;

      for (let item of data) {
        // Check if subject is already in the map
        if (!subjectMap[item.subject_id]) {
          // If not, add a new subject to the result array and the map
          const newSubject = {
            id: item.subject_id,
            name: item.subject_name,
            children: [],
          };
          result.push(newSubject);
          subjectMap[item.subject_id] = newSubject;
        }

        const subject = subjectMap[item.subject_id];

        // Check if level is already in the subject's children
        let level = subject.children?.find(
          (level) => level.id === item.level_id,
        );

        if (!level) {
          // If not, add a new level to the subject's children
          level = {
            id: item.level_id,
            name: `Level: ${item.level_name}`,
            children: [],
          };

          subject.children?.push(level);
        }

        // Finally, add the topic to the level's children
        const topic = {
          id: item.topic_id,
          name: item.topic_name,
        };
        level.children?.push(topic);
      }

      setSubjects(result);
    });
  }, []);

  // * Render
  return (
    <DrilldownSelect
      label="*Choose a Topic"
      cols={2}
      options={subjects}
      values={[subject, level, topic]}
      setValues={[setSubject, setLevel, setTopic]}
      icon={AcademicCapIcon}
    />
  );
}

async function getSubjectsLevelsTopics() {
  const supabase = supabaseClient();

  const { data, error } = await supabase
    .from('subjects_levels_topics')
    .select('*');

  if (error) throw error;

  return data as {
    subject_id: string;
    subject_name: string;
    level_id: string;
    level_name: string;
    topic_id: string;
    topic_name: string;
  }[];
}
