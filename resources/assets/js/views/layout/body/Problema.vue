<template>
<div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>
                    <div class="panel-body">
                       <form-submit :abc="userDao">
                           <form-group :form="user" field="name">
                               <input-text v-model="user.name"></input-text>
                           </form-group>
                           <form-group :form="user" field="email">
                               <input-text v-model="user.email"></input-text>
                           </form-group>
                       </form-submit>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import User from "../../../Model/User";
    import UserDao from "../../../Dao/UserDao";

    export default {

        data(){

            return {

                user: new User(),
                userDao: null,

            }
        },

        created(){

            this.user = User.buildForm(this.user);
            this.userDao = new UserDao(this.user);

        },

        mounted() {
            console.log('Component mounted.');
        },
    }
</script>
