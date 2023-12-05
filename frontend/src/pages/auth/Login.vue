<template>
	<form>
		<h3>Login</h3>

		<div class="mt-xl">
			<div class="mt-md">
				<EInput label="Username"></EInput>
			</div>

			<div class="mt-md">
				<EInput
					label="Password"
					type="password">
				</EInput>

				<div class="mt-xs text-right">
					<span class="text-sm">Forgot password?</span>
				</div>
			</div>
		</div>

		<div class="mt-lg">
			<div class="mt-md">
				<EButton
					type="submit"
					label="Sign In"
					color="primary">
				</EButton>
			</div>

			<div class="mt-md">
				<span class="text-sm">Don't have an account? Sign up</span>
			</div>
		</div>
	</form>
</template>
