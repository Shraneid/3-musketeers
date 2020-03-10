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
> currency@ test D:\WORK\Programmation\Javascript\3-musketeers\currency
> jest

 PASS  ./index.test.js
  currency
    √ should convert 1 USD to EUR (15ms)
    √ should convert 1 USD to USD (3ms)
    √ should convert 1 EUR to USD (4ms)
    √ should convert 1 BTC to USD (1ms)
    √ should convert 1 BTC to EUR (2ms)
    √ should convert (with default values) without arguments (1ms)
    √ should convert with amount only as argument (1ms)
    √ should convert with amount and (from) currency only as arguments (1ms)
    √ should return errors message for unknown `from` or `to` currency value (1ms)

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.739s, estimated 1s
Ran all test suites.
```

## Help

In case you need to help you can use --help :

```sh
> cli.js --help
```

In case you have an error, check if your currency codes are correct

Happy Converting !