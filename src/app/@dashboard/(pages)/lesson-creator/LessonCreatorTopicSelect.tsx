// 'use client';

// import { useCallback, useEffect, useMemo, useState } from 'react';
// import { useLessonCreator } from './LessonCreatorCtx';
// import { supabaseClient } from '@/lib/auth/supabaseClient';
// import DrilldownSelect from '@/lib/components/form/DrilldownSelect';
// import { IOption, TSelection } from '@/assets/typescript/form';
// import { AcademicCapIcon } from '@heroicons/react/24/outline';

// export default function LessonCreatorTopicSelect() {
//   // * Data
//   const getSubjectsLevelsTopics = useMemo(() => {
//     const supabase = supabaseClient();

//     const fetchSubjectsLevelsTopics = async () => {
//       const { data, error } = await supabase
//         .from('subjects_levels_topics')
//         .select('*');

//       if (error) throw error;

//       const transformedData = [] as IOption[];
//       const subjectMap = {} as Record<string, IOption>;

//       for (let item of data) {
//         // Check if subject is already in the map
//         if (!subjectMap[item.subject_id!]) {
//           // If not, add a new subject to the result array and the map
//           const newSubject = {
//             id: item.subject_id!,
//             name: item.subject_name!,
//             children: [],
//           };
//           transformedData.push(newSubject);
//           subjectMap[item.subject_id!] = newSubject;
//         }

//         const subject = subjectMap[item.subject_id!];

//         // Check if level is already in the subject's children
//         let level = subject.children?.find(
//           (level) => level.id === item.level_id,
//         );

//         if (!level) {
//           // If not, add a new level to the subject's children
//           level = {
//             id: item.level_id as string,
//             name: `Level: ${item.level_name}`,
//             children: [],
//           };

//           subject.children?.push(level);
//         }

//         // Finally, add the topic to the level's children
//         const topic = {
//           id: item.topic_id!,
//           name: item.topic_name!,
//         };

//         level.children?.push(topic);
//       }

//       return transformedData;
//     };

//     return fetchSubjectsLevelsTopics;
//   }, []);

//   // * Hooks / Context
//   const { subject, setSubject, level, setLevel, topic, setTopic } =
//     useLessonCreator();

//   // * State
//   const [subjects, setSubjects] = useState<IOption[]>([]);

//   // * Handlers
//   const setValues = useCallback(
//     (values: TSelection[]) => {
//       setTimeout(() => {
//         setSubject(values[0]);
//         setLevel(values[1]);
//         setTopic(values[2]);
//       }, 0);
//     },
//     [setSubject, setLevel, setTopic],
//   );

//   // * Effects
//   // Get Subjects
//   useEffect(() => {
//     const fetchSubjectsLevelsTopics = async () => {
//       const data = await getSubjectsLevelsTopics();
//       setSubjects(data);
//     };
//     fetchSubjectsLevelsTopics();
//   }, [getSubjectsLevelsTopics]);

//   // * Render
//   return (
//     <DrilldownSelect
//       label="*Choose a Topic"
//       cols={2}
//       options={subjects}
//       values={[subject, level, topic]}
//       setValues={setValues}
//       icon={AcademicCapIcon}
//     />
//   );
// }

// // async function getSubjectsLevelsTopics() {
// //   const supabase = supabaseClient();

// //   const { data, error } = await supabase
// //     .from('subjects_levels_topics')
// //     .select('*');

// //   if (error) throw error;

// //   const transformedData = [] as IOption[];
// //   const subjectMap = {} as Record<string, IOption>;

// //   for (let item of data) {
// //     // Check if subject is already in the map
// //     if (!subjectMap[item.subject_id]) {
// //       // If not, add a new subject to the result array and the map
// //       const newSubject = {
// //         id: item.subject_id,
// //         name: item.subject_name,
// //         children: [],
// //       };
// //       transformedData.push(newSubject);
// //       subjectMap[item.subject_id] = newSubject;
// //     }

// //     const subject = subjectMap[item.subject_id];

// //     // Check if level is already in the subject's children
// //     let level = subject.children?.find((level) => level.id === item.level_id);

// //     if (!level) {
// //       // If not, add a new level to the subject's children
// //       level = {
// //         id: item.level_id,
// //         name: `Level: ${item.level_name}`,
// //         children: [],
// //       };

// //       subject.children?.push(level);
// //     }

// //     // Finally, add the topic to the level's children
// //     const topic = {
// //       id: item.topic_id,
// //       name: item.topic_name,
// //     };

// //     level.children?.push(topic);
// //   }

// //   return transformedData;
// // }

'use client';

import {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLessonCreator } from './LessonCreatorCtx';
import { supabaseClient } from '@/lib/auth/supabaseClient';
import DrilldownSelect from '@/lib/components/form/DrilldownSelect';
import { IOption, TSelection } from '@/assets/typescript/form';
import {
  AcademicCapIcon,
  GlobeAsiaAustraliaIcon,
} from '@heroicons/react/24/outline';
import Input from '@/lib/components/form/Input';
import { AnimatePresence, motion } from 'framer-motion';

export default function LessonCreatorTopicSelect() {
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherValue, setOtherValue] = useState('');
  // * Data
  const getSubjectsLevelsTopics = useMemo(() => {
    const supabase = supabaseClient();

    const fetchSubjectsLevelsTopics = async () => {
      const { data, error } = await supabase
        .from('subjects_levels_topics')
        .select('*');

      if (error) throw error;

      const transformedData = [] as IOption[];
      const subjectMap = {} as Record<string, IOption>;

      for (let item of data) {
        // Check if subject is already in the map
        if (!subjectMap[item.subject_id!]) {
          // If not, add a new subject to the result array and the map
          const newSubject = {
            id: item.subject_id!,
            name: item.subject_name!,
            children: [],
          };
          transformedData.push(newSubject);
          subjectMap[item.subject_id!] = newSubject;
        }

        const subject = subjectMap[item.subject_id!];

        // Check if level is already in the subject's children
        let level = subject.children?.find(
          (level) => level.id === item.level_id,
        );

        if (!level) {
          // If not, add a new level to the subject's children
          level = {
            id: item.level_id as string,
            name: `Level: ${item.level_name}`,
            children: [],
          };

          subject.children?.push(level);
        }

        // Finally, add the topic to the level's children
        const topic = {
          id: item.topic_id!,
          name: item.topic_name!,
        };

        level.children?.push(topic);
      }

      for (let subject of transformedData) {
        for (let level of subject.children!) {
          level.children!.push({
            id: Math.random().toString(),
            name: 'Other',
          });
        }
      }

      return transformedData;
    };

    return fetchSubjectsLevelsTopics;
  }, []);

  // * Hooks / Context
  const { subject, setSubject, level, setLevel, topic, setTopic } =
    useLessonCreator();

  // * State
  const [subjects, setSubjects] = useState<IOption[]>([]);

  // * Handlers
  const setValues = useCallback(
    (values: TSelection[]) => {
      setTimeout(() => {
        setSubject(values[0]);
        setLevel(values[1]);
        if (values[2]?.name === 'Other') {
          setIsOtherSelected(true);
        } else {
          setIsOtherSelected(false);
          setTopic(values[2]);
        }
      }, 0);
    },
    [setSubject, setLevel, setTopic],
  );

  // * Effects
  // Get Subjects
  useEffect(() => {
    const fetchSubjectsLevelsTopics = async () => {
      const data = await getSubjectsLevelsTopics();
      setSubjects(data);
    };
    fetchSubjectsLevelsTopics();
  }, [getSubjectsLevelsTopics]);

  useEffect(() => {
    if (isOtherSelected) {
      setTopic({ id: 'other', name: otherValue });
    }
  }, [isOtherSelected, otherValue]);

  // * Render
  return (
    <div className="md:col-span-2">
      <DrilldownSelect
        label="*Choose a Topic"
        cols={2}
        options={subjects}
        values={[subject, level, isOtherSelected ? null : topic]}
        setValues={setValues}
        icon={AcademicCapIcon}
      />
      <AnimatePresence mode="wait">
        {isOtherSelected && (
          <motion.div
            key="input"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Input
              value={otherValue}
              icon={GlobeAsiaAustraliaIcon}
              setValue={setOtherValue}
              label={'Topic'}
              placeholder="Please provide your topic"
              className="pt-4"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// async function getSubjectsLevelsTopics() {
//   const supabase = supabaseClient();

//   const { data, error } = await supabase
//     .from('subjects_levels_topics')
//     .select('*');

//   if (error) throw error;

//   const transformedData = [] as IOption[];
//   const subjectMap = {} as Record<string, IOption>;

//   for (let item of data) {
//     // Check if subject is already in the map
//     if (!subjectMap[item.subject_id]) {
//       // If not, add a new subject to the result array and the map
//       const newSubject = {
//         id: item.subject_id,
//         name: item.subject_name,
//         children: [],
//       };
//       transformedData.push(newSubject);
//       subjectMap[item.subject_id] = newSubject;
//     }

//     const subject = subjectMap[item.subject_id];

//     // Check if level is already in the subject's children
//     let level = subject.children?.find((level) => level.id === item.level_id);

//     if (!level) {
//       // If not, add a new level to the subject's children
//       level = {
//         id: item.level_id,
//         name: `Level: ${item.level_name}`,
//         children: [],
//       };

//       subject.children?.push(level);
//     }

//     // Finally, add the topic to the level's children
//     const topic = {
//       id: item.topic_id,
//       name: item.topic_name,
//     };

//     level.children?.push(topic);
//   }

//   return transformedData;
// }
