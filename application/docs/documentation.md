# <p align="center"> DOCUMENTATION </p>
## File and folders structure
Folder project structure by folders and files.
```ruby
.storybook
.vscode
docs
scrips
src:
	- __mocks__:
	- __stories__:
	- __tests__:
	- app:
		- App.tsx
		- AppNavigator.tsx
		- AppRoutes.tsx
		- AppTheme.tsx
		- AppThemeGlobal.tsx
	- pages:
		- Home:
		-	Profile:
		-	PageName:
	- routes:
		- pagePrincipalName.routes.tsx
		- index.tsx
		- routes.types.d.ts
	- sass:
		- abstracts:
		- base:
		- main.scss
	- services:
		- api:
		- graphql:
	- shared:
		- animations:
		- components:
		- hooks:
		- packages:
			- PackageName:
				- Package1:
				- Package2:
				- Package3:
		- styled:
			- styledConstants:
			- styledUtils:
			- UIComponent.styled.tsx
	- themes:
		- themesComponent:
		- themesDesign:
		- themesVariants:
		- index.ts
		- styled.ts
		- theme.types.d.ts
	index.tsx
	react-app-env.d.ts
	serviceWorker.ts
	setupTests.ts
.crcfc
.gitignore
config-overrides.js
package.json
package-lock.json
README.md
tsconfig.json
```