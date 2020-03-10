# Currency 

Currency is a currency converter tool for JavaScript. It checks in real time currency values to give you the most accurate conversion possible.
Bitcoin currenct is also supported

## Installation

Clone project and then install dependencies

<details><summary><b>Show instructions</b></summary>

1. Clone:
    ```sh
    > cd your/directory/here
    > git clone https://github.com/Shraneid/3-musketeers
    ```

2. Install dependencies:
    ```sh
    > cd /3-musketeers
    > npm install
    ```

</details>

## Usage

The script takes in 3 parameters to work, the amount you want to convert, the currency from and to which you want to convert

Parameters
|               | Amount        | From Currency | To Currency   |
| ------------- | ------------- | ------------- | ------------- |
| Default Value | 1             | USD           | BTC           |
| Required      | No            | No            | No            |

You need to use the currency codes for the program to work, use BTC for Bitcoin

```sh
> node cli.js <valueToConvert> <FromCurrency> <ToCurrency>
```

Example
```sh
> node cli.js 10 EUR BTC
> 10 EUR = 0.0014414476747286835 BTC
```

## Tests

Tests are handled by Jest
Do the following to test :

```sh
> npm test
> TODO
```

## Help

In case you need to help you can use --help :

```sh
> cli.js --help
```

In case you have an error, check if your currency codes are correct

Happy Converting !