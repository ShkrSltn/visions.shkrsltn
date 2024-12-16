import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SkillDetails {
    level: string;
    experience: string;
    description: string;
    projects: string[];
}

export interface Skill {
    name: string;
    type: 'hard' | 'soft';
    icon: IconDefinition;
    details: SkillDetails;
}