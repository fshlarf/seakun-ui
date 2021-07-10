<template>
    <div :class="[{'warning-order--show': isShowWarning}]" class="warning-order h-auto w-6/12  mx-auto flex flex-col space-y-4 items-center justify-center rounded">
		<div class="flex flex-row w-full justify-between items-center  py-3 px-4 rounded">
			<span class="warning-order-icon">
				<AlertIcon/>
			</span>
			<div class="warning-order-content mx-4 flex-1 text-black">
				<div class="alert-title font-semibold text-md ">
					Proses berlangganan Netflix belum selesai
				</div>
				<div class="warning-order-description  text-sm">
					Klik Untuk Detail
				</div>
			</div>
			<span class="warning-order-close cursor-pointer font-bold text-md" @click="onCloseWarning">
				<CloseIcon/>
			</span>
		</div>
	</div>
</template>

<script>
import AlertIcon from '~/assets/images/icon/alert.svg?inline'
import CloseIcon from '~/assets/images/icon/close.svg?inline';

export default {
    name: 'OrderWarning',
	components : {
		AlertIcon,
		CloseIcon
	},
	mounted() {
		this.showWarning()
	},
	data(){
		return {
			isShowWarning : false
		}
	},
	methods : {
		showWarning(){
			setTimeout(function(){
				console.log('resasd')
				this.isShowWarning = true
			}.bind(this),1000)
		},
		onCloseWarning() {
			this.isShowWarning = false
		}
	},
}
</script>

<style lang="scss" scoped>
.warning-order  {
	background-color: #FFC801;
	position: fixed;
	bottom: -6em;
	left: 50%;
    transform: translateX(-50%);
    transition:all 0.5s linear;

	&--show{
		bottom: 6em!important;
	}
	&-icon{
		align-self: self-start;
    	margin-top: 6px;
		svg {
			width: 18px;
			height: auto;
			fill: black;
		}	
	}
	&-close {
		svg {
			width: 12px;
			height: auto;
			fill: black;
		}
	}
}
</style>