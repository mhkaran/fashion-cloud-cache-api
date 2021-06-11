
## Quick Start on dev machine
```
> bash deploy.sh dev
```

## Start on docker container (production ready) 
```
> bash deploy.sh start
```

## Local machine url
```
> http://localhost:8000/format
```

## Tech-Stack

| Component        	| Attribute					| version    | Reference |
| ------------- 	|-------------		| -------------	|-------------|
| express | framework | 4.17.1 | https://www.npmjs.com/package/express
| axios | HTTP clinet | 0.21.1 | https://www.npmjs.com/package/axios
| cors | cros | 2.8.5 | https://www.npmjs.com/package/cors
| wide-align | string alignment | 1.1.3 | https://www.npmjs.com/package/wide-align
| word-wrap | string wrapping | 1.2.3 | https://www.npmjs.com/package/word-wrap
| chai | assertion library | 4.3.4 | https://www.npmjs.com/package/chai
| mocha | testing framework | 8.4.0 | https://www.npmjs.com/package/mocha
| typescript | language | 4.2.4 | https://www.npmjs.com/package/typescript
| sinon | spies, stubs and mocks | 10.0.0 | https://www.npmjs.com/package/sinon
| nyc | code coverage tool | 15.1.0 | https://www.npmjs.com/package/nyc
| nock | HTTP server mocking | 13.1.0 | https://www.npmjs.com/package/nock
| eslint | static code analyzer | 7.25.0 | https://www.npmjs.com/package/eslint
| husky | git hooks | 4.3.8 | https://www.npmjs.com/package/husky
| ts-node | TypeScript execution engine for node | 9.1.1 | https://www.npmjs.com/package/ts-node
| nodemon | utility monitor for development | 2.0.7 | https://www.npmjs.com/package/nodemon
| docker | container engine | 20.10.5 | https://docs.docker.com/docker-for-mac/install/


## Understanding of request parameters
-   There are there parameters **input**, **formatRule** & **formatRuleType**.
-   **input** : it's an input string which is mandatory.
-   **formatRule** : it's an custom speified foramt rule & it is optional, below is custom foramt rule structure.
-   All fields are mandatory
    ```
    {
        width : type of number
        alignment : type of string
        spacing : type of string
        bold : type of array
        italic : type of array
        replace : type of array
        chuck_Norris : type of array
    }
    ```
-   **formatRuleType** : it's an pre-defined speified foramt type id & it is optional.
-   When request does not contain **formatRule** & **formatRuleType** then default format rule type applied.
-   When request contain both **formatRuleType** &&  **formatRule** then **formatRuleType** gets high priority.
-   Currently, there three format rule type define : default, suppiler-1, restaurants-1


##  Sample request
```
{
    "input" : " If you are looking to have an impact on the world, then read carefully because",
    "formatRule" : {
        width:80;
        alignment:"center;
        spacing:"\n";
        bold:["choco"];
        italic:["Choco"];
        replace:["Choco,CHOCO"];
        chuck_Norris:["industry"];
        },
    "formatType" : "default"
}
```

## Unit test & code covrage rerport
```
> bash deploy.sh test
```

![](img/unit_test_report.png)

![](img/code_coverage.png)
