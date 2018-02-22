import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../_services/subscribe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
countries: any  = [];
states: any  = [];
userInfo: any  = {};
cardInfo: any  = {};
editMode = false;
loading = false;
profileImage = "";
planList: any  =[];
openChooseplan = true;
disableChooseplan = true;
disableRegister = true;
openRegister = false;
disablePayment = true;
openPayment = false;

selectedPlan : any = {};
hideShowChooseplan = "hide";
hideShowRegister = "hide";
hideShowPayment = "hide";
amount = 0.1;

successMsghide = "show";
 successMsg = "hide";
paymentDetails: any  = {};
  constructor(private route: ActivatedRoute,
        private router: Router,
        private subscribeService: SubscribeService) { }


  ngOnInit() {
  	//this.planList = [{"title":"INDIVIDUAL", "price": "10", "color":"red", "cls":"c1"}, {"title":"BUSINESS", "price": "24", "color":"yellow", "cls":"c2"}, {"title":"LAW FIRM", "price": "35", "color":"green", "cls":"c3"}, {"title":"ACCOUNTING FIRM", "price": "150", "color":"red", "cls":"c4"}];
  		//this.userInfo = {"f_name":"bala","m_name": "murugan","l_name": "Selvarasu","email_id":"bala@bmassociates.com","password":"123","confirmpassword":"123","mobile":"9003723111"};			
  		this.userInfo = {"f_name":"","m_name": "","l_name": "","email_id":"","password":"","confirmpassword":"","mobile":"", "price":""};			
  	//this.paypalConfig = { env: 'sandbox', client: { sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R', production: '<insert production client id>' }, commit: true, payment: (data, actions) => { return actions.payment.create({ payment: {transactions: [{amount: {total: this.amount, currency: 'USD'}}]} }); }, onAuthorize: (data, actions) => { return actions.payment.execute().then(() => { /*show success*/ }); } };
  	this.getPlans();
  }

private paypalConfig: any = {
    env: 'sandbox',
    style: {
            label: 'paypal',
            size:  'medium',    // small | medium | large | responsive
            shape: 'rect',     // pill | rect
            color: 'blue',     // gold | blue | silver | black
            tagline: false    
        },
    client: {
      sandbox: 'AWlMGZwpQbS0dq_r2Dt0ejp1TxDm72JD7Pt4Uc2mYlihAE3FU5axxS9wr4HcnVc13gB7TcbYDVLp9Vne',
      production: 'xxxxxxxxxx'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.amount, currency: 'CAD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      // show success page
    }
  };


  choosePlan(selectedPlan)
  {
  	this.disableChooseplan = true;
  	this.openChooseplan = false;

  	//this.disableRegister = false;
  	this.openRegister = true;

  	//this.disablePayment = true;
	this.openPayment = false;

  	this.selectedPlan = selectedPlan;
  	this.hideShowChooseplan = "show";
  	this.hideShowRegister = "hide";
	this.hideShowPayment = "hide";
	this.userInfo = {"price" : selectedPlan.price, "plan_id" : selectedPlan.id };
	this.amount = selectedPlan.price;
  }

  enableChooseplan()
  {
  	//this.disableChooseplan = false;
  	this.openChooseplan = true;

  	//this.disableRegister = true;
  	this.openRegister = false;
  	
  	//this.disablePayment = true;
	this.openPayment = false;

  	this.hideShowChooseplan = "hide";
  	this.hideShowRegister = "hide";
	//this.hideShowPayment = "hide";
  	//console.log("openChooseplan : "+this.openChooseplan );
  }

	register(userInfo)
	{
		//alert(JSON.stringify(userInfo));
		//console.log("userInfo:"+JSON.stringify(userInfo));
		//this.disableChooseplan = true;
  		this.openChooseplan = false;
  		
  		//this.disableRegister = true;
  		this.openRegister = false;

		//this.disablePayment = false;
		this.openPayment = true;
  		//this.selectedPlan = selectedPlan;
  		this.hideShowRegister = "show";
  		this.cardInfo = userInfo;
  		//alert(JSON.stringify(this.cardInfo));
	}
  enableRegister()
  {
  	//this.disableChooseplan = true;
  	this.openChooseplan = false;

  	//this.disableRegister = false;
  	this.openRegister = true;

  	//this.disablePayment = true;
	this.openPayment = false;

  	this.hideShowRegister = "hide";
  	
  }

  userpayment(cardInfo)
  {
  	//alert(JSON.stringify(cardInfo));


  	if(cardInfo.cardNumber == "5454545454545454" && cardInfo.expiryMonth == 12 && cardInfo.expiryYear == 22 && cardInfo.cardCVC == 123)
  	{
  		 this.subscribeService.buySubscription(cardInfo)
            .subscribe(

                data => {
                    console.log(data);
                   //alert("Correct")
  					this.successMsghide = "hide";
  					this.successMsg = "show";
  					this.paymentDetails = data.loginDetails;
                   
                    
                },
                error => {
                   
                });
  		
  	}
  	else
  	{
  		alert("In Correct")	;
  		this.successMsghide = "show";
  		this.successMsg = "hide";
  	}

  	
  }
	/*payment() { console.log('payment'); } onAuthorize() { console.log("onAuthorize"); }*/

	getPlans()
  {
  	 this.subscribeService.getPlans()
            .subscribe(
                data => {
                    
                    this.planList = data;
                   // console.log(this.planList);
                },
                error => {
                   
                });
  }
}
