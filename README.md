# CalculatePremium

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.
In this project, WebAPI call fetches the occupations list (drop-down) and the occupation rating factor when occupation(drop-down) is selected.
The WebAPI is currently hosted in Azure. The code base for this WebAPI is present at "https://github.com/MaithiliPalvajhala/CalculatePremium"
The data required, OccupationRating and OccupationRatingFactor tables are created and maintained in SQL Server. This also has been uploaded to Azure SQL. The commands used to create this DataBase are at : https://github.com/MaithiliPalvajhala/CalculatePremium_Documents . This share also consists of design documents.
Unit testing project is included in WebAPI for various expected inputs.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
