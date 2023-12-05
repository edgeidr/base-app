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
					<ELink
						to="#"
						class="text-sm"
						color="info">
						Forgot password?
					</ELink>
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
				<span class="text-sm">
					Don't have an account?
					<ELink
						:to="{ name: 'register' }"
						color="primary">
						Sign up
					</ELink>
				</span>
			</div>
		</div>
	</form>
</template>
