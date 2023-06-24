#Add root package.json
yarn init

#Create folders with projects (packages)
mkdir packages
cd ./packages
mkdir app-one
mkdir package1
mkdir package2

#Add package.json files for every project
yarn init

#Configure workspaces in root package.json
"workspaces": ["packages/*"]

#Configure dependencies in app-one package.json
"dependencies": {
"cross-env": "5.0.5",
"@monorepo/package1": "1.0.0",
"@monorepo/package2": "1.0.0"
}

#Configure dependencies in files inside packages
"dependencies": {
"cross-env": "5.0.5"
}

#Run yarn install for root package.json in the root directory
yarn install