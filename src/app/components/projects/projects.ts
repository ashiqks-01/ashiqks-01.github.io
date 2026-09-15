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
  readonly projects: Project[] = [
    {
      name: 'Vendor Purchase Request (VPR) Portal',
      description: 'Procurement platform (PR → RFQ → Approval → PO) handling ~10,000 purchase requests/year for an enterprise FMCG client. Refactored a 12,000+ line monolithic controller into 3 domain services across 130+ endpoints with zero downtime, automated SAP purchase-order delivery via FTP/CSV, and built a configurable approval-routing engine with plant-based and dynamic budget-threshold logic.',
      tags: ['Angular', 'TypeScript', 'Grails (Groovy)', 'MySQL', 'REST APIs'],
      featured: true
    },
    {
      name: 'Vendor Management (VDM) Portal',
      description: 'Vendor sourcing platform (RFQ → Submission → L0–L3 Approval → SAP Push). Traced and fixed a recurring production outage caused by leaked Hibernate sessions across 15+ methods, and built a streaming Excel export (Apache POI SXSSF) supporting 100,000+ rows across 75 columns.',
      tags: ['Spring Boot', 'Hibernate/JPA', 'MySQL', 'Apache POI'],
      featured: true
    },
    {
      name: 'TaskMan — Marketing Operations Portal',
      description: 'Task, project, and meeting follow-up tracker used across marketing teams. Built a Minutes-of-Meeting module that converts free-form notes into structured, owner-assigned action items with due dates and full change-history logging.',
      tags: ['Grails (Groovy)', 'GORM/Hibernate', 'MySQL', 'JasperReports']
    },
    {
      name: 'Recipe Finder',
      description: 'Search and discover recipes by ingredients, with a clean, responsive interface.',
      tags: ['Angular', 'REST API', 'TypeScript']
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
      name: 'Portfolio Website',
      description: 'This site — a fast, responsive personal portfolio built with the latest Angular.',
      tags: ['Angular', 'SCSS'],
      repo: 'https://github.com/ashiqks-01'
    }
  ];
}
