# AngularProjects
This is a monorepo for my Angular projects, generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6 and upgraded to Angular 8.0.0.

## Projects
 - `library` is a bunch of stuff that can be used in other projects.
 - `sandbox` is an app I may use to test out ideas, etc. Expect little in the way of polish.

## Continuous Integration
I've experimented with CI using CircleCI via GitHub. It basically runs the tests when pushing new commits to the remote repository on GitHub. It works by deploying the app into a Docker container. As such, the configuration may periodically need changing according to Angular's requirements. For example, when I upgraded from Angular 7 to Angular 8, the tests worked fine but failed on CircleCI. I had to upgrade the Docker image in the CircleCI configuration from Node 8 to Node 12, which resolved the problem.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
