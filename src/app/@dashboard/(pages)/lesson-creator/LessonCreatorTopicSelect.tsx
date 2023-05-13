'use client';

import { ChangeEvent, use, useEffect, useMemo, useState } from 'react';
import { useLessonCreator } from './LessonCreatorCtx';
import { supabaseClient } from '@/lib/auth/supabaseClient';

type TopicItem = {
  subject_id: string;
  subject_name: string;
  level_id: string;
  level_name: string;
  topic_id: string;
  topic_name: string;
};

type SubjectsLevelsTopics = Record<string, Record<string, TopicItem[]>>;

export default function LessonCreatorTopicSelect() {
  // * Data
  const subjects = useMemo<SubjectsLevelsTopics>(() => ({}), []);

  // * Hooks / Context
  const { subject, setSubject, level, setLevel, topic, setTopic } =
    useLessonCreator();

  // * Effects
  // Get Subjects
  useEffect(() => {
    getSubjectsLevelsTopics().then((data) => {
      for (let item of data) {
        if (!subjects[item.subject_name]) {
          subjects[item.subject_name] = {};
        }
        if (!subjects[item.subject_name][item.level_name]) {
          subjects[item.subject_name][item.level_name] = [];
        }
        subjects[item.subject_name][item.level_name].push(item as TopicItem);
      }

      console.log('subjects:', subjects);

      // setSubjects(subjects);
    });
  }, [subjects]);

  // * Render
  return (
    <>
      <select
        value={subject?.name || ''}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          const selectedSubject = subjects[e.target.value];
          const firstLevelKey = Object.keys(selectedSubject)[0];
          const firstTopic = selectedSubject[firstLevelKey][0];
          setSubject({
            id: firstTopic.subject_id,
            name: firstTopic.subject_name,
          });
          setLevel(null);
          setTopic(null);
        }}
      >
        <option disabled value="">
          -- Select a subject --
        </option>
        {Object.keys(subjects).map((subjectName) => (
          <option key={subjectName} value={subjectName}>
            {subjectName}
          </option>
        ))}
      </select>

      {subject && (
        <select
          value={level?.name || ''}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const selectedLevel = subjects[subject.name][e.target.value][0];
            setLevel({
              id: selectedLevel.level_id,
              name: selectedLevel.level_name,
            });
            setTopic(null);
          }}
        >
          <option disabled value="">
            -- Select a level --
          </option>
          {Object.keys(subjects[subject.name]).map((levelName) => (
            <option key={levelName} value={levelName}>
              {levelName}
            </option>
          ))}
        </select>
      )}

      {subject && level && (
        <select
          value={topic?.name || ''}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const selectedTopic = subjects[subject.name][level.name].find(
              (topicItem) => topicItem.topic_name === e.target.value,
            );
            if (selectedTopic) {
              setTopic({
                id: selectedTopic.topic_id,
                name: selectedTopic.topic_name,
              });
            }
          }}
        >
          <option disabled value="">
            -- Select a topic --
          </option>
          {subjects[subject.name][level.name].map((topicItem) => (
            <option key={topicItem.topic_name} value={topicItem.topic_name}>
              {topicItem.topic_name}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

async function getSubjectsLevelsTopics() {
  const supabase = supabaseClient();

  const { data, error } = await supabase
    .from('subjects_levels_topics')
    .select('*');

  if (error) throw error;

  return data;
}
