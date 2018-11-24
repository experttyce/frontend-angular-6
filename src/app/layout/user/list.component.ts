import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {ExcelService} from '../../shared/services/excel.service';
import { User } from '../../models/users';
import { UserService } from '../../shared/services/user.service';

@Component({templateUrl: 'list.component.html',
providers: [UserService]
})

export class ListComponent implements OnInit {
    currentUser: User;
    message: string;
    //users: User[] = [];
public users: User[];

    constructor(private userService: UserService, private excelService:ExcelService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
       // this.loadAllUsers();

       this.userService.getUserList().subscribe(
           response =>{
               if(!response){

               }else{
                   this.users= response;
               }
           },
           error => {
            this.message=error;
            console.log(<any>error);
           }
            
           );
    }

    exportAsXLSX():void {
        this.excelService.exportAsExcelFile(this.users, 'users List');
      }

    
    


}