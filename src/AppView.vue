<style lang='less' scoped>
	div {
		margin: 16px;
		p {
			color: purple;
			font-size: 32px;
		}
	}
</style>

<template>
	<div>
		<p> {{ message }} </p>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello from your AppView single file component!',
            }
        }
    }
</script>
