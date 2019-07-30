import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    signUpForm: FormGroup;
    statusOptions = ['Stable', 'Critical', 'Finished']
    forbidenNames=['test']
    email:string;
    name:string;
    status:string;
    showResult:boolean = false;

    ngOnInit() {
        this.signUpForm = new FormGroup({
            'name': new FormControl('Lazar', [Validators.required, this.checkForbidenNames.bind(this)]),
            'email': new FormControl('lazar_lzrv@abv.bg', [Validators.email, Validators.required]),
            'stat': new FormControl('Finished')
        })
    }

    onSubmit(form: NgForm) {   
        this.email = this.signUpForm.controls.email.value;
        this.name = this.signUpForm.controls.name.value;
        this.status = this.signUpForm.controls.stat.value;
        this.showResult = !this.showResult
    }

    checkForbidenNames(control: FormControl){
        if(this.forbidenNames.indexOf(control.value) !== -1){
            return {'name is forbiden':true}
        }
       return null
    }
}
