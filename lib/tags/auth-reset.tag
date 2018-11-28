<groups-auth-reset class={'groups-element groups-root groups-box' + (checked ? ' groups-checked' : '')}>
    <div class="groups-header" if={opts.title}>
        <div class="groups-title">{opts.title || 'Reset Password'}</div>
    </div>
    <div class="groups-warning" if={failMessages.length > 0}>
        <ul if={failMessages.length > 0} class="groups-fail">
            <li each={failMessage in failMessages}>{failMessage}</li>
        </ul>
    </div>
    <div class="groups-content">
        <form if={next == 'provideEmail'}>
            <b>Step 1</b>
            <p>Please enter your email address.</p>
            <input ref="email" type="text" placeholder="Email address"/>
            <button ref="submitEmail" onclick={handleEmailSubmit}>Continue</button>
            <div class="groups-option groups-single">
                <a data-link="register" onclick={opts.minor ? opts.callback : handleRegisterBox}>Not registered?</a>
            </div>
        </form>
        <form class="groups-code" if={next == 'verifyCode'}>
            <b>Step 2</b>
            <p>Please enter the 6-digit code we sent to your email.</p>
            <div ref="code">
                <input each={item in Array(codeCharacterCount)} onkeyup={handleCodeInput} type="text" maxlength="1" />
            </div>
            <button ref="submitCode" onclick={handleCodeSubmit}>Continue</button>
        </form>
        <form class="groups-code" if={next == 'updatePassword'}>
            <b>Step 3</b>
            <p>Please enter new password.</p>
            <input ref="password" type="password" placeholder="Enter new password" />
            <input ref="confirmation" type="password" placeholder="Confirm new password" />
            <button ref="submitPassword" onclick={handlePasswordSubmit}>Update Password</button>
        </form>
    </div>
    <div class="groups-check">
        <svg class="groups-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="groups-checkmark_circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="groups-checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
    </div>
    <style type="less">
        /*
        @import '../styles/variables.less';
        @import '../styles/mixins.less';
        @import '../styles/options.less';
        @import '../styles/components/auth-reset.less';
        */
    </style>
    <script>
        // Call functions
        import reset from '../scripts/call/reset.js';
        import verify from '../scripts/call/verify.js';
        import setPassword from '../scripts/call/setPassword.js';
        // Helper functions
        import show from '../scripts/helper/show.js';
        import {hideOverlay} from '../scripts/helper/client.js';

        //this.next = 'provideEmail';
        this.next = 'provideEmail';
        this.codeCharacterCount = 6;
        this.codeTemplate = new Array(this.codeCharacterCount);
        this.failMessages = [];

        this.handleRegisterBox = () => show('register');
        //Step 1: provideEmail
        this.checkEmailPattern = () => {
            let failMessage = 'Email is invalid. Valid format: user@site.com';
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(emailPattern.test(this.refs.email.value)) {
                this.refs.email.classList.remove('groups-error');
                this.failMessages.includes(failMessage) && this.failMessages.splice(this.failMessages.indexOf(failMessage), 1);
                return true;
            } else {
                this.refs.email.classList.add('groups-error');
                this.failMessages.includes(failMessage) || this.failMessages.push(failMessage);
                return false;
            }
        }
        this.validateEmail = () => {
            let validEmailPattern = this.checkEmailPattern();
            if(
                validEmailPattern
            ) {
                return true;
            } else {
                this.refs.submitEmail.classList.remove('groups-loading');
                return false;
            }
        }
        this.handleEmailSubmit = (event) => {
            event.preventDefault();
            let self = this;
            self.refs.submitEmail.classList.add('groups-loading');
            let email = self.refs.email.value;
            self.refs.email.className = '';
            self.failMessages = [];
            if(self.validateEmail()) {
                reset(
                    email,
                    function(response) {
                        if(response.success) {
                            self.refs.submitEmail.classList.remove('groups-loading');
                            self.email = email;
                            self.next = 'verifyCode';
                            self.update();
                            self.refs.code.firstElementChild.focus();
                        } else {
                            failMessage = response.reason || 'Please try entering your email again.';
                            self.refs.submitEmail.classList.remove('groups-loading');
                            self.refs.email.classList.add('groups-error');
                            self.failMessages.includes(failMessage) || self.failMessages.push(failMessage);
                            self.update();
                        }
                    }
                );
            }
        }
        //Step 2: verifyCode
        this.handleCodeInput = (event) => {
            if(event.keyCode != 46 && event.keyCode != 8) {
                if(!isNaN(parseInt(event.target.value))) {
                    event.target.nextElementSibling && event.target.nextElementSibling.focus();
                } else {
                    event.target.value = '';
                }
            }
        }
        this.checkCodeCharacterLength = () => {
            let self = this;
            let characters = Array.from(self.refs.code.children);
            let failMessage = 'All ' + self.codeCharacterCount + ' characters must be entered!';
            let result = true;
            characters.forEach(function(item) {
                if(item.value.length != 1) {
                    result = false;
                }
            });
            if(result == true) {
                self.failMessages.includes(failMessage) && self.failMessages.splice(self.failMessages.indexOf(failMessage), 1);
            } else {
                self.failMessages.includes(failMessage) || self.failMessages.push(failMessage);
            }
            return result;
        }
        this.checkCodeCharacterType = () => {
            let self = this;
            let characters = Array.from(self.refs.code.children);
            let failMessage = 'All ' + self.codeCharacterCount + ' characters must be number!';
            let result = true;
            characters.forEach(function(item) {
                if(isNaN(item.value)) {
                    result = false;
                }
            });
            if(result == true) {
                self.failMessages.includes(failMessage) && self.failMessages.splice(self.failMessages.indexOf(failMessage), 1);
            } else {
                self.failMessages.includes(failMessage) || self.failMessages.push(failMessage);
            }
            return result;
        }
        this.validateCode = () => {
            let characters = Array.from(this.refs.code.children);
            let validCodeCharacterLength = this.checkCodeCharacterLength();
            let validCodeCharacterType = this.checkCodeCharacterType();
            if(
                validCodeCharacterLength && validCodeCharacterType // Code
            ) {
                characters.forEach(function(item) {
                    item.classList.remove('groups-error');
                });
                return true;
            } else {
                this.refs.submitCode.classList.remove('groups-loading');
                characters.forEach(function(item) {
                    item.classList.add('groups-error');
                });
                return false;
            }
        }
        this.handleCodeSubmit = (event) => {
            event.preventDefault();
            let self = this;
            let characters = Array.from(self.refs.code.children);
            self.refs.submitCode.classList.add('groups-loading');
            let code = '';
            characters.forEach(function(item) {
                code += item.value;
                item.className = '';
            });
            self.failMessages = [];
            if(self.validateCode()) {
                verify(
                    self.email,
                    code,
                    function(response) {
                        if(response.success) {
                            self.refs.submitCode.classList.remove('groups-loading');
                            self.next = 'updatePassword';
                            self.update();
                        } else {
                            let failMessage = response.reason || 'Please try entering your code again.';
                            self.refs.submitCode.classList.remove('groups-loading');
                            let characters = Array.from(self.refs.code.children);
                            characters.forEach(function(item) {
                                item.classList.add('groups-error');
                            });
                            self.failMessages.includes(failMessage) || self.failMessages.push(failMessage);
                            self.update();
                        }
                    }
                );
            }
        }
        //Step 3: updatePassword
        this.checkPasswordMinimumLength = () => {
            let passwordMinimumLengthLimit = 5;
            let failMessage = 'Password must be ' + passwordMinimumLengthLimit + ' characters minimum!';
            if(this.refs.password.value.length >= passwordMinimumLengthLimit) {
                this.refs.password.classList.remove('groups-error');
                this.failMessages.includes(failMessage) && this.failMessages.splice(this.failMessages.indexOf(failMessage), 1);
                return true;
            } else {
                this.refs.password.classList.add('groups-error');
                this.failMessages.includes(failMessage) || this.failMessages.push(failMessage);
                return false;
            }
        }
        this.checkPasswordMaximumLength = () => {
            let passwordMaximumLengthLimit = 255;
            let failMessage = 'Password must be ' + passwordMaximumLengthLimit + ' characters maximum!';
            if(this.refs.password.value.length <= passwordMaximumLengthLimit) {
                this.refs.password.classList.remove('groups-error');
                this.failMessages.includes(failMessage) && this.failMessages.splice(this.failMessages.indexOf(failMessage), 1);
                return true;
            } else {
                this.refs.password.classList.add('groups-error');
                this.failMessages.includes(failMessage) || this.failMessages.push(failMessage);
                return false;
            }
        }
        this.checkPasswordMatch = () => {
            let failMessage = 'Passwords do not match.';
            if(this.refs.password.value == this.refs.confirmation.value) {
                this.refs.confirmation.classList.remove('groups-error');
                this.failMessages.includes(failMessage) && this.failMessages.splice(this.failMessages.indexOf(failMessage), 1);
                return true;
            } else {
                this.refs.confirmation.classList.add('groups-error');
                this.failMessages.includes(failMessage) || this.failMessages.push(failMessage);
                return false;
            }
        }
        this.validatePassword = () => {
            let validPasswordMinimumLength = this.checkPasswordMinimumLength();
            let validPasswordMaximumLength = this.checkPasswordMaximumLength();
            let validPasswordMatch = this.checkPasswordMatch();
            if(
                validPasswordMinimumLength && validPasswordMaximumLength && validPasswordMatch // Password
            ) {
                return true;
            } else {
                this.refs.submitPassword.classList.remove('groups-loading');
                return false;
            }
        }
        this.handlePasswordSubmit = (event) => {
            event.preventDefault();
            let self = this;
            self.refs.submitPassword.classList.add('groups-loading');
            let password = self.refs.password.value;
            self.refs.password.className = '';
            self.refs.confirmation.className = '';
            self.failMessages = [];
            if(self.validatePassword()) {
                setPassword(
                    password,
                    function(response) {
                        if(response.success) {
                            self.refs.submitPassword.classList.remove('groups-loading');
                            self.checked = true;
                            self.update();
                            if(opts.minor) {
                                opts.callback();
                                opts.refresh();
                            } else {
                                setTimeout(function() {
                                    hideOverlay();
                                }, 2500);
                            }
                        } else {
                            failMessage = response.reason || 'Please try entering your password again.';
                            self.refs.submitPassword.classList.remove('groups-loading');
                            self.refs.password.classList.add('groups-error');
                            self.failMessages.includes(failMessage) || self.failMessages.push(failMessage);
                            self.update();
                        }
                    }
                );
            }
        }
    </script>
</groups-auth-reset>