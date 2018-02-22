export interface User {
  	id:Number;
   user_id:string;
f_name:string;
m_name:string;
l_name:string;
	surname:string;
name:string;
dob:string;
age:Number;
gender:string;
email_id:string;

    address1: string;
    address2:string;
	
	country:string;
	country_id:Number;
	
	imagepath:string;
	mobile:string;
	telephone:string;
	nationality:string;
	number:string;
	state:string;
	state_id:Number;

}


export class Country {
  constructor(public id: number, public name: string) { }
}

export class changepassword{
    constructor(
       public oldpassword: any,
        public password: any,
        public confirmPassword: any
    ){}
}      