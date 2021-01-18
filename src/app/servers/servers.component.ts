import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="no server was created";
  ServerName='TestServers';
  UserName='';
  ServerCreated = false;
  servers =['testserver', 'testserver 2'];


  constructor() { 
    setTimeout(() => {
      this.allowNewServer= true;
    },2000);    
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.ServerCreated = true;
    this.servers.push(this.ServerName);
    this.serverCreationStatus='Server was cerated and server name is '+ this.ServerName;
  }
  onUpdateServerName(event: Event){
    this.ServerName=(<HTMLInputElement>event.target).value;

  }
  onUpdateServer(){
    return this.UserName;
  }
  
}
