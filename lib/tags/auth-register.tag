<groups-auth-register class={'groups-element groups-root groups-box' + (checked ? ' groups-checked' : '')}>
    <div class="groups-header" if={opts.title}>
        <div class="groups-title">{opts.title || 'Register'}</div>
    </div>
    <div class="groups-warning" if={failMessages.length > 0}>
        <ul if={failMessages.length > 0} class="groups-fail">
            <li each={failMessage in failMessages}>{failMessage}</li>
        </ul>
    </div>
    <div class="groups-content">
        <form>
            <input ref="username" type="text" placeholder="Choose a nickname"/>
            <input ref="email" type="text" placeholder="Enter email address"/>
            <input ref="password" type="password" placeholder="Set password"/>
            <input ref="confirmation" type="password" placeholder="Confirm password"/>
            <button ref="submit" onclick={handleSubmit}>Register</button>
            <div class="groups-option groups-single">
                <a data-link="login" onclick={opts.minor ? opts.callback : handleLoginBox}>Already a member?</a>
            </div>
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
        @import '../styles/components/auth-register.less';
        */
    </style>
    <script>
        //Call functions
        import register from '../scripts/call/register.js';
        import login from '../scripts/call/login.js';
        // Helper functions
        import show from '../scripts/helper/show.js';
        import {hideOverlay} from '../scripts/helper/client.js';

        this.handleLoginBox = () => show('login');

        this.failMessages = [];

        this.checkUsernameMinimumLength = () => {
            let usernameMinimumLengthLimit = 1;
            let failMessage = 'Username is too short!';
            if(this.refs.username.value.length >= usernameMinimumLengthLimit) {
                this.refs.username.classList.remove('groups-error');
                this.failMessages.includes(failMessage) && this.failMessages.splice(this.failMessages.indexOf(failMessage), 1);
                return true;
            } else {
                this.refs.username.classList.add('groups-error');
                this.failMessages.includes(failMessage) || this.failMessages.push(failMessage);
                return false;
            }
        }
        this.checkUsernameMaximumLength = () => {
            let usernameMaximumLengthLimit = 36;
            let failMessage = 'Username must be ' + usernameMaximumLengthLimit + ' characters maximum!';
            if(this.refs.username.value.length <= usernameMaximumLengthLimit) {
                this.refs.username.classList.remove('groups-error');
                this.failMessages.includes(failMessage) && this.failMessages.splice(this.failMessages.indexOf(failMessage), 1);
                return true;
            } else {
                this.refs.username.classList.add('groups-error');
                this.failMessages.includes(failMessage) || this.failMessages.push(failMessage);
                return false;
            }
        }
        this.checkUsernamePattern = () => {
            let failMessage = 'Username is invalid. Valid characters are letters, numbers, hyphens, and underscores.';
            let usernamePattern = /^[a-zA-Z0-9-_]+$/;
            if(usernamePattern.test(this.refs.username.value)) {
                this.refs.username.classList.remove('groups-error');
                this.failMessages.includes(failMessage) && this.failMessages.splice(this.failMessages.indexOf(failMessage), 1);
                return true;
            } else {
                this.refs.username.classList.add('groups-error');
                this.failMessages.includes(failMessage) || this.failMessages.push(failMessage);
                return false;
            }
        }
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
        this.validateInformation = () => {
            let validUsernameMinimumLength = this.checkUsernameMinimumLength();
            let validUsernameMaximumLength = this.checkUsernameMaximumLength();
            let validUsernamePattern = this.checkUsernamePattern();
            let validEmailPattern = this.checkEmailPattern();
            let validPasswordMinimumLength = this.checkPasswordMinimumLength();
            let validPasswordMaximumLength = this.checkPasswordMaximumLength();
            let validPasswordMatch = this.checkPasswordMatch();
            if(
                validUsernameMinimumLength && validUsernameMaximumLength && validUsernamePattern && // Username
                validEmailPattern && // Email
                validPasswordMinimumLength && validPasswordMaximumLength && validPasswordMatch // Password
            ) {
                return true;
            } else {
                this.refs.submit.classList.remove('groups-loading');
                return false;
            }
        }
        this.handleSubmit = (event) => {
            event.preventDefault();
            let self = this;
            self.refs.submit.classList.add('groups-loading');
            let username = self.refs.username.value;
            let email = self.refs.email.value;
            let password = self.refs.password.value;
            self.refs.username.className = '';
            self.refs.email.className = '';
            self.refs.password.className = '';
            self.failMessages = [];
            if(self.validateInformation()) {
            	register(
            		username,
            		email,
            		password,
                    function(response) {
                        if(response.success) {
                            //Auto-Login
                            login(
                                username,
                                password,
                                function(response) {
                                    if(response.success) {
                                        self.checked = true;
                                        self.refs.submit.classList.remove('groups-loading');
                                        self.update();
                                        Array.from(document.getElementsByClassName('groups-element')).forEach((item) => {
                                            item._tag && item._tag.restart && item._tag.restart();
                                        });
                                        if(opts.minor) {
                                            opts.callback();
                                            opts.refresh();
                                        } else {
                                            setTimeout(function() {
                                                hideOverlay();
                                            }, 2500);
                                        }
                                    } else {
                                        self.refs.submit.classList.remove('groups-loading');
                                        show('alert', {
                                            'title': 'Register Successful!',
                                            'message': 'Please login to continue.',
                                            'affirmative': 'Login',
                                            'negative': 'Cancel',
                                            'show': 'login'
                                        });
                                    }
                                }
                            );
                        } else {
                            let failMessage = response.reason || 'We couldn\'t register you.';
                            self.failMessages = [];
                            self.failMessages.push(failMessage);
                            self.refs.username.className = 'groups-error';
                            self.refs.email.className = 'groups-error';
                            self.refs.password.className = 'groups-error';
                            self.refs.confirmation.className = 'groups-error';
                            self.refs.submit.classList.remove('groups-loading');
                            self.update();
                        }
                    }
            	);
            }
        }
    </script>
</groups-auth-register>