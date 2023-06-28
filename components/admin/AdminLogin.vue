<template>
    <b-container fluid="sm">
        <b-form @submit="onSubmit">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Your Name:"
                label-for="input-2"
            >
                <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Enter name"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                <b-form-select
                    id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required
                ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                    id="checkboxes-4"
                    v-model="form.checked"
                    :aria-describedby="ariaDescribedby"
                >
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that"
                        >Check that out</b-form-checkbox
                    >
                </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <!-- <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card> -->
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            form: {},
            userName: {
                val: '',
                isValid: true,
            },
            password: {
                val: '',
                isValid: true,
            },
            formIsValid: true,
        }
    },
    methods: {
        validate() {
            this.formIsValid = true
            if (this.userName.val === '') {
                this.userName.isValid = false
                this.formIsValid = false
            }
            if (this.password.val === '') {
                this.password.isValid = false
                this.formIsValid = false
            }
        },
        submitForm(event) {
            event.preventDefault()
            this.validate()
            const formData = {
                userName: this.userName,
                password: this.password,
            }
            this.$store.dispatch('login', formData)
        },
    },
}
</script>
<style scoped>
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