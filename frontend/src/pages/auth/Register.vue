<template>
	<form>
		<h3>Register</h3>

		<div class="mt-xl">
			<div class="mt-md">
				<EInput label="First name"></EInput>
			</div>

			<div class="mt-md">
				<EInput label="Last name"></EInput>
			</div>
		</div>

		<div class="mt-md">
			<EInput label="Username"></EInput>
		</div>

		<div class="mt-md">
			<EInput
				label="Password"
				type="password">
			</EInput>
		</div>

		<div class="mt-2xl">
			<div class="mt-md">
				<EButton
					type="submit"
					label="Sign Up"
					color="primary">
				</EButton>
			</div>

			<div class="mt-md">
				<span class="text-sm">
					Already a member?
					<ELink
						:to="{ name: 'login' }"
						color="primary">
						Sign in
					</ELink>
				</span>
			</div>
		</div>
	</form>
</template>
