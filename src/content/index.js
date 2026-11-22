import guide from './business-p1/guide.js';
import jan2021 from './business-p1/jan-2021.js';
import jan2022 from './business-p1/jan-2022.js';
import jan2023 from './business-p1/jan-2023.js';
import jan2026 from './business-p1/jan-2026.js';
import mock2027 from './business-p1/mock-2027.js';
import topicBank from './business-p1/topics.js';

import p2guide from './business-p2/guide.js';
import p2jan2022 from './business-p2/jan-2022.js';
import p2jan2023 from './business-p2/jan-2023.js';
import p2jan2025 from './business-p2/jan-2025.js';
import p2jan2026 from './business-p2/jan-2026.js';
import p2mock2027 from './business-p2/mock-2027.js';

import mockSections from './business-p2-mock/index.js';

export const SITE = { title: 'Schols Revision' };

/**
 * Subjects → papers → sittings (tabs).
 * Add a past paper by creating a file in src/content/<subject>-<paper>/ and
 * listing it in that paper's `sittings` array below.
 */
export const SUBJECTS = [
  {
    id: 'business',
    label: 'Business',
    icon: 'B',
    accent: 'business',
    papers: [
      {
        id: 'p1',
        label: 'Paper 1',
        title: 'Business Paper 1: General Paper',
        sittings: [guide, jan2021, jan2022, jan2023, jan2026, mock2027, topicBank],
      },
      {
        id: 'p2',
        label: 'Paper 2',
        title: 'Business Paper 2: Sustainable Development and Management',
        sittings: [p2guide, p2jan2022, p2jan2023, p2jan2025, p2jan2026, p2mock2027],
      },
      {
        id: 'p2-mock',
        label: 'P2 Mock Exam',
        title: 'Business Paper 2 Mock Exam: twelve sections of notes',
        sittings: mockSections,
      },
    ],
  },
  {
    id: 'econ',
    label: 'Economics',
    icon: 'E',
    accent: 'econ',
    papers: [
      {
        id: 'p1',
        label: 'Paper 1',
        title: 'Economics Paper 1',
        empty: 'No Economics Paper 1 papers yet. Send them over and each sitting will appear as a tab here.',
        sittings: [],
      },
      {
        id: 'p4',
        label: 'Paper 4',
        title: 'Economics Paper 4',
        empty: 'No Economics Paper 4 papers yet. Send them over and each sitting will appear as a tab here.',
        sittings: [],
      },
    ],
  },
];
