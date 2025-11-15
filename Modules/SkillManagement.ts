import type { Skill } from '../Entities/Skill';
import type { User } from '../Entities/User';

export class SkillManagement {
    skill: Skill[];
    currentSkill: Skill | null;

    constructor(skills: Skill[], currentSkill:Skill | null){
        this.skill = skills;
        this.currentSkill = currentSkill;
    }

 addSkill(newSkill:Skill,user:User):void{
    if(user.role?.toLowerCase() !== "admin"){
        console.log("Only admin users can add new skills.");
    }
   if(this.skill.find(s=> s.id === newSkill.id || s.name.toLowerCase() === newSkill.name.toLowerCase())){
        console.log(`Skill with id ${newSkill.id} and ${newSkill.name} already exists.`);
   }else{
    this.skill.push(newSkill);
    console.log("Skill added successfully.");
   }
}

removeSkill(skillid:number,skillName:string, user:User):void{
    if(user.role?.toLowerCase() !== "admin"){
        console.log("Only admin users can remove skills.");
        return;
    }
    const skillIndex = this.skill.findIndex(s => s.id === skillid)
    if(skillIndex === -1){
        console.log(`Skill with id ${skillid} not found.`);
    }else{
        this.skill.splice(skillIndex,1);
        console.log(`Skill with id ${skillid} and name ${skillName} removed successfully.`);
    }
}

updateSkill(skillid:number, update:Partial<Skill>, user:User): void {
    if(user.role?.toLowerCase() !== "admin"){
        console.log("Only admin users can update skills.");
        return;
    } 
    const skillIndex = this.skill.findIndex(s => s.id === skillid);
    if(skillIndex === -1){
        console.log(`Skill with id ${skillid} not found.`);
    }else{
         this.skill[skillIndex] = {...this.skill[skillIndex],...update}
    }  
}

getSkillById(skillid:number): Skill | null {
    const skill = this.skill.find(s => s.id === skillid) || null;
    return skill;
}

listSkills() :Skill[]{
    return this.skill;

}
};


