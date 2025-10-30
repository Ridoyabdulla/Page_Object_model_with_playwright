class RegistrationPage{




    constructor(page){

        this.page = page;

        this.registrationLink = page.getByRole(  "link" , { name : "Register" } );
        this.firstNameTxt = page.getByLabel("First Name") ;
        this.lastNameTxt = page.getByLabel("Last Name");
        this.emailTxt = page.getByLabel("Email") ;
        this.passwordTxt = page.getByLabel("Password");
        this.phoneNumberTxt = page.getByLabel("Phone Number");
        this.addressTxt = page.getByLabel("Address");
        this.gender = page.getByRole("radio") ;
        this.terms = page.getByRole("checkbox");
        this.btnRegister = page.getByRole("button", { name : "REGISTER" });

    }
    
    async registerUser(  user ){
        await this.registrationLink.click();
        await this.firstNameTxt.fill(user.firstName);
        await this.lastNameTxt.fill( user.lastName );
        await this.emailTxt.fill(user.email);
        await this.passwordTxt.fill(user.password);
        await this.phoneNumberTxt.fill(user.phoneNumber);
        await this.addressTxt.fill(user.address);
        await this.gender.first().click();
        await this.terms.check();
        await this.btnRegister.click();
    }


}


export default RegistrationPage;

