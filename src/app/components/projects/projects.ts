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
      description: 'A procurement portal that takes purchase requests from creation through vendor quotes, approvals, and final purchase order — handling around 10,000 requests a year. Automated purchase-order delivery to SAP and built a configurable, rule-based approval workflow.',
      tags: ['Angular', 'TypeScript', 'Grails (Groovy)', 'MySQL', 'REST APIs'],
      featured: true
    },
    {
      name: 'Vendor Management (VDM) Portal',
      description: 'A vendor sourcing platform that manages RFQs, vendor submissions, and multi-level approvals before pushing final data to SAP. Fixed a recurring production crash and added bulk Excel exports for large reports.',
      tags: ['Spring Boot', 'Hibernate/JPA', 'MySQL', 'Apache POI'],
      featured: true
    },
    {
      name: 'TaskMan — Marketing Operations Portal',
      description: 'An internal tool for tracking tasks, projects, and meeting follow-ups across marketing teams, including a module that turns meeting notes into trackable, owner-assigned action items.',
      tags: ['Grails (Groovy)', 'GORM/Hibernate', 'MySQL', 'JasperReports']
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
    }
  ];
}
