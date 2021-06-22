<template>
  <div :class="['snackbar',{'snackbar__show': show},`bg-${color}`]" class="snackbar flex items-center p-2 space-x-4 rounded-md bg-green-seakun text-white" >
	<div  class="flex items-center  justify-center w-1/12">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
			<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
		</svg>
	</div>
	<span>{{ message }}</span>
</div>
</template>

<script>
export default {
    name : "snackbar",
    data: () => ({
        show :false,
        tempTimeOut : null,
        color : 'green-seakun',
        message : ''
    }),
    methods : {
       showSnackbar({color,className,message}){
           this.color = color ? color : 'green-seakun'
           this.className = className
           this.message = message
           this.show = true
           this.hideSnackbar()
       },
       hideSnackbar(){
            if (this.show) {
                setTimeout(function () { this.show = false }.bind(this), 3500)
            }
       }
    }

}
</script>

<style lang="scss" scoped>
    .snackbar {
        max-height: 100px;
        position: fixed;
        z-index: 900;
        width: 50%;
        min-width: 320px;
        bottom: -100px;
        height: auto;
        left: 50%;
        transform: translateX(-50%);
        transition:all 0.5s linear;


        &__show {
            bottom: 30px;
        }
    }
</style>

