import { Component } from '@angular/core';
import { Reveal } from '../../reveal.directive';

interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  readonly groups: SkillGroup[] = [
    { title: 'Frontend', icon: 'layers', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'RxJS'] },
    { title: 'Backend', icon: 'gear', items: ['Java', 'Spring Boot', 'Python', 'REST APIs'] },
    { title: 'Database', icon: 'database', items: ['MySQL', 'SQL', 'JPA / Hibernate'] },
    { title: 'Tools & Workflow', icon: 'tool', items: ['Git', 'GitHub', 'npm', 'VS Code', 'Postman'] }
  ];
}
