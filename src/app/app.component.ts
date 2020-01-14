import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet><alert></alert>`
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    let us: string = `[{\"firstName\":\"skillAdmin\",\"lastName\":\"skillAdmin\",\"username\":\"skillAdmin\",\"password\":\"test123\",\"id\":1,\"role\":\"skillAdmin\"},
    {\"firstName\":\"securityAdmin\",\"lastName\":\"securityAdmin\",\"username\":\"securityAdmin\",\"password\":\"test123\",\"id\":2, \"role\":\"securityAdmin\"},
    {\"firstName\":\"superAdmin\",\"lastName\":\"superAdmin\",\"username\":\"superAdmin\",\"password\":\"test123\",\"id\":3, \"role\":\"superAdmin\"},
    {\"firstName\":\"user\",\"lastName\":\"user\",\"username\":\"user\",\"password\":\"test123\",\"id\":4, \"role\":\"user\"},
    {\"firstName\":\"selma\",\"lastName\":\"ahmetovic\",\"username\":\"selmaa\",\"password\":\"test123\",\"id\":5, \"role\":\"user\"}]`;
    localStorage.setItem('users', us);

    let roles: string = `[{\"id\":\"1\",\"roleTitle\":\"User\",\"roleDescription\":\"Can view Dashboard and own profile page\"},
    {\"id\":\"2\",\"roleTitle\":\"Super Admininistrator\",\"roleDescription\":\"Can view all pages\"},
    {\"id\":\"3\",\"roleTitle\":\"Security Admininistrator\",\"roleDescription\":\"Can view and add roles, permissions\"}, 
    {\"id\":\"4\",\"roleTitle\":\"Skill Admininistrator\",\"roleDescription\":\"Can view and add skills and training\"}]`;

    let skills: string = `[{\"id\":\"1\",\"skillTitle\":\"SQL\",\"skillDescription\":\"SQL\",\"skillCategory\":\"Database\"},
    {\"id\":\"2\",\"skillTitle\":\"MySQL\",\"skillDescription\":\"MySQL\",\"skillCategory\":\"Database\"},
    {\"id\":\"3\",\"skillTitle\":\"Angular 7\",\"skillDescription\":\"Frontend\",\"skillCategory\":\"Frontend\"}, 
    {\"id\":\"4\",\"skillTitle\":\"HTML\",\"skillDescription\":\"HTML\",\"skillCategory\":\"Frontend\"},   
    {\"id\":\"5\",\"skillTitle\":\"PHP\",\"skillDescription\":\"HTML\",\"skillCategory\":\"Backend\"}, 
    {\"id\":\"6\",\"skillTitle\":\"C#\",\"skillDescription\":\"C#\",\"skillCategory\":\"Backend\"},    
    {\"id\":\"7\",\"skillTitle\":\"React\",\"skillDescription\":\"React\",\"skillCategory\":\"Frontend\"},     
    {\"id\":\"8\",\"skillTitle\":\"CSS\",\"skillDescription\":\"CSS\",\"skillCategory\":\"Frontend\"},     
    {\"id\":\"9\",\"skillTitle\":\"JavaScript\",\"skillDescription\":\"JavaScript\",\"skillCategory\":\"Backend\"},     
    {\"id\":\"10\",\"skillTitle\":\"NodeJs\",\"skillDescription\":\"NodeJs\",\"skillCategory\":\"Backend\"}]`;

    let permissions: string = `[{\"id\":\"1\",\"permissionTitle\":\"Can view profile page\",\"permissionDescription\":\"Can view profile page\"},
    {\"id\":\"2\",\"permissionTitle\":\"Can view dashboard page\",\"permissionDescription\":\"Can view dashboard page\"},
    {\"id\":\"3\",\"permissionTitle\":\"Can view roles page\",\"permissionDescription\":\"Can view roles page\"},
    {\"id\":\"4\",\"permissionTitle\":\"Can view skills page\",\"permissionDescription\":\"Can view skills page\"},
    {\"id\":\"5\",\"permissionTitle\":\"Can view training page\",\"permissionDescription\":\"Can view training page\"}]`;

    let categories: string = `[{\"id\":\"1\",\"categoryTitle\":\"Database\",\"categoryDescription\":\"Database\"},
    {\"id\":\"2\",\"categoryTitle\":\"Frontend\",\"categoryDescription\":\"Frontend\"},
    {\"id\":\"3\",\"categoryTitle\":\"Backend\",\"categoryDescription\":\"Backend\"}]`;

    let skillManagement: string =`[{\"id\":\"1\",\"userName\":"user\",\"skillTitle\":"SQL\",\"categoryTitle\":"Database\",\"skillLevel\":"1\"},
    {\"id\":\"2\",\"userName\":"user\",\"skillTitle\":"PHP\",\"categoryTitle\":"Backend\",\"skillLevel\":"2\"},
    {\"id\":\"3\",\"userName\":"user\",\"skillTitle\":"HTML\",\"categoryTitle\":"Frontend\",\"skillLevel\":"8\"},
    {\"id\":\"4\",\"userName\":"user\",\"skillTitle\":"Angular 7\",\"categoryTitle\":"Frontend\",\"skillLevel\":"9\"},
    {\"id\":\"5\",\"userName\":"selmaa\",\"skillTitle\":"CSS\",\"categoryTitle\":"Frontend\",\"skillLevel\":"8\"},
    {\"id\":\"6\",\"userName\":"selmaa\",\"skillTitle\":"MySQL\",\"categoryTitle\":"Database\",\"skillLevel\":"2\"},
    {\"id\":\"7\",\"userName\":"selmaa\",\"skillTitle\":"Angular 7\",\"categoryTitle\":"Frontend\",\"skillLevel\":"4\"}]`;


    let trainings: string = `[{\"id\":\"1\",\"trainingTitle\":\"Learning SQL Database\",\"trainingDescription\":\"Learning SQL Database\",\"trainingSkill\":\"SQL\"},
    {\"id\":\"2\",\"trainingTitle\":\"Old technolgies never get old\",\"trainingDescription\":\"Learn C#\",\"trainingSkill\":\"C#\"},
    {\"id\":\"3\",\"trainingTitle\":\"HTML\",\"trainingDescription\":\"HTML\",\"trainingSkill\":\"HTML\"}, 
    {\"id\":\"4\",\"trainingTitle\":\"Learn Angular 7\",\"trainingDescription\":\"Angular 7\",\"trainingSkill\":\"Angular 7\"},   
    {\"id\":\"5\",\"trainingTitle\":\"Be CSS Expert\",\"trainingDescription\":\"Be CSS Expert\",\"trainingSkill\":\"CSS\"}, 
    {\"id\":\"6\",\"trainingTitle\":\"MySQL Database Migration\",\"trainingDescription\":\"MySQL\",\"trainingSkill\":\"MySQL\"},    
    {\"id\":\"7\",\"trainingTitle\":\"Do ReactJs Like this\",\"trainingDescription\":\"React\",\"trainingSkill\":\"Frontend\"},     
    {\"id\":\"8\",\"trainingTitle\":\"Powerfull Angular 7\",\"trainingDescription\":\"Angular 7\",\"trainingSkill\":\"Angular 7\"},     
    {\"id\":\"9\",\"trainingTitle\":\"Everything is JavaScript\",\"trainingDescription\":\"JavaScript\",\"trainingSkill\":\"JavaScript\"},     
    {\"id\":\"10\",\"trainingTitle\":\"Let's talk to Viber - ViberBot in NodeJs\",\"trainingDescription\":\"Let's talk to Viber - ViberBot in NodeJs\",\"trainingSkill\":\"JavaScript\"}]`;

    let trainingManagement: string =`[{\"id\":\"1\",\"userName\":"user\",\"trainingTitle\":"Learning SQL Database\",\"trainingSkill\":"SQL\",\"completed\":"false\"},
    {\"id\":\"2\",\"userName\":"user\",\"trainingTitle\":"Old technolgies never get old!\",\"trainingSkill\":"C#\",\"completed\":"false\"},
    {\"id\":\"3\",\"userName\":"user\",\"trainingTitle\":"HTML\",\"trainingSkill\":"HTML\",\"completed\":"false\"},
    {\"id\":\"4\",\"userName\":"user\",\"trainingTitle\":"Learn Angular 7\",\"trainingSkill\":"Angular 7\",\"completed\":"false\"},
    {\"id\":\"5\",\"userName\":"selmaa\",\"trainingTitle\":"Be CSS Expert\",\"trainingSkill\":"CSS\",\"completed\":"false\"},
    {\"id\":\"6\",\"userName\":"selmaa\",\"trainingTitle\":"MySQL Database Migration\",\"trainingSkill\":"MySQL\",\"completed\":"false\"},
    {\"id\":\"7\",\"userName\":"selmaa\",\"trainingTitle\":"Powerfull Angular 7\",\"trainingSkill\":"Angular 7\",\"completed\":"false\"}]`;

    let securityManagement: string = `[{\"id\":\"1\",\"userName\":\"user\",\"roles\":[\"User\"],\"permissions\":[\"Can view profile page\",\"Can view dashboard page\"]},
        {\"id\":\"2\",\"userName\":\"superAdmin\",\"roles\":[\"inistrator\",\"Security Admininistrator\",\"Skill Admininistrator\"],\"permissions\":[\"Can view profile page\",\"Can view dashboard page\",\"Can view roles page\",\"Can view skills page\",\"Can view training page\"]},
        {\"id\":\"3\",\"userName\":\"securityAdmin\",\"roles\":[\"Security Admininistrator\"],\"permissions\":[\"Can view profile page\",\"Can view dashboard page\",\"Can view roles page\",\"Can view skills page\"]},
        {\"id\":\"4\",\"userName\":\"skillAdmin\",\"roles\":[\"Skill Admininistrator\"],\"permissions\":[\"Can view profile page\",\"Can view dashboard page\",\"Can view training page\",\"Can view skills page\"]}]`;

    let logs: string =`[{\"id\":\"1\",\"username\":"user\",\"log\":"ADDED ROLE{'id':1,'roleTitle':'user','roleDescription':'user'}\",\"dateAndTime\":"5/30/2019 9:53:55 PM\"}]`;

    
    let userRole : string = `[{\"user\":\"superAdmin\",\"roleId\":\"2\"},{\"user\":\"superAdmin\",\"roleId\":\"4\"},
                              {\"user\":\"superAdmin\",\"roleId\":\"1\"},{\"user\":\"superAdmin\",\"roleId\":\"3\"},
                              {\"user\":\"skillAdmin\",\"roleId\":\"4\"},{\"user\":\"securityAdmin\",\"roleId\":\"3\"}]`
    
    //let logs: string="";
    localStorage.setItem('roles', roles);
    localStorage.setItem('skills', skills);
    localStorage.setItem('permissions', permissions);
    localStorage.setItem('categories', categories);
    localStorage.setItem('skillManagement', skillManagement);
    localStorage.setItem('trainings', trainings);
    localStorage.setItem('trainingManagement', trainingManagement);
    localStorage.setItem('securityManagement', securityManagement);
    localStorage.setItem('logs', logs);
    if( localStorage.getItem('userRole') ==null || localStorage.getItem('userRole') == '' || localStorage.getItem('userRole') == undefined)
      localStorage.setItem('userRole', userRole);

  }

}
