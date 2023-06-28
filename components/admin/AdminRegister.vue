<template>
    <b-container fluid="sm">
        <b-card class="card-form">
            <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                    id="input-group-name"
                    label="Name:"
                    label-for="input-name"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                        id="input-name"
                        v-model="form.name.val"
                        name="name"
                        type="text"
                        :state="form.name.isValid"
                        placeholder="Enter name"
                        @blur="validateBlur"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="form.name.isValid">
                        {{ form.name.errorMessage }}
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                    id="input-group-email"
                    label="Email address:"
                    label-for="input-email"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                        id="input-email"
                        v-model="form.email.val"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        required
                        :state="form.email.isValid"
                        @blur="validateBlur"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="form.email.isValid">
                        {{ form.email.errorMessage }}
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                    id="input-group-password"
                    label="Your Password:"
                    label-for="input-password"
                >
                    <b-form-input
                        id="input-password"
                        v-model="form.password.val"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        required
                        :state="form.password.isValid"
                        @blur="validateBlur"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="form.password.isValid">
                        {{ form.password.errorMessage }}
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                    id="input-group-resetPassword"
                    label="Your Repeat Password:"
                    label-for="input-resetPassword"
                >
                    <b-form-input
                        id="input-2"
                        v-model="form.resetPassword.val"
                        name="resetPassword"
                        type="password"
                        placeholder="Enter Reset Password"
                        required
                        :state="form.resetPassword.isValid"
                        @blur="validateBlur"
                    ></b-form-input>
                    <b-form-invalid-feedback
                        :state="form.resetPassword.isValid"
                    >
                        {{ form.resetPassword.errorMessage }}
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
            </b-card>
        </b-card>
    </b-container>
</template>

<script>
export default {
    title: 'Register',

    data() {
        return {
            form: {
                name: {
                    val: '',
                    isValid: null,
                    errorMessage: '',
                },
                email: {
                    val: '',
                    isValid: null,
                    errorMessage: '',
                },
                password: {
                    val: '',
                    isValid: null,
                    errorMessage: '',
                },
                resetPassword: {
                    val: '',
                    isValid: null,
                    errorMessage: '',
                },
            },
            formIsValid: true,
        }
    },
    computed: {
        validation() {
            return this.form.email.val !== ''
        },
    },
    methods: {
        validateBlur(event) {
            // const type = event.target.type
            const value = event.target.value
            const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
            const fieldName = event.target.name

            switch (fieldName) {
                case 'email':
                    if (value === '') {
                        this.form[fieldName].errorMessage = 'Email is required'
                        this.form[fieldName].isValid = false
                    } else if (!mailformat.test(value)) {
                        this.form[fieldName].errorMessage = 'Email is invalid'
                        this.form[fieldName].isValid = false
                    } else {
                        this.form[fieldName].errorMessage = ''
                        this.form[fieldName].isValid = true
                    }
                    break

                case 'resetPassword':
                    if (value !== this.form.password.val) {
                        this.form[fieldName].errorMessage =
                            'Not match with password'
                        this.form[fieldName].isValid = false
                    } else if (value === '') {
                        this.form[fieldName].errorMessage =
                            'This field is required'
                        this.form[fieldName].isValid = false
                    } else {
                        this.form[fieldName].errorMessage = ''
                        this.form[fieldName].isValid = true
                    }

                    break
                default:
                    if (value === '') {
                        this.form[fieldName].errorMessage =
                            'This field is required'
                        this.form[fieldName].isValid = false
                    } else {
                        this.form[fieldName].errorMessage = ''
                        this.form[fieldName].isValid = true
                    }
                    break
            }
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email.val = ''
            this.form.name.val = ''
            this.form.password.val = ''
            this.form.resetPassword.val = ''
            // Trick to reset/clear native browser form validation state
            // this.show = false
            // this.$nextTick(() => {
            //     this.show = true
            // })
        },
        validate() {
            this.formIsValid = true
            if (this.form.name.val === '') {
                this.form.name.isValid = false
                this.formIsValid = false
            }
            if (this.form.email.val === '') {
                this.form.email.isValid = false
                this.formIsValid = false
            }
            if (this.form.password.val === '') {
                this.form.password.isValid = false
                this.formIsValid = false
            }
        },
        onSubmit(event) {
            event.preventDefault()
            this.validate()
            this.$store.dispatch('register', this.form)
        },
    },
}
</script>
<style scoped>
.card-form {
    width: 50%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -10%);
}
* {
    box-sizing: border-box;
}

/* style the container */
.container {
    position: relative;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px 0 30px 0;
}

/* style inputs and link buttons */
input,
.btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none; /* remove underline from anchors */
}

input:hover,
.btn:hover {
    opacity: 1;
}

/* add appropriate colors to fb, twitter and google buttons */
.fb {
    background-color: #3b5998;
    color: white;
}

.twitter {
    background-color: #55acee;
    color: white;
}

.google {
    background-color: #dd4b39;
    color: white;
}

/* style the submit button */
input[type='submit'] {
    background-color: #04aa6d;
    color: white;
    cursor: pointer;
}

input[type='submit']:hover {
    background-color: #45a049;
}

/* Two-column layout */
.col {
    float: left;
    width: 50%;
    margin: auto;
    padding: 0 50px;
    margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
    content: '';
    display: table;
    clear: both;
}

/* vertical line */
.vl {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    border: 2px solid #ddd;
    height: 175px;
}

/* text inside the vertical line */
.inner {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 8px 10px;
}

/* hide some text on medium and large screens */
.hide-md-lg {
    display: none;
}

/* bottom container */
.bottom-container {
    text-align: center;
    background-color: #666;
    border-radius: 0px 0px 4px 4px;
}

/* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 650px) {
    .col {
        width: 100%;
        margin-top: 0;
    }
    /* hide the vertical line */
    .vl {
        display: none;
    }
    /* show the hidden text on small screens */
    .hide-md-lg {
        display: block;
        text-align: center;
    }
}
</style>