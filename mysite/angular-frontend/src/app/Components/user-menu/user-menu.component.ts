import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RoleService } from '../../Services/role.service';
import { Role } from '../../Interfaces/role';
import { TeamService } from '../../Services/team.service';
import { Team} from '../../Interfaces/team';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  modalRef!: BsModalRef;
  userGivenName: String = '';
  userFamilyName: String = '';
  userIsStaff: String = '';

  roles: Role[] = [];
  teams: Team[] = [];

  team_names:string[] = [];

  createdRole = {
    'team': '',
    'type': '',
    'user': ''
  }

  createdTeam = {
    'name': ''
  }

  selectedRole!: Role;

  roleTypeOptions = [
      'DEVELOPER',
      'SCRUM_MASTER',
      'PRODUCT_OWNER',
      'TESTER',
      'ARCHITECT'
  ]

  showDetails = new Set<string>();
  showCreateRole = false;
  showCreateTeam = false;

  constructor(private modalService: BsModalService,
    private roleService: RoleService,
    private teamService: TeamService) { }

  ngOnInit(): void {
    this.userGivenName = (<any>window)["userGivenName"];
    this.userFamilyName = (<any>window)["userFamilyName"];
    this.userIsStaff = (<any>window)["userIsStaff"];
    this.getRoles();
    this.getTeams();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });

    this.team_names = this.teams.map(obj => {
      return obj.name
    });
  }

  //// Role Management

  // Role API Handlers

  getRoles():void {
    this.roleService.getRoles()
    .subscribe(roles => this.roles = roles);
  }

  deleteRole(id: string):void{
    this.showDetails.delete(id);
    this.roleService.delete(id).subscribe(
      response => {
        this.showDetails.delete(id);
        this.getRoles();
      },
      error => {
        console.log(error);
      });
  }

  createRole():void{
    var role = {'type': this.createdRole.type, 'team': this.createdRole.team, 'user': 'Test'}
    this.roleService.create(role)
    .subscribe(
      response => {
        this.showCreateRole = false;
        this.getRoles();
      },
      error => {
        console.log(error);
      });
  }

  updateRole(id:string):void{
    this.roleService.update(id, this.selectedRole)
    .subscribe(
      response => {
        this.showDetails.delete(id);
        this.getRoles();
      },
      error => {
        console.log(error);
      });

  }


  //// Team Management
  getTeams():void {
    this.teamService.getTeams()
    .subscribe(teams => this.teams = teams);
  }

  getRoleByID(id:string):Role{
    return <Role>this.roles.find((role) => {
      return role.id === id;
    });
  }

  toggleCreateRole() {
    if(this.showCreateRole){
      this.showCreateRole = false;
    }
    else{
      this.showCreateRole = true;
      this.showCreateTeam = false;
      this.showDetails.clear();
      this.selectedRole = {'id': '', 'type': '', 'team': ''};
    }

  }

  createTeam(){
    this.teamService.create(this.createdTeam)
    .subscribe(
      response => {
        this.showCreateTeam = false;
        this.getTeams();
      },
      error => {
        console.log(error);
      });
  }

  toggleCreateTeam() {
    if(this.showCreateTeam){
      this.showCreateTeam = false;
    }
    else{
      this.showCreateTeam = true;
      this.showCreateRole = false;
      // this.showDetails.clear();
      this.createdTeam = {'name': ''};
    }

  }

  toggleDetails(id: string) {
    if (!this.showDetails.delete(id)) {
      this.showDetails.clear();
      this.showCreateRole = false;
      this.selectedRole = this.getRoleByID(id);
      this.showDetails.add(id);

      this.team_names = this.teams.map(obj => {
        return obj.name
      });

    }
  }


  showDetailsProvider = (row: Role, key: any) => this.showDetails.has(row.id);

}
