<template>
    <div>
        <button :class="buttonClass"  @click="handleClick">{{buttonText}}</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name:'ButtonItem',
        props:{
           type:{
             type:String,
            required: true,
           }
        },

        computed:{
            buttonClass(){
                switch(this.type) {
                    case 'login':
                        return 'text-textColor hover:text-btnColor';
                    case 'sigin':
                        return 'btn btn-sigin-btn';
                    case 'getStarted':
                        return 'bg-btnColor py-1 px-3 rounded';
                    default:
                        return 'btn'
                }
            },
            buttonText(){
                switch(this.type){
                    case'login':
                        return 'Login';
                    case'getStarted':
                        return 'Get Started >>>';
                    default:
                        return 'Button'
                }
            }
        },
        methods:{
            ...mapActions({
                submitAction:'submitAction',
                signInAction: 'signInAction',
                createAccountAction: 'createAccountAction',
            }),
            handleClick() {
                switch (this.type) {
                    case 'login':
                    this.submitAction();
                    break;
                    case 'getStarted':
                    this.signInAction();
                    break;
                }
            },
        },
       
    
    }
</script>

<style lang="stylus" scoped>

</style>
