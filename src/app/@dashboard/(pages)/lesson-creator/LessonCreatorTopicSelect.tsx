'use client';

import { ChangeEvent, use, useEffect, useMemo, useRef, useState } from 'react';
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
  //   const subjects = useMemo<SubjectsLevelsTopics>(() => ({}), []);

  // * Hooks / Context
  const { subject, setSubject, level, setLevel, topic, setTopic } =
    useLessonCreator();

  // * State
  const [subjects, setSubjects] = useState<SubjectsLevelsTopics>({});
  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);

  // * Refs
  const dropdownRef = useRef<HTMLDivElement>(null);

  // * Effects
  // Get Subjects
  useEffect(() => {
    getSubjectsLevelsTopics().then((data) => {
      const subjects: SubjectsLevelsTopics = {};

      for (let item of data) {
        if (!subjects[item.subject_name]) {
          subjects[item.subject_name] = {};
        }
        if (!subjects[item.subject_name][item.level_name]) {
          subjects[item.subject_name][item.level_name] = [];
        }
        subjects[item.subject_name][item.level_name].push(item as TopicItem);
      }

      setSubjects(subjects);
    });
  }, []);

  // * Handlers
  const handleSubjectSelect = (subjectName: string) => {
    const selectedSubject = subjects[subjectName];
    const firstLevelKey = Object.keys(selectedSubject)[0];
    const firstTopic = selectedSubject[firstLevelKey][0];
    setSubject({ id: firstTopic.subject_id, name: firstTopic.subject_name });
    setSubjectDropdownOpen(false);
    setLevelDropdownOpen(true);
    setTopicDropdownOpen(false);
  };

  const handleLevelSelect = (levelName: string) => {
    const selectedLevel = subjects[subject!.name][levelName][0];
    setLevel({ id: selectedLevel.level_id, name: selectedLevel.level_name });
    setLevelDropdownOpen(false);
    setTopicDropdownOpen(true);
  };

  const handleTopicSelect = (topicName: string) => {
    const selectedTopic = subjects[subject!.name][level!.name].find(
      (topicItem) => topicItem.topic_name === topicName,
    );
    if (selectedTopic) {
      setTopic({ id: selectedTopic.topic_id, name: selectedTopic.topic_name });
      setTopicDropdownOpen(false);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSubjectDropdownOpen(false);
        setLevelDropdownOpen(false);
        setTopicDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // * Render
  return (
    <div ref={dropdownRef}>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        type="button"
        onClick={() => setSubjectDropdownOpen(!subjectDropdownOpen)}
      >
        {subject?.name || 'Select a subject'}
      </button>
      {subjectDropdownOpen && (
        <div className="absolute z-30 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {Object.keys(subjects).map((subjectName) => (
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
              key={subjectName}
              onClick={() => handleSubjectSelect(subjectName)}
            >
              {subjectName}
            </div>
          ))}
        </div>
      )}

      {subject && (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          type="button"
          onClick={() => setLevelDropdownOpen(!levelDropdownOpen)}
        >
          {level?.name || 'Select a level'}
        </button>
      )}
      {levelDropdownOpen && (
        <div className="absolute z-30 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {Object.keys(subjects[subject!.name]).map((levelName) => (
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
              key={levelName}
              onClick={() => handleLevelSelect(levelName)}
            >
              Grade Level: {levelName}
            </div>
          ))}
        </div>
      )}

      {subject && level && (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          type="button"
          onClick={() => setTopicDropdownOpen(!topicDropdownOpen)}
        >
          {topic?.name || 'Select a topic'}
        </button>
      )}

      {topicDropdownOpen && (
        <div>
          {subjects[subject!.name][level!.name].map((topicItem) => (
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
              key={topicItem.topic_name}
              onClick={() => handleTopicSelect(topicItem.topic_name)}
            >
              {topicItem.topic_name}
            </div>
          ))}
        </div>
      )}
    </div>
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
