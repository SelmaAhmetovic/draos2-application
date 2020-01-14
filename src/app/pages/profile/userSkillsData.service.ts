import { Injectable } from '@angular/core';

@Injectable()
export class UserSkillsDataService {
  constructor() { }

  DATA = [
    {
      id: 1,
      skillsTitle: 'SQL',
      trainingTitle:'Learning SQL Database'
    },
    {
      id: 2,
      skillsTitle: 'Java Spring Boot',
      trainingTitle:'Welcome to Spring Framework'
    } ,{
      id: 3,
      skillsTitle: 'C#',
      trainingTitle:'Old technolgies never get old!'
    } ,{
      id: 4,
      skillsTitle: 'Javascript',
      trainingTitle:'Everything is still JavaScript'
    }
  ];

}
