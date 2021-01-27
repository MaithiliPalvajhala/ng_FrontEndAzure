# CalculatePremium

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.
In this project, WebAPI call fetches the occupations list (drop-down) and the occupation rating factor when occupation(drop-down) is selected.
The WebAPI is currently hosted in Azure. The code base for this WebAPI is present at "https://github.com/MaithiliPalvajhala/CalculatePremium"
The data required, OccupationRating and OccupationRatingFactor tables are created and maintained in SQL Server. This also has been uploaded to Azure SQL. The commands used to create this DataBase are at : https://github.com/MaithiliPalvajhala/CalculatePremium_Documents . This share also consists of design documents.
Unit testing project is included in WebAPI for various expected inputs.

## Development server

install dependencies :
npm install @angular/http
npm install currency-formatter --save
ng add @angular/material

creating new components - service and class
ng new CalculateDeathCoverPremium
ng g c userDetails
ng g service services\CalcPremium

Git related commands:
git config --global user.name "Maithili Palavajhala" 
git config --global user.email maithili.palavajhala@gmail.com 
git log
git init
git remote add origin https://github.com/MaithiliPalvajhala/ng-FrontEnd.git 
ng add angular-cli-ghpages.

using Visual Studio Code, source control explores, added changes to "staged changes". Then added description for changes and click on "commit".
git push origin master


---building and publishing in GitHub.
ng build --prod --base-href "https://MaithiliPalvajhala.github.io/ng-FrontEnd/"
ngh --dir dist/CalculatePremium

ng build (for development server)
Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

