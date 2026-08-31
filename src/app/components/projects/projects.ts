import { Component } from '@angular/core';
import { Reveal } from '../../reveal.directive';

interface Project {
  name: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  // TODO: refine descriptions and add repo/live links as projects go public.
  readonly projects: Project[] = [
    {
      name: 'Task Management System',
      description: 'A full-stack app to create, assign, and track tasks with status boards and due dates.',
      tags: ['Angular', 'Spring Boot', 'MySQL'],
      featured: true
    },
    {
      name: 'Recipe Finder',
      description: 'Search and discover recipes by ingredients, with a clean, responsive interface.',
      tags: ['Angular', 'REST API', 'TypeScript'],
      featured: true
    },
    {
      name: 'Tracker',
      description: 'A tracking application for logging and visualising day-to-day activity and progress.',
      tags: ['Full-Stack', 'SQL']
    },
    {
      name: 'genesis-flow',
      description: 'A Java-based project exploring structured application flow and clean design.',
      tags: ['Java'],
      repo: 'https://github.com/ashiqks-01/genesis-flow'
    },
    {
      name: 'Notes App',
      description: 'A lightweight note-taking application with create, edit, and organise features.',
      tags: ['Angular']
    },
    {
      name: 'Portfolio Website',
      description: 'This site — a fast, responsive personal portfolio built with the latest Angular.',
      tags: ['Angular', 'SCSS'],
      repo: 'https://github.com/ashiqks-01'
    }
  ];
}
