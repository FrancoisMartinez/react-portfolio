import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Timeline.module.css';

const Timeline = () => {
    const { t } = useTranslation();

    const timelineEvents = [
        {
          id: 1,
          date: t('timeline.university.date'),
          title: t('timeline.university.title'),
          description: t('timeline.university.description'),
          category: "education"
        },
        {
          id: 2,
          date: t('timeline.internship1.date'),
          title: t('timeline.internship1.title'),
          description: t('timeline.internship1.description'),
          category: "experience"
        },
        {
          id: 3,
          date: t('timeline.hackathon.date'),
          title: t('timeline.hackathon.title'),
          description: t('timeline.hackathon.description'),
          category: "achievement"
        },
        {
          id: 4,
          date: t('timeline.hackathonWin.date'),
          title: t('timeline.hackathonWin.title'),
          description: t('timeline.hackathonWin.description'),
          category: "achievement"
        },
      ];

    return (
        <>

        </>
    );
}

export default Timeline;