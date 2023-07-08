'use client';
import { UserStudent } from '@/assets/typescript/user';
import { useUser } from '@/lib/components/providers/UserProvider';
import CelebrationConfetti from '@/lib/components/ux/CelebrationConfetti';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

export default function BirthdayModal() {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const { students } = useUser();
  const [birthdayStudents, setBirthdayStudents] = useState<UserStudent[]>([]);

  useEffect(() => {
    const today = new Date();
    const yearToday = today.getFullYear();
    const storedYear = localStorage.getItem('year');

    let wishedStudents: string[] = [];
    if (storedYear === null || Number(storedYear) !== yearToday) {
      localStorage.setItem('year', yearToday.toString());
    } else {
      wishedStudents = JSON.parse(
        localStorage.getItem('wishedStudents') || '[]',
      );
    }

    const studentsWithBirthdayToday = students.filter((student) => {
      const studentBirthday = new Date(student.birthday);
      return (
        studentBirthday.getDate() === today.getDate() &&
        studentBirthday.getMonth() === today.getMonth() &&
        !wishedStudents.includes(student.id)
        // studentBirthday.getDate() !== today.getDate() &&
        // studentBirthday.getMonth() !== today.getMonth()
      );
    });

    if (studentsWithBirthdayToday.length > 0) {
      setBirthdayStudents(studentsWithBirthdayToday);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [students]);

  const handleCloseModal = () => {
    const wishedStudents = JSON.parse(
      localStorage.getItem('wishedStudents') || '[]',
    );
    wishedStudents.push(...birthdayStudents.map((student) => student.id));
    localStorage.setItem('wishedStudents', JSON.stringify(wishedStudents));
    setIsOpen(false);
  };

  const getStudentNames = () => {
    let names = birthdayStudents.map(
      (student) => `${student.firstName} ${student.lastName}`,
    );
    if (names.length > 2) {
      let last = names.pop();
      return names.join(', ') + ', and ' + last;
    } else {
      return names.join(' and ');
    }
  };

  return (
    <>
      {isOpen && birthdayStudents.length > 0 && (
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] h-screen flex justify-center items-center backdrop-blur-md backdrop-brightness-90"
          onClick={handleCloseModal}
        >
          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white dark:bg-navy-800 flex justify-center flex-col items-center shadow-lg border border-gray-300/20 rounded-xl px-5 md:py-3 relative mx-4 py-8"
          >
            <button
              className="absolute p-1 rounded-full group hocus:bg-slate-100 dark:hocus:bg-navy-900 transition-colors right-2 top-2"
              onClick={handleCloseModal}
            >
              <XMarkIcon className="w-6 h-6 text-slate-400 group-focus:text-slate-700 dark:text-navy-300 dark:group-focus:text-navy-100" />
            </button>
            <div className="flex flex-col text-center items-center justify-center space-y-3 mt-2 mb-4 max-w-md mx-auto">
              <h2 className="text-lg sm:text-xl font-semibold text-green-800 dark:text-green-600 md:text-2xl xl:text-3xl">
                🥳 Happy Birthday! 🎂
              </h2>
              <p className="sm:text-lg text-slate-800 dark:text-navy-50 md:text-xl xl:text-2xl">
                The team at Learnly would love to wish a happy birthday to{' '}
                {getStudentNames()}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-navy-100 md:text-base">
                <span className="block">
                  Thank you for the continued support and we hope their day was
                  special!
                </span>
              </p>
            </div>
          </motion.div>
          <CelebrationConfetti />
        </motion.div>
      )}
    </>
  );
}
